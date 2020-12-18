import {Form, Input, Button, Checkbox, notification} from 'antd';
import {FrownOutlined, SmileOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import {useHistory} from 'react-router-dom'
import Axios from "axios";
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

export default function Signup() {
    const history = useHistory();
    const [fieldErrors, setFieldErrors] = useState({});
    const onFinish = values => {
        async function fn(){
            const {username, password} = values
            const data = {username, password}
            try {
                const response = await Axios.post('http://localhost:8000/account/signup/', data)
                notification.open({
                    message: "회원가입 성공",
                    description: "로그인 페이지로 이동합니다.",
                    icon: <SmileOutlined style={{ color: "#108ee9" }} />
                });
                history.push("/account/login")
            }
            catch (error){
                if(error.response) {
                    notification.open({
                        message: "회원가입 실패",
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
            }
        }
        fn();
    };

    const onFinishFailed = (errorInfo) => {
        console.log('onFinishFailed', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
                    회원가입
                </Button>
            </Form.Item>
        </Form>
    );
};
