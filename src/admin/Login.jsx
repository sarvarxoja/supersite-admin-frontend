import React, { useEffect } from "react";
import Img from "../assets/logo.png";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { $axios } from "../http";
export default function Login({ access }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (access) {
      navigate("/admin/");
    }
  }, [access]);

  const onFinish = async (values) => {
    try {
      const { data } = await $axios.post("/auth/login", {
        login: values.login,
        password: values.password,
      });

      if (data.status === 200) {
        localStorage.setItem("accessToken", data.accessToken);
        navigate("/admin/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#A11E29] flex items-center justify-center">
        <img src={Img} alt="" />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Form
          name="login"
          className="w-full max-w-[400px]"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Username"
            name="login"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
