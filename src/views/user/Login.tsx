/*
 * @Author: atdow
 * @Date: 2021-05-12 10:47:33
 * @LastEditors: null
 * @LastEditTime: 2021-05-12 17:22:45
 * @Description: file content
 */
import React from 'react';
import styles from './login.module.less';
import GlobalContext from '@src/common/global-context';
import { RouteComponentProps } from 'react-router';

import { RootDispatch, RootState } from '@src/store';
import { connect } from '@store/connect';

import { Form, Input, Button } from 'antd';

import { login } from '@src/services/api/user/index';

function mapStateToProps(state: RootState) {
    const {
        user: { count },
    } = state;
    return { count };
}

function mapDispatchToProps(dispatch: RootDispatch) {
    const { user } = dispatch;
    return {
        increment: user.INCREMENT,
        decrement: user.decrement,
        getPerssionList: user.getPerssionList,
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
    formRef: React.RefObject<any>;
    constructor(props, context) {
        super(props, context);
        this.formRef = React.createRef();
        this.state = {
            loading: false,
        };
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

    componentDidMount() {
        // console.log('this.formRef:', this.formRef);
        (this.formRef['current'] as any).setFieldsValue({
            username: 'admin',
            password: '123456',
        });
    }

    onFinish = (values: any) => {
        this.props.increment();
        this.props.getPerssionList().then(res => {
            console.log('res:', res);
        });
        console.log('this.props:', this.props);
        this.setState({ loading: true });
        login(values)
            .then(res => {
                console.log('res:', res.data);
            })
            .catch(err => {})
            .finally(() => {
                this.setState({ loading: false });
            });
    };

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        const { count } = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <Form
                        ref={this.formRef}
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
                            <Button type="primary" htmlType="submit" loading={this.state.loading}>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                    <span>{this.props.count}</span>
                </div>
            </div>
        );
    }
}
