import React from "react";
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox } from "antd";
import "./Login.css";
export const Login = (props) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <div class="bg-light p-5 " style={{ height: "100vh!important" }}>
                <div class="m-auto bg-white col-lg-4">
                    <div class="p-3">
                        <div class="text-center fw-bold h3 mb-3">Se conecter</div>
                        <Form
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item className="d-flex justify-content-between">
                                <div className="d-flex justify-content-between">

                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>
                                    <Link className="login-form-forgot" to="">
                                        Forgot password
                                    </Link>
                                </div>
                            </Form.Item>
                            <Form.Item>
                                <div className="d-flex flex-column">
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                    <div>Or <Link to="">register now!</Link>
                                    </div>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}