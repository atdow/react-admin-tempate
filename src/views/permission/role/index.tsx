/*
 * @Author: atdow
 * @Date: 2021-06-02 16:50:33
 * @LastEditors: null
 * @LastEditTime: 2021-06-03 18:16:09
 * @Description: file description
 */

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { RootDispatch, RootState } from '@src/store';
import { connect } from '@store/connect';

import { Form, Row, Col, Input, Button, Switch, Popconfirm, message } from 'antd';
import { EditOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';

import STable from '@src/components/STable';
import RoleModifyModal from './modules/roleModifyModal'; // 问题

import { queryRoleList, changeRoleStatus } from '@src/services/api/permission';

function mapStateToProps(state: RootState) {
    // const {
    //     tagsview: { tagsviewData },
    // } = state;
    return {
        // tagsviewData
    };
}

function mapDispatchToProps(dispatch: RootDispatch) {
    // const { tagsview } = dispatch;
    return {
        // setTagsviewData: tagsview.setTagsviewData,
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
    statusConfimText: string;
    columns: ColumnsType<any>;
    formValue: Object;
    tableDataSource: Function;
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
    RoleModifyModalRef: React.RefObject<any>;
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.tableRef = React.createRef();
        this.RoleModifyModalRef = React.createRef();
        this.state = {
            expand: false,
            statusConfimText: '确认要"停用""超级管理员"角色吗?',
            columns: [
                {
                    title: '角色编号',
                    dataIndex: 'roleIndex',
                    key: 'roleIndex',
                },
                {
                    title: '角色名称',
                    dataIndex: 'roleName',
                    key: 'roleName',
                },
                {
                    title: '权限字符',
                    dataIndex: 'permissonCharacter',
                    key: 'permissonCharacter',
                },
                {
                    title: '显示顺序',
                    dataIndex: 'displaySequence',
                    key: 'displaySequence',
                },
                {
                    title: '状态',
                    dataIndex: 'status',
                    key: 'status',
                    render: (text, record) => (
                        <Popconfirm
                            placement="top"
                            title={(record => {
                                // '确认要"停用""超级管理员"角色吗?'
                                let text = '确认要';
                                text += record.status === true ? '"停用"' : '"启用"';
                                text += `"${record.roleName}"`;
                                text += '角色吗?';
                                return text;
                            })(record)}
                            onConfirm={e => {
                                this.confirm(e, record);
                            }}
                            okText="确定"
                            cancelText="取消"
                        >
                            <Switch
                                checked={text}
                                onChange={value => {
                                    this.onStatusChange(value, record);
                                }}
                            />
                        </Popconfirm>
                    ),
                },
                {
                    title: '创建时间',
                    dataIndex: 'createTime',
                    key: 'createTime',
                },
                {
                    title: '操作',
                    dataIndex: 'opetation',
                    key: 'opetation',
                    render: (text, record) => (
                        <div>
                            <a href="#!" onClick={e => this.handleMoify(e, record)}>
                                <EditOutlined />
                                修改
                            </a>
                        </div>
                    ),
                },
            ],
            formValue: {},
            tableDataSource: parameter => {
                return queryRoleList(Object.assign(parameter, this.state.formValue)).then(res => {
                    let data = res.data || {};
                    return data.data;
                });
            },
        };
    }
    componentDidMount() {
        // this.RoleModifyModalRef.current.show(2);
    }

    onFinish(values: any) {
        this.setState({ formValue: values }); // 这个是没有必要的更新，只是为了维护数据，可以提升到外部变量
        this.tableRef.current.request(true); // 请求到第一页;
        // this.tableRef.current.request(); // 请求当前页，相当于刷新
    }
    onFinishFailed({ values, errorFields, outOfDate }) {}
    onStatusChange(checked, record) {
        //   console.log('onStatusChange:');
    }
    confirm(e, record) {
        changeRoleStatus({ id: record.id })
            .then(res => {
                const { data } = res;
                if (data.code === 200) {
                    message.success('修改成功');
                    this.tableRef.current.request();
                }
            })
            .catch(err => {
                message.error('修改失败');
            })
            .finally(() => {});
    }
    handleMoify(e, record) {
        e.preventDefault();
        this.RoleModifyModalRef.current.show(record.id);
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
                    onFinishFailed={this.onFinishFailed}
                >
                    <Row gutter={24}>
                        <Col span={5}>
                            <Form.Item
                                name="roleName"
                                label="角色名称"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Input something!',
                                    },
                                ]}
                            >
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={5}>
                            <Form.Item
                                name="permissonCharacter"
                                label="权限字符"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Input something!',
                                    },
                                ]}
                            >
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={5}>
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
                        </Col>
                        <Col span={5}>
                            <Form.Item
                                name="createdTime"
                                label="创建时间"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Input something!',
                                    },
                                ]}
                            >
                                <Input placeholder="placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={4} style={{ textAlign: 'right' }}>
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
                <RoleModifyModal ref={this.RoleModifyModalRef} />
            </div>
        );
    }
}
