/*
 * @Author: atdow
 * @Date: 2021-05-12 18:09:18
 * @LastEditors: null
 * @LastEditTime: 2021-05-13 15:43:45
 * @Description: file content
 */
import styles from './userlayout.module.less';
import React from 'react';
import { renderAllRoutes } from '@routes/route-loader';
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
        count?: number;
    };

type State = {
    hasPermission: boolean;
};
@connect(mapStateToProps, mapDispatchToProps)
export default class SecurityLayout extends React.Component<SecurityLayoutProps, State> {
    constructor(props) {
        super(props);
        this.state = {
            hasPermission: false,
        };
        // localStorage.setItem('token', 'login');
    }

    UNSAFE_componentWillMount() {
        // console.log('UNSAFE_componentWillMount...');
        const menu = this.props.menu;
        const pathname = this.props.location.pathname;
        if (menu.length == 0) {
            console.log('请求了权限...');
            this.props.getPerssionList().then(res => {
                const { menu = [], permission = [] } = res as any;
                this.judgeHasPermission(menu, pathname);
            });
        } else {
            console.log('缓存的权限...');
            this.judgeHasPermission(menu, pathname);
        }
    }
    // 判断是否有权限
    judgeHasPermission(menu, pathname) {
        let hasPermission = false;
        for (let i = 0; i < menu.length; i++) {
            if (menu[i].path === pathname) {
                hasPermission = true;
                break;
            }
        }
        if (hasPermission) {
            this.setState({ hasPermission: true });
        } else {
            // TODO 需要做更细的颗粒度，控制跳转404|403|login
            this.props.history.push('/user/login');
        }
    }

    render() {
        const routes = renderAllRoutes(this.props.routes);
        return <div>{this.state.hasPermission && <Switch>{routes}</Switch>}</div>;
    }
}
