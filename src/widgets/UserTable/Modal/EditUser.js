import { Modal, Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { useEditUser } from "./useEditUser";
import { ScaleLoader } from "react-spinners";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const EditUser = ({ setHandleEdit, handleEdit, loading }) => {
  const { editUser } = useEditUser();
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={!!handleEdit}
        onCancel={() => setHandleEdit(undefined)}
        footer={null}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={(formData) =>
            editUser({ ...formData, _id: handleEdit._id })
          }
        >
          {loading ? (
            <ScaleLoader
              color="#1890FF"
              height={50}
              speedMultiplier={1.5}
              width={5}
            />
          ) : (
            <>
              <Form.Item name="password" label="password">
                <Input />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default EditUser;
