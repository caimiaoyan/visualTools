import { ReactElement, useState } from 'react';
import { Form, Button, Modal, Input, Switch, InputNumber, message } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { updatePageInfo, resetPageInfo } from '../../app/codeTreeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

interface Props { }

export default function PageInfo({ }: Props): ReactElement {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const state = useAppSelector((state) => {
    const {present} = state.codeTree
    visible && form.setFieldsValue(present.pageInfo)
    return present;
  });
  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    dispatch(updatePageInfo(values))
    message.success('页面配置设置成功');
    setVisible(false);
  };

  const onReset = () => {
    form.resetFields();
    dispatch(resetPageInfo({}))
  };

  return (
    <>
      <Button onClick={() => setVisible(!visible)} type="text">
        <EditOutlined />
        页面设置
      </Button>
      <Modal
        width="600px"
        onCancel={() => setVisible(false)}
        title="页面设置"
        footer={false}
        open={visible}
      >
        <>
          <Form
            form={form}
            name="pageInfo"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="路由地址"
              name="router"
            >
              <Input placeholder='请输入路由地址'/>
            </Form.Item>
            <Form.Item
              label="title"
              name="title"
            >
              <Input placeholder='请输入title'/>
            </Form.Item>
            <Form.Item
              label="keywords"
              name="keywords"
            >
              <Input placeholder='请输入keywords'/>
            </Form.Item>
            <Form.Item
              label="description"
              name="description"
            >
              <Input.TextArea placeholder='请输入description'/>
            </Form.Item>
            <Form.Item
              label="动态tdk"
              name="dynamicTdk"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
            <Form.Item
              label="组件更新周期"
            >
              <Form.Item
                name="expirationTime"
                noStyle
              >
                <InputNumber min={0} step={0.1} placeholder='更新周期'/>
              </Form.Item>
              <span className="ant-form-text">天</span>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 5, span: 18 }}>
              <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
                保存
              </Button>
              <Button onClick={onReset}>
                清空
              </Button>
            </Form.Item>
          </Form>
        </>
      </Modal>
    </>
  );
}
