import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { append, moveCom, FieldNodeSchema } from '../../app/codeTreeSlice';
import { CRAD } from '../ItemTypes';
import { useDrop } from 'react-dnd';
import cl from 'classnames';
import Item from './Item';
import CustomDragLayer from './CustomDragLayer';

interface DragItem {
  type: string;
  data: FieldNodeSchema;
  dragParentId: string;
  dragIndex: number;
  isTemplate?:boolean
}
interface Props {
  mobile: boolean;
}

export default function Canvas({ mobile }: Props) {
  const state = useAppSelector((state) => state.codeTree.present);
  const dispatch = useAppDispatch();
  const [{ canDrop, isOver }, drop] = useDrop<
    DragItem,
    {},
    { canDrop: boolean; isOver: boolean }
  >(() => ({
    accept: CRAD,
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop(); // returns false for direct drop target
      if (didDrop) {
        return;
      }

      //没有id 是新增,有id是移动
      if (!item.data.id || item.isTemplate) {
        dispatch(append(item.data));
      } else {
        dispatch(
          moveCom({
            dragParentId: item.dragParentId,
            dragIndex: item.dragIndex,
            data: state,
            item: item.data,
          })
        );
      }
      return { name: 'Dustbin' };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({
        shallow: true,
      }),
      canDrop: monitor.canDrop(),
    }),
  }));
  return (
    <div className="canvas-wrapper flex-1 overflow-y-scroll">
      <div
        //ref={drop}
        style={{ width: mobile ? 375 : 'auto' }}
        className={cl(
          'canvas-container transition-all duration-300 relative flex',
        )}
      >
        {state.children.map((sub, index) => (
          <Item parentId={state.id} index={index} data={sub} key={sub.id} />
        ))}
        {state.children.length === 0 ? (
          <div className="flex items-center justify-center text-gray-200 text-3xl absolute inset-0">
            拖动组件到这里
          </div>
        ) : null}
        {isOver && canDrop ? (
          <div className="border-indigo-600 border my-1" />
        ) : null}
        <CustomDragLayer />
      </div>
    </div>
  );
}
