import React from "react";
import { Form, Input, Button, Select } from 'antd';
const periodes = ["1 mois", "2 mois", "3 mois"]
const niveaux = ["6 eme", "5 eme", "4 eme", "3 eme", "2nd A", "1ere A", "Tle A", "2nd B", "1ere B", "Tle B", "2nd C", "1ere C", "Tle C", "2nd D", "1ere D", "Tle D"]

export const Abonnement = (props) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div class="bg-white p-3">
            <svg></svg>
            <div class="bg-light p-3">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 10 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Période"
                        name="periode"
                    >
                        <Select initialValues={periodes[0]} options={periodes.map(value => { return { label: value, value: value } })} />
                    </Form.Item>

                    <Form.Item
                        label="Nom complet"
                        name="nom"
                    >
                        <Input placeholder="Nom complet" />
                    </Form.Item>
                    
                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        label="Niveau d'etude"
                        name="niveau"
                    >
                        <Select initialValues={niveaux[0]} options={niveaux.map(value => { return { label: value, value: value } })} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 16, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            S'abonner
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}