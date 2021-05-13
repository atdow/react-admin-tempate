/*
 * @Author: atdow
 * @Date: 2021-05-13 15:18:29
 * @LastEditors: null
 * @LastEditTime: 2021-05-13 15:43:24
 * @Description: file content
 */
import React from 'react';
import { Switch, RouteComponentProps } from 'react-router-dom';

import { RootDispatch, RootState } from '@src/store';
import { connect } from '@store/connect';

function mapStateToProps(state: RootState) {
    const {
        user: { count, menu },
    } = state;
    return { count, menu };
}

function mapDispatchToProps(dispatch: RootDispatch) {
    const { user } = dispatch;
    return {
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
type SecurityLayoutProps = RouterProps &
    MapStateFromStoreProps &
    ComponentDispatchProps & {
        routes?: any;
    };

type State = {
    hasPermission: boolean;
};
@connect(mapStateToProps, mapDispatchToProps)
export default class GlobalHeader extends React.Component<SecurityLayoutProps, State> {
    constructor(props) {
        super(props);
        this.state = {
            hasPermission: false,
        };
        // localStorage.setItem('token', 'login');
    }

    UNSAFE_componentWillMount() {}

    render() {
        return <div>GlobalHeader</div>;
    }
}
