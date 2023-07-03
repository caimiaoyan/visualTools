import { ReactElement } from 'react';
import { Button, Modal } from 'antd';
import { ClearOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../app/hooks';
import { clearCom } from '../../app/codeTreeSlice';

const { confirm } = Modal;

interface Props { }

export default function ClearBtn({ }: Props): ReactElement {

  const dispatch = useAppDispatch();

  const clearPanel = () => {
    confirm({
      content: '确定要清空编辑面板?',
      onOk() {
        dispatch(clearCom({}))
      },
    });
  }

  return (
    <>
      <Button type="text" onClick={clearPanel}>
        <ClearOutlined />
        清空面板
      </Button>
    </>
  );
}
