/*
 * @Author: atdow
 * @Date: 2021-05-24 16:11:31
 * @LastEditors: null
 * @LastEditTime: 2021-05-28 15:52:16
 * @Description: file content
 */
import React from 'react';
import { Switch, RouteComponentProps } from 'react-router-dom';

import { RootDispatch, RootState } from '@src/store';
import { connect } from '@store/connect';

import styles from './tagsview.module.less';
import { CloseOutlined } from '@ant-design/icons';

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
export default class TagsView extends React.Component<SecurityLayoutProps, State> {
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
        // console.log('pathname:', pathname);
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
    tagsviewClick(item, index) {
        // console.log('tagsviewClick:', item, index);
        let currentPath = this.props.history.location.pathname;
        let tagsViewPath = item.path;
        currentPath !== tagsViewPath && this.props.history.push(item.path);
    }
    closeTag(e, item, index) {
        e.stopPropagation(); // 阻止冒泡
        // console.log('this.props.tagsviewData:', this.props.tagsviewData);
        // 更新tagsViewData数据
        let tagsviewData = this.props.tagsviewData;
        // 只有一个的时候，是首页，不能删除(这里可要可不要，因为第一个已经不渲染close了)
        if (tagsviewData.length === 1) {
            return;
        }
        tagsviewData.splice(index, 1);
        // console.log('tagsviewData:', tagsviewData);
        this.props.setTagsviewData(tagsviewData);
        this.setState({ tagsViewData: tagsviewData });
        // 路由控制
        let currentPath = this.props.history.location.pathname;
        let tagsViewPath = item.path;
        // 如果当前页面就是tagsview高亮的那个，就需要往前切换页面
        if (currentPath === tagsViewPath) {
            if (tagsviewData.length > 0) {
                this.props.history.push(tagsviewData[tagsviewData.length - 1].path);
            }
        }
    }
    render() {
        return (
            <div className={styles.tagsview}>
                <ul className={styles.tagsviewContent}>
                    {this.state.tagsViewData.map((item, index) => {
                        return (
                            <li
                                className={
                                    this.props.history.location.pathname === item.path
                                        ? styles.tagsviewActive
                                        : ''
                                }
                                onClick={this.tagsviewClick.bind(this, item, index)}
                                key={index}
                            >
                                <span className="margin-right-5">{item.meta.title}</span>
                                {index > 0 && (
                                    <CloseOutlined
                                        className={styles.close}
                                        onClick={e => this.closeTag(e, item, index)}
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
