/*
 * @Author: atdow
 * @Date: 2021-05-12 10:47:33
 * @LastEditors: null
 * @LastEditTime: 2021-05-12 14:06:36
 * @Description: file content
 */
import React from 'react';
import styles from './login.module.less';
import GlobalContext from '@src/common/global-context';
import { RouteComponentProps } from 'react-router';

import { RootDispatch, RootState } from '@src/store';
import { connect } from '@store/connect';

import { Form, Input, Button, Checkbox } from 'antd';

function mapStateToProps(state: RootState) {
    const {
        login: { count },
    } = state;
    return { count };
}

function mapDispatchToProps(dispatch: RootDispatch) {
    const { login } = dispatch;
    return {
        increment: login.INCREMENT,
        decrement: login.decrement,
    };
}

/**
 * 路由参数 Props 类型声明
 */
type RouterProps = RouteComponentProps<any>;

/**
 * 映射状态（从 store 中获取某些状态并传递给当前组件）类型声明
 */
type MapStateFromStoreProps = ReturnType<typeof mapStateToProps>;
/**
 * 组件派发 action 集合的类型声明
 */
type ComponentDispatchProps = ReturnType<typeof mapDispatchToProps>;

/**
 * 组件最终接收的所有 Props 类型声明
 */
type LoginProps = RouterProps &
    MapStateFromStoreProps &
    ComponentDispatchProps & {
        routes?: any;
        count?: number;
    };

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
};
const tailLayout = {
    wrapperCol: { offset: 0, span: 24 },
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Login extends React.Component<LoginProps> {
    static contextType = GlobalContext;
    constructor(props, context) {
        super(props, context);
    }

    handleLinkBtnClick = () => {
        this.props.history.push('/home');
    };

    handleAddBtnClick = () => {
        this.props.increment();
    };

    handleDecreaseBtnClick = () => {
        this.props.decrement();
    };

    onFinish = (values: any) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo: any) => {
        // console.log('Failed:', errorInfo);
    };

    render() {
        const { count } = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input placeholder="admin or visitor" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input.Password placeholder="123456" />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}
