import React, { useState } from "react";
import "./style.scss";
import { Space, Table, Modal, Button } from "antd";
import "antd/dist/antd.css";
import Data from "../../data/home.json";
import { useEditItem } from "./Modal/useEditItem";
import AddItem from "../../widgets/ItemsTable/Modal/AddItem";
import EditItem from "../../widgets/ItemsTable/Modal/EditItem";
const { Column } = Table;
const { confirm } = Modal;

const ItemsTable = () => {
  const [visible, setVisible] = useState(false);
  const [handleEdit, setHandleEdit] = useState(false);
  const { DeleteItem } = useEditItem();
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this task?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        DeleteItem();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  return (
    <>
      <AddItem visible={visible} setVisible={setVisible} />
      <EditItem handleEdit={handleEdit} setHandleEdit={setHandleEdit} />
      <div className="Border">
        <div className="flex">
          <div className="title">Бараанууд</div>
          <Button type="primary" onClick={() => setVisible(true)}>
            Add Item
          </Button>
        </div>
        <div className="ItemsTable">
          <Table dataSource={Data}>
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
              title="Action"
              key="action"
              render={(_, record) => (
                <Space size="middle">
                  <a onClick={() => setHandleEdit(true)}>Edit</a>
                  <a onClick={() => showDeleteConfirm()}>Delete</a>
                </Space>
              )}
            />
          </Table>
        </div>
      </div>
    </>
  );
};

export default ItemsTable;
