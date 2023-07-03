import { ReactElement} from 'react';
import { Button } from 'antd';
import { RocketOutlined } from '@ant-design/icons';

interface Props {}

export default function SaveBtn({}: Props): ReactElement {
  return (
    <>
      <Button type="primary" shape="round">
        <RocketOutlined />
        发布
      </Button>
    </>
  );
}
