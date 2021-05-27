/*
 * @Author: atdow
 * @Date: 2021-05-26 14:56:35
 * @LastEditors: null
 * @LastEditTime: 2021-05-27 16:58:11
 * @Description: file content
 */

import React from 'react';
import { Switch, RouteComponentProps } from 'react-router-dom';

import { RootDispatch, RootState } from '@src/store';
import { connect } from '@store/connect';

import { Form, Row, Col, Input, Button, Tag, Space } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

import STable from '@src/components/STable';

import { getSearchList } from '@src/services/api/searchList';

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
type SearchListProps = RouterProps &
    MapStateFromStoreProps &
    ComponentDispatchProps & {
        routes?: any;
    };

type State = {
    expand: boolean;
    // setExpand: any;
    form?: any;
    columns?: any;
    tableDataSource?: Function;
};
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: any) => ({
        disabled: false, // Column configuration not to be checked
        name: record.name,
    }),
};
@connect(mapStateToProps, mapDispatchToProps)
export default class SearchList extends React.Component<SearchListProps, State> {
    formRef: React.RefObject<any>;
    tableRef: React.RefObject<any>;
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.tableRef = React.createRef();
        this.state = {
            expand: false,
            columns: [
                {
                    title: '规则名称',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '描述',
                    dataIndex: 'description',
                    key: 'description',
                },
                {
                    title: '服务调用次数',
                    dataIndex: 'useCount',
                    key: 'useCount',
                },
                {
                    title: '状态',
                    key: 'status',
                    render: (text, record) => <div>status</div>,
                },
                // {
                //     title: 'Tags',
                //     key: 'tags',
                //     dataIndex: 'tags',
                //     render: tags => (
                //         <>
                //             {tags.map(tag => {
                //                 let color = tag.length > 5 ? 'geekblue' : 'green';
                //                 if (tag === 'loser') {
                //                     color = 'volcano';
                //                 }
                //                 return (
                //                     <Tag color={color} key={tag}>
                //                         {tag.toUpperCase()}
                //                     </Tag>
                //                 );
                //             })}
                //         </>
                //     ),
                // },
                // {
                //     title: 'Action',
                //     key: 'action',
                //     render: (text, record) => (
                //         <Space size="middle">
                //             <a>Invite {record.name}</a>
                //             <a>Delete</a>
                //         </Space>
                //     ),
                // },
            ],
            tableDataSource: parameter => {
                return getSearchList(Object.assign(parameter, { test: 'test' })).then(res => {
                    let data = res.data || {};
                    return data.data;
                });
            },
        };
    }
    componentDidMount() {
        //  console.log('this.formRef:', this.formRef);
    }

    setExpand(value: boolean) {
        this.setState({ expand: value });
    }

    getFields() {
        const count = this.state.expand ? 5 : 3;
        const children = [];
        children.push(
            <Col span={8} key={1}>
                <Form.Item
                    name="name"
                    label="规则名称"
                    rules={[
                        {
                            required: false,
                            message: 'Input something!',
                        },
                    ]}
                >
                    <Input placeholder="placeholder" />
                </Form.Item>
            </Col>,
        );
        children.push(
            <Col span={8} key={2}>
                <Form.Item
                    name="description"
                    label="描述"
                    rules={[
                        {
                            required: false,
                            message: 'Input something!',
                        },
                    ]}
                >
                    <Input placeholder="placeholder" />
                </Form.Item>
            </Col>,
        );
        children.push(
            <Col span={8} key={3}>
                <Form.Item
                    name="count"
                    label="服务调用次数"
                    rules={[
                        {
                            required: false,
                            message: 'Input something!',
                        },
                    ]}
                >
                    <Input placeholder="placeholder" />
                </Form.Item>
            </Col>,
        );
        children.push(
            <Col span={8} key={4}>
                <Form.Item
                    name="status"
                    label="状态"
                    rules={[
                        {
                            required: false,
                            message: 'Input something!',
                        },
                    ]}
                >
                    <Input placeholder="placeholder" />
                </Form.Item>
            </Col>,
        );
        children.push(
            <Col span={8} key={5}>
                <Form.Item
                    name="lastTime"
                    label="上次调度时间"
                    rules={[
                        {
                            required: false,
                            message: 'Input something!',
                        },
                    ]}
                >
                    <Input placeholder="placeholder" />
                </Form.Item>
            </Col>,
        );
        return children.slice(0, count);
    }

    onFinish(values: any) {
        // console.log('values: ', values);
        this.tableRef.current.request(true);
    }

    render() {
        return (
            <div className="backround-white padding-20">
                <Form
                    ref={this.formRef}
                    name="advanced_search"
                    {...layout}
                    className="ant-advanced-search-form"
                    onFinish={this.onFinish.bind(this)}
                >
                    <Row gutter={24}>{this.getFields()}</Row>
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">
                                搜索
                            </Button>
                            <Button
                                style={{ margin: '0 8px' }}
                                onClick={() => {
                                    this.formRef.current.resetFields();
                                }}
                            >
                                清除
                            </Button>
                            <a
                                style={{ fontSize: 12 }}
                                onClick={() => {
                                    this.setExpand(!this.state.expand);
                                }}
                            >
                                {this.state.expand ? <UpOutlined /> : <DownOutlined />}
                                {this.state.expand ? '折叠' : '展开'}
                            </a>
                        </Col>
                    </Row>
                </Form>
                <STable
                    ref={this.tableRef}
                    columns={this.state.columns}
                    dataSource={this.state.tableDataSource}
                    className="margin-top-20"
                    rowSelection={rowSelection}
                />
            </div>
        );
    }
}
