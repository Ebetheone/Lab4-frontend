import React, { useState } from "react";
import "./style.scss";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import { useLogin } from "./useLogin";
import { ScaleLoader } from "react-spinners";

const Login = () => {
  const { login, loading } = useLogin();
  const [change, setChange] = useState(false);
  return (
    <div>
      {change ? (
        <div></div>
      ) : (
        <div className="Login">
          {loading ? (
            <ScaleLoader
              color="#1890FF"
              height={50}
              speedMultiplier={1.5}
              width={5}
            />
          ) : (
            <div className="rounded">
              <p className="title">Elbeg's Dashboard</p>
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={login}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Log In
                  </Button>
                  <Button
                    type="primary"
                    htmlType="button"
                    onClick={() => setChange(true)}
                  >
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
