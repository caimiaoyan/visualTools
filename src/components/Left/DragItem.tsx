import cl from 'classnames';
import { CRAD } from '../ItemTypes';
import { useDrag } from 'react-dnd';
import { v1 as uuid } from 'uuid';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { FieldNodeSchema ,colNode} from '../../app/codeTreeSlice';
import { FieldNode } from '../schema/types';
import { FileOutlined } from '@ant-design/icons';
import { jsonToCodeTree } from './transform';

export default function DragItem({
  data,
}: {
  data: FieldNodeSchema | FieldNode;
}) {
  const [{ isDragging }, dragRef, connectDragPreview] = useDrag(() => {
    const { type, props } = data;
    let children: any[] = [];
    let codeTree: any = {};
    if (type === 'Grid') {
      const col = props.cols || 1;
      if(col > 1){
        children = new Array(col).fill('1').map(() => (
          {...colNode,...{id: uuid()}}
        ));
      }
    }else if(type === 'Template'){
      const cpList = props.cpList || []
      //模板json转成渲染树
      codeTree = jsonToCodeTree(cpList)
      console.log(codeTree)
    }
    return {
      type: CRAD,
      item: {data: type === 'Template' ? codeTree.children[0] : { ...data, children },isTemplate:!!(type === 'Template')},
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    };
  }, []);
  connectDragPreview(getEmptyImage());

  return (
    <div
      ref={dragRef}
      className={cl(
        'component-item',
        {
          'opacity-30': isDragging,
        }
      )}
    >
      <div>
        {data.icon ? data.icon :
          <FileOutlined/>  
        }
      </div>
      <span>{data.title || data.type}</span>
    </div>
  );
}
