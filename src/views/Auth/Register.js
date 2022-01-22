import React from "react";
import { UserOutlined, LockOutlined, LockFilled, MailFilled } from '@ant-design/icons'
import { Form, Input, Button, Checkbox } from "antd";
import register from "../../images/ressources/3721106.jpg";
export const Register = (props) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div class="bg-light p-5 h-100 " style={{ height: "100vh!important" }}>
            <div class="m-auto ">
                <div class="p-3">
                    <div class="text-center fw-bold h3 mb-3">S'enregistrer sur educmod</div>
                    <div className="d-flex justify-content-around mt-5" >
                        <div>
                            <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 28 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    name="username"
                                >
                                    <Input placeholder="nom d'utilisateur" prefix={<UserOutlined />}/>
                                </Form.Item>
                                <Form.Item
                                    name="mail"
                                >
                                    <Input placeholder="email fonctionel" prefix={<MailFilled />}/>
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                >
                                    <Input.Password placeholder="mot de passe" prefix={<LockFilled />}/>
                                </Form.Item>
                                <Form.Item
                                    name="repassword"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('Le mot de passe entrer ne corespond pas'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password prefix={<LockOutlined />} placeholder="repeter le mot de passe" />
                                </Form.Item>
                                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 16 }}>
                                    <Checkbox>Se souvenit de moi</Checkbox>
                                </Form.Item>
                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button type="primary" htmlType="submit">
                                        S'enregistrer
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <div class="col-6">
                           <img src={register} class="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}