/*
 * @Author: atdow
 * @Date: 2021-05-13 16:32:00
 * @LastEditors: null
 * @LastEditTime: 2021-05-24 16:14:27
 * @Description: file content
 */
import React from 'react';
import { Switch, RouteComponentProps } from 'react-router-dom';

import { RootDispatch, RootState } from '@src/store';
import { connect } from '@store/connect';

import Logo from './Logo';
import styles from './menu.module.less';

import { Menu } from 'antd';
// fold
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
// menu-icon
import * as Icon from '@ant-design/icons';

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
    defaultSelectedKeys: Array<string>;
    defaultOpenKeys: Array<string>;
};

@connect(mapStateToProps, mapDispatchToProps)
export default class SMenu extends React.Component<SecurityLayoutProps, State> {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            formatMenu: [],
            defaultSelectedKeys: [],
            defaultOpenKeys: [],
        };
        // localStorage.setItem('token', 'login');
    }
    // 两种兼容方式1
    UNSAFE_componentWillMount() {
        this.init(this.props);
    }
    // 两种兼容方式2
    componentWillReceiveProps(nextProps) {
        this.init(nextProps);
    }
    init(props) {
        // console.log('props:', props);
        const { menu = [] } = props;
        let formatMenu = this.menuDataFormat(menu);
        const pathname = this.props.history?.location?.pathname;
        let defaultOpenKeys = this.calDefaultOpenKeys(menu, pathname);
        //let defaultOpenKeys = this.calDefaultOpenKeys(menu, '/dashboard/analysisChildren2');
        this.setState({
            formatMenu,
            defaultSelectedKeys: [pathname],
            defaultOpenKeys: defaultOpenKeys,
        });
    }
    // 菜单数据格式化
    menuDataFormat(menu = []) {
        let arr = JSON.parse(JSON.stringify(menu));
        if (menu.length === 0) {
            return [];
        }
        arr.forEach(arrItem1 => {
            arr.forEach(arrItem2 => {
                if (arrItem1.parentId === arrItem2.id) {
                    if (!!arrItem2.children) {
                        arrItem2.children.push(arrItem1);
                    } else {
                        arrItem2.children = [arrItem1];
                    }
                }
            });
        });
        let formatData = arr.filter(item => {
            return item.parentId === 0;
        });
        // console.log('formatData:', formatData);
        // console.log('menu:', menu);
        return formatData;
    }
    // 渲染icon
    renderIcon(icon) {
        if (icon) {
            return React.createElement(Icon[icon], {
                style: { fontSize: '16px', color: '#fff' },
            });
        } else {
            return '';
        }
    }
    // 渲染菜单树
    renderTree = data => {
        return data.map(item => {
            if (!item.children) {
                if (item.meta?.show) {
                    return (
                        <Menu.Item
                            key={item.path}
                            icon={this.renderIcon(item?.meta?.icon)}
                            onClick={this.menuClick.bind(this, item)}
                        >
                            <span>{item.meta.title}</span>
                        </Menu.Item>
                    );
                }
            } else {
                if (item.meta?.show) {
                    return (
                        <SubMenu
                            key={item.path}
                            title={item?.meta?.title}
                            icon={this.renderIcon(item?.meta?.icon)}
                        >
                            {this.renderTree(item.children)}
                        </SubMenu>
                    );
                }
            }
        });
    };
    calDefaultOpenKeys(menu = [], pathname) {
        let defaultOpenKeys = [];
        let currentName = ''; // 当前选中菜单
        menu.forEach(menuItem => {
            if (menuItem.path === pathname) {
                currentName = menuItem;
            }
        });
        // 一层一层往上找，只要是父级就push
        findDefaultOpenKeys(currentName);
        function findDefaultOpenKeys(currentName) {
            menu.forEach(menuItem => {
                if (menuItem.id === currentName.parentId) {
                    defaultOpenKeys.push(menuItem.path);
                    if (menuItem.parentId !== 0) {
                        findDefaultOpenKeys(menuItem);
                    }
                }
            });
        }
        return defaultOpenKeys;
    }
    menuClick(item) {
        // console.log('item:', item);
        this.props.history.push(item.path);
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <div
                className={[
                    styles.sMenu,
                    this.state.collapsed ? styles.sMenuMin : styles.sMenuMax,
                ].join(' ')}
            >
                <div className={styles.header}>
                    <Logo />
                    <h1
                        className={[styles.title, this.state.collapsed ? styles.titleMin : ''].join(
                            ' ',
                        )}
                    >
                        react-admin
                    </h1>
                </div>
                <div>
                    {this.state.formatMenu.length && (
                        <Menu
                            defaultOpenKeys={this.state.defaultOpenKeys}
                            defaultSelectedKeys={this.state.defaultSelectedKeys}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={this.state.collapsed}
                        >
                            {this.renderTree(this.state.formatMenu)}
                        </Menu>
                    )}
                    <div className={styles.sFold} onClick={this.toggleCollapsed}>
                        {React.createElement(
                            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
