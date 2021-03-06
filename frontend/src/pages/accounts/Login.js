import React, {useState} from "react"
import {Button, Form, Input, notification} from "antd";
import {useHistory} from "react-router-dom"
import Axios from "axios";
import {FrownOutlined, SmileOutlined} from "@ant-design/icons";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};


export default function Login() {

    const history = useHistory();
    const [fieldErrors, setFieldErrors] = useState({});

    const onFinish = values => {
        async function fn(){
            const {username, password} = values
            const data = {username, password}
            try {
                const response = await Axios.post('http://localhost:8000/account/login/', data)
                notification.open({
                    message: "로그인 성공",
                    description: "순간이동!!!!",
                    icon: <SmileOutlined style={{ color: "#108ee9" }} />
                });
                history.push("/")
            }
            catch (error) {
                if(error.response) {
                    notification.open({
                        message: "로그인 실패",
                        description: "아이디/암호를 확인해주세요.",
                        icon: <FrownOutlined style={{ color: "#ff3333" }} />
                    });

                    const {data: fieldsErrorMessages} = error.response
                    setFieldErrors(
                        Object.entries(fieldsErrorMessages).reduce(
                            (acc,[fieldName, errors]) => {
                                acc[fieldName] = {
                                    validateStatus: 'error',
                                    help: errors.join(" ")
                                }
                                return acc;
                            }, {}) //이부분 뭔소린지 모름;
                    )
                }
            } //error handling
        }
        fn();
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    {
                        min: 5,
                        message: '5글자 이상 입력해주세요.'
                    }
                ]}
                hasFeedback
                {...fieldErrors.username}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                {...fieldErrors.password}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    로그인
                </Button>
            </Form.Item>
        </Form>
    );
}