import React from "react";
import { Table, Card } from 'antd';
import "./style.scss";
import "antd/dist/antd.css";
const OrderTable = () => {
    return (
        <div className="OrderTable">
            <Card
                title="Захиалга"
                style={{
                    borderRadius: "12px",
                }}
                bordered="false"
            >
                <Table
                    columns={[
                        {
                            title: 'Name',
                            dataIndex: 'name',
                        },
                        {
                            title: 'Age',
                            dataIndex: 'age',
                        },
                        {
                            title: 'Address',
                            dataIndex: 'address',
                        },
                    ]}
                    dataSource={[
                        {
                            key: '1',
                            name: 'John Brown',
                            age: 32,
                            address: 'New York No. 1 Lake Park',
                        },
                        {
                            key: '2',
                            name: 'Jim Green',
                            age: 42,
                            address: 'London No. 1 Lake Park',
                        },
                        {
                            key: '3',
                            name: 'Joe Black',
                            age: 32,
                            address: 'Sidney No. 1 Lake Park',
                        },
                    ]}
                    size="middle" />

            </Card>
        </div>
    );
};

export default OrderTable;
