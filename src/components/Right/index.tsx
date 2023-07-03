import { traverse } from '../../utils';
import { fields } from './fields';
import editFields from '../schema/edit';
import { FieldNodeSchema, updateTree } from '../../app/codeTreeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Field } from '../schema/types';
import { Tabs, TabsProps } from 'antd';

export default function Right() {
  const state = useAppSelector((state) => state.codeTree.present);
  const dispatch = useAppDispatch();
  let focusComponent: FieldNodeSchema | undefined;
  traverse(state, (sub) => {
    if (sub.id === state.focusId) {
      focusComponent = sub;
      return false;
    }
    return true;
  });

  const handleChange = (value: any, key: string) => {
    dispatch(
      updateTree({
        key,
        value,
      })
    );
  };

  const renderField = (item: Field) => {
    const { key, name, type, ...other } = item;
    if (type === 'Select') {
      const Select = fields[type];
      return (
        <Select
          style={{ width: '100%' }}
          options={other.options}
          value={focusComponent?.props[key]}
          onChange={(value: any) => handleChange(value, key)}
        />
      );
    }
    const Field = fields[type] as any;
    return (
      <Field
        {...other}
        value={focusComponent?.props[key]}
        onChange={(value: any) => handleChange(value, key)}
        label={name}
      />
    );
  };

  console.log('focusComponent', focusComponent)

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `属性设置`,
      children: (
        <div className="edit-tabs-panel">
          {focusComponent ? (
            editFields[focusComponent.type].map((item, index) => {
              const { key, name } = item;
              return (
                <div className='item-row' key={key}>
                  <div className='label-item'>{name}：</div>
                  <div className='form-item'>{renderField(item)}</div>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center items-center text-gray-200 text-xl flex-1 edit-panel-empty">
              请在左侧画布中选择节点
            </div>
          )}
        </div>
      ),
    },
    {
      key: '2',
      label: `组件描述`,
      children: (
        <div className='edit-tabs-panel'>
          <div className='mt-5'>{focusComponent ? focusComponent.desc : '暂无组件描述'}</div>
        </div>
      ),
    },
    
  ];

  return (
    <div className="edit-module-wrapper overflow-y-scroll flex flex-col">
      <div className="flex-shrink-0 px-4 border-b border-gray-200 font-medium flex-1">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
}
