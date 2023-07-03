import { ReactElement} from 'react';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

interface Props {}

export default function EditBtn({}: Props): ReactElement {
  return (
    <Link to={'/'}>
      <Button type="primary" shape="round" className='website-bg'>
        <EditOutlined />
        继续编辑
      </Button>
    </Link>
  );
}
