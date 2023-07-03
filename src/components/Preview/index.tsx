import { ReactElement } from 'react';
import { Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

interface Props {}

export default function SaveBtn({}: Props): ReactElement {
  return (
    <Link to='/preview'>
      <Button type="text">
        <EyeOutlined />
        预览
      </Button>
    </Link>
  );
}
