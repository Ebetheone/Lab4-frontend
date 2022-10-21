import React from "react";
import { Modal, Button, Form, Input, InputNumber } from "antd";
import "antd/dist/antd.css";
import { useEditMenu } from "./useEditMenu";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const AddMenu = ({ setVisible, visible }) => {
  const { addMenu } = useEditMenu();
  return (
    <div>
      <Modal
        onCancel={() => setVisible(false)}
        title="Home"
        visible={visible}
        footer={null}
      >
        <Form {...layout} name="nest-messages" onFinish={addMenu}>
          <Form.Item name="firstName" label="First Name">
            <Input />
          </Form.Item>
          <Form.Item name="lastName" label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item name="age" label="Age">
            <InputNumber />
          </Form.Item>
          <Form.Item name="address" label="Address">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddMenu;
