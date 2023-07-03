import { ReactElement } from 'react';
import { Button } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

interface Props {}

export default function SaveBtn({}: Props): ReactElement {
  return (
    <>
      <Button type="text">
        <SaveOutlined />
        保存
      </Button>
    </>
  );
}
