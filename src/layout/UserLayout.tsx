/*
 * @Author: atdow
 * @Date: 2021-05-12 10:41:48
 * @LastEditors: null
 * @LastEditTime: 2021-05-12 10:50:42
 * @Description: file content
 */
import styles from './userlayout.module.less';
import logo from '@assets/images/logo.svg';
import React from 'react';
import { renderAllRoutes } from '@routes/route-loader';
import { Switch, RouteComponentProps } from 'react-router-dom';

function mapStateToProps(state) {
    return state;
}
/**
 * 路由参数 Props 类型声明
 */
interface RouterProps extends RouteComponentProps<any> {}

/**
 * 映射状态（从 store 中获取某些状态并传递给当前组件）类型声明
 */
type MapStateFromStoreProps = ReturnType<typeof mapStateToProps>;
/**
 * 组件派发 action 集合的类型声明
 */
// type ComponentDispatchProps = ReturnType<typeof mapDispatchToProps>;
/**
 * 组件最终接收的所有 Props 类型声明
 */
type HomeProps = RouterProps &
    MapStateFromStoreProps & {
        routes?: any;
    };

export default class Home extends React.Component<HomeProps> {
    constructor(props) {
        super(props);
        localStorage.setItem('token', 'login');
    }

    render() {
        const routes = renderAllRoutes(this.props.routes);
        return (
            // <div className={styles.container}>
            //     99999
            //     <Switch>{routes}</Switch>
            // </div>
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.header}>
                        <img alt="logo" className={styles.logo} src={logo} />
                        <span className={styles.title}>Ant Design</span>
                    </div>
                </div>
                <Switch>{routes}</Switch>
            </div>
        );
    }
}
