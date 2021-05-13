/*
 * @Author: atdow
 * @Date: 2021-05-13 16:32:00
 * @LastEditors: null
 * @LastEditTime: 2021-05-13 18:16:14
 * @Description: file content
 */
import React from 'react';
import { Switch, RouteComponentProps } from 'react-router-dom';

import { RootDispatch, RootState } from '@src/store';
import { connect } from '@store/connect';

import Logo from './Logo';
import styles from './menu.module.less';

import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

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
    collapsed: boolean;
    formatMenu: Array<any>;
};
@connect(mapStateToProps, mapDispatchToProps)
export default class SMenu extends React.Component<SecurityLayoutProps, State> {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            formatMenu: [],
        };
        // localStorage.setItem('token', 'login');
    }

    UNSAFE_componentWillMount() {}

    componentWillReceiveProps(nextProps) {
        const { menu = [] } = nextProps;
        console.log('menu:', menu);
        let formatMenu = [];
        menu.forEach(menuItem => {
            let chidrenMenu = [];
            if (menuItem.parentId === 0) {
                console.log('父级');
                chidrenMenu = menu.filter(item => {
                    return item.parentId == menuItem.id;
                });
                console.log('chidrenMenu：', chidrenMenu);
                formatMenu.push({
                    ...menuItem,
                    chidren: chidrenMenu,
                });
            }
        });
        console.log('formatMenu:', formatMenu);
        // let formatMenu = this.renderMenu(menu);
        // this.setState({ formatMenu });
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    renderMenu(menu = []) {
        let formatMenu = [];
        menu.forEach(menuItem => {
            if (menuItem.parentId === 0) {
                formatMenu.push(
                    <Menu.Item key={menuItem.id} icon={<PieChartOutlined />}>
                        {menuItem.name}
                    </Menu.Item>,
                );
            }
        });
        return formatMenu;
    }
    resourceManagementChildren(parentId) {
        return this.props.menu.filter(menuItem => {
            menuItem.id == parentId;
        });
    }

    render() {
        return (
            <div>
                <div className={styles.header}>
                    <Logo />
                    <h1 className={styles.title}>react-admin</h1>
                </div>
                <div style={{ width: 256 }}>
                    <Button
                        type="primary"
                        onClick={this.toggleCollapsed}
                        style={{ marginBottom: 16 }}
                    >
                        {React.createElement(
                            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        )}
                    </Button>
                    <Menu
                        defaultSelectedKeys={['foundationplatform']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        {/* {this.state.formatMenu.map(curr => {
                            if (curr.parentId !== 0) {
                                return (
                                    <SubMenu
                                        key={curr.path}
                                        title={
                                            <span>
                                                <span>{curr.name}</span>
                                            </span>
                                        }
                                    >
                                        {this.resourceManagementChildren(curr.id).map(item => {
                                            if (
                                                curr.list === 'ResourceAdministration' &&
                                                item.isresourceManagementChildren
                                            ) {
                                                return (
                                                    <Menu.Item key={item.path}>
                                                        {item.title}
                                                    </Menu.Item>
                                                );
                                            }
                                            return null;
                                        })}
                                    </SubMenu>
                                );
                            }
                            return (
                                <Menu.Item key={curr.path}>
                                    <span>{curr.name}</span>
                                </Menu.Item>
                            );
                        })} */}
                    </Menu>
                    {/* <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Option 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Option 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<ContainerOutlined />}>
                            Option 3
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </Menu> */}
                </div>
            </div>
        );
    }
}
