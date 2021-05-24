/*
 * @Author: atdow
 * @Date: 2021-05-24 16:11:31
 * @LastEditors: null
 * @LastEditTime: 2021-05-24 18:18:54
 * @Description: file content
 */
import React from 'react';
import { Switch, RouteComponentProps } from 'react-router-dom';

import { RootDispatch, RootState } from '@src/store';
import { connect } from '@store/connect';

import styles from './tagsview.module.less';

function mapStateToProps(state: RootState) {
    const {
        user: { menu },
        tagsview: { tagsviewData },
    } = state;
    return { menu, tagsviewData };
}

function mapDispatchToProps(dispatch: RootDispatch) {
    const { tagsview } = dispatch;
    return {
        setTagsviewData: tagsview.setTagsviewData,
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
    tagsViewData: Array<any>;
};
let unlisten;
@connect(mapStateToProps, mapDispatchToProps)
export default class SMenu extends React.Component<SecurityLayoutProps, State> {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            tagsViewData: [],
        };
    }
    // 两种兼容方式1
    UNSAFE_componentWillMount() {
        const { menu, history } = this.props;
        const pathname = this.props.history.location.pathname;
        let tagsviewData = this.props.tagsviewData;
        let tagsviewDataFormat = this.calTagsviewData(pathname, menu, tagsviewData);
        this.setState({
            tagsViewData: tagsviewDataFormat,
        });
        // console.log('tagsviewDataFormat:', tagsviewDataFormat);
    }
    componentDidMount() {
        // const { menu, history } = this.props;
        // unlisten = history.listen((location, action) => {
        //     const pathname = location.pathname;
        //     let tagsviewData = this.props.tagsviewData;
        //     let tagsviewDataFormat = this.calTagsviewData(pathname, menu, tagsviewData);
        //     this.setState({
        //         tagsViewData: tagsviewDataFormat,
        //     });
        //     // console.log('tagsviewDataFormat:', tagsviewDataFormat);
        // });
    }
    componentWillUnmount() {
        // unlisten(); //要停止侦听，请调用从listen（）返回的函数
    }
    calTagsviewData(pathname, menu, tagsviewData) {
        let hasTag = false;
        // let newTab ={}
        let tagsviewDataFormat = tagsviewData;
        tagsviewData.forEach(tagsviewDataItem => {
            if (tagsviewDataItem.path == pathname) {
                hasTag = true;
            }
        });
        if (hasTag === false) {
            menu.forEach(menuItem => {
                if (menuItem.path == pathname) {
                    tagsviewDataFormat.push(menuItem);
                }
            });
        }
        return tagsviewDataFormat;
    }
    // 两种兼容方式2
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps:');
    }
    initTagsView(menu = [], history) {
        // console.log('menu:', menu);
        // console.log('history:', history);
        const pathname = history?.location?.pathname as any;
        let tagsViewData = [];
        menu.forEach(menuItem => {
            if (pathname == menuItem.path) {
                tagsViewData.push(menuItem);
            }
        });
        this.setState({ tagsViewData: tagsViewData });
    }
    render() {
        return (
            <div className={styles.tagsview}>
                <ul className={styles.tagsviewContent}>
                    {this.state.tagsViewData.map((item, key) => {
                        return (
                            <li
                                className={
                                    this.props.history.location.pathname === item.path
                                        ? styles.tagsviewActive
                                        : ''
                                }
                            >
                                {item.meta.title}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
