/*
 * @Author: atdow
 * @Date: 2021-05-12 18:09:18
 * @LastEditors: null
 * @LastEditTime: 2021-05-12 18:43:39
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
        user: { count },
    } = state;
    return { count };
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

@connect(mapStateToProps, mapDispatchToProps)
export default class SecurityLayout extends React.Component<SecurityLayoutProps> {
    constructor(props) {
        super(props);
        // localStorage.setItem('token', 'login');
    }

    UNSAFE_componentWillMount() {
        console.log('UNSAFE_componentWillMount...');
        this.props.getPerssionList();
    }

    render() {
        const routes = renderAllRoutes(this.props.routes);
        return (
            <div className={styles.content}>
                <Switch>{routes}</Switch>
            </div>
        );
    }
}
