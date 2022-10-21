import React, { useState } from "react";
import "./style.scss";
import { Space, Table, Modal, Button } from "antd";
import "antd/dist/antd.css";
import Data from "../../data/home.json";
import AddMenu from "./Modal/AddMenu";
import EditMenu from "./Modal/EditMenu";
const { Column } = Table;
const { confirm } = Modal;

const MenuTable = () => {
  const [visible, setVisible] = useState(false);
  const showDeleteConfirm = () => {
    confirm({
      title: "Та устгахдаа итгэлтэй байна уу?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("Deleted");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  return (
    <>
      <AddMenu visible={visible} setVisible={setVisible} />
      <EditMenu visible={visible} setVisible={setVisible} />
      <div className="Border">
        <div className="flex">
          <div className="title">Цэс</div>
          <Button type="primary" onClick={() => setVisible(true)}>
            Add Menu
          </Button>
        </div>
        <div className="MenuTable">
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
                  <a onClick={() => setVisible(true)}>Edit</a>
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

export default MenuTable;
