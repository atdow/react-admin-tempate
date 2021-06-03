/*
 * @Author: atdow
 * @Date: 2021-06-03 11:36:31
 * @LastEditors: null
 * @LastEditTime: 2021-06-03 18:09:07
 * @Description: file description
 */

import React, { useEffect, useState, forwardRef, useImperativeHandle, useRef } from 'react';

import { Drawer, Form, Input, Radio, Tree, Button, Spin } from 'antd';
// import { InternalFormType } from 'antd/es/form';
const { TextArea } = Input;

import { getMenuTree, getRolePerssionInfo } from '@src/services/api/permission';
import { menuDataToTreeData } from '@utils/perssion';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 24 },
};
const tailLayout = {
    wrapperCol: { offset: 0, span: 24 },
};

const treeData2 = [
    {
        title: '0-0',
        key: '0-0',
        children: [
            {
                title: '0-0-0',
                key: '0-0-0',
                children: [
                    { title: '0-0-0-0', key: '0-0-0-0' },
                    { title: '0-0-0-1', key: '0-0-0-1' },
                    { title: '0-0-0-2', key: '0-0-0-2' },
                ],
            },
            {
                title: '0-0-1',
                key: '0-0-1',
                children: [
                    { title: '0-0-1-0', key: '0-0-1-0' },
                    { title: '0-0-1-1', key: '0-0-1-1' },
                    { title: '0-0-1-2', key: '0-0-1-2' },
                ],
            },
            {
                title: '0-0-2',
                key: '0-0-2',
            },
        ],
    },
];

type Props = {
    [key: string]: any;
};
type roleModifyModalType = {
    formRef?: React.RefObject<any>;
};

const RoleModifyModal: React.FC<Props> = forwardRef(
    ({ ...arg }, ref): JSX.Element => {
        const [visible, setVisible] = useState<boolean>(false);
        const [loading, setLoading] = useState<boolean>(false);
        const formRef = useRef(null);
        const [treeData, setTreeData] = useState([]);
        const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
        const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
        const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
        const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

        useImperativeHandle(ref, () => ({
            show: id => {
                show(true);
                setLoading(true);
                // 获取所有菜单树
                getMenuTree()
                    .then(res => {
                        const data = res.data || {};
                        if (data.code !== 200) {
                            show(false);
                            return;
                        }
                        const originData = data.data || {};
                        let treeData = menuDataToTreeData(originData || []);
                        generateTreeData(treeData);
                        setTreeData(treeData);
                        // 获取用户权限
                        getRolePerssionInfo({ id: id })
                            .then(res => {
                                const { data = {} } = res;
                                if (data.code !== 200) {
                                    show(false);
                                    return;
                                }
                                let originData = data.data || {};
                                const checkedKeys = generateCheckedKeys(originData.menu || []);
                                setCheckedKeys(checkedKeys);
                                const expandedKeys = generateExpandedKeys(originData.menu || []); // 暂时不做计算
                                setExpandedKeys(checkedKeys); // TODO
                                formRef.current.setFieldsValue({
                                    roleName: originData.roleName,
                                    permissonCharacter: originData.permissonCharacter,
                                    status: originData.status,
                                    menuPerssion: checkedKeys,
                                    comment: originData.comment,
                                });
                            })
                            .catch(err => {
                                show(false);
                            })
                            .finally(() => {
                                setLoading(false);
                            });
                    })
                    .catch(err => {
                        setLoading(false);
                        show(false);
                    })
                    .finally(() => []);
            },
        }));

        useEffect(() => {}, []);

        function generateTreeData(tree: Array<any>) {
            tree.forEach(treeItem => {
                treeItem.title = treeItem?.meta.title;
                treeItem.key = treeItem.id;
                if (treeItem.children && treeItem.children.length > 0) {
                    generateTreeData(treeItem.children);
                }
            });
        }
        function generateCheckedKeys(menu: Array<any>) {
            let treeData = menuDataToTreeData(menu || []);
            let checkedKeys = [];
            treeRecursion(treeData);
            function treeRecursion(data) {
                data.forEach(dataItem => {
                    // 如果有children，那么当前就是属于父级，不能将父级扔进去，不然子级会全部被勾选上
                    if (!!!dataItem.children || dataItem.children.length == 0) {
                        checkedKeys.push(dataItem.id);
                    } else {
                        treeRecursion(dataItem.children);
                    }
                });
            }
            // console.log('checkedKeys:', checkedKeys);
            return checkedKeys;
        }
        // TODO 暂时不做计算
        function generateExpandedKeys(menu: Array<any>) {
            return [];
        }

        function show(status) {
            setVisible(status);
        }
        function onClose() {
            setVisible(false);
        }
        function onFinish() {}
        function onFinishFailed() {}

        const onExpand = (expandedKeysValue: React.Key[]) => {
            console.log('onExpand', expandedKeysValue);
            // if not set autoExpandParent to false, if children expanded, parent can not collapse.
            // or, you can remove all expanded children keys.
            setExpandedKeys(expandedKeysValue);
            setAutoExpandParent(false);
        };

        const onCheck = (checkedKeysValue: React.Key[]) => {
            console.log('onCheck', checkedKeysValue);
            setCheckedKeys(checkedKeysValue);
        };

        const onSelect = (selectedKeysValue: React.Key[], info: any) => {
            console.log('onSelect', info);
            setSelectedKeys(selectedKeysValue);
        };

        return (
            <div>
                <Drawer
                    title="修改角色"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    key="right"
                    width={500}
                >
                    <Spin spinning={loading}>
                        <Form
                            ref={formRef}
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="角色名"
                                name="roleName"
                                rules={[{ required: true, message: '请输入角色名!' }]}
                            >
                                <Input placeholder="请输入角色名!" />
                            </Form.Item>
                            <Form.Item
                                label="权限字符"
                                name="permissonCharacter"
                                rules={[{ required: true, message: '请输入权限字符!' }]}
                            >
                                <Input placeholder="请输入权限字符!" />
                            </Form.Item>
                            <Form.Item
                                label="状态"
                                name="status"
                                rules={[{ required: true, message: '选择状态!' }]}
                            >
                                <Radio.Group value={true}>
                                    <Radio value={true}>正常</Radio>
                                    <Radio value={false}>停用</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item
                                label="菜单权限"
                                name="menuPerssion"
                                rules={[{ required: true, message: '选择菜单权限!' }]}
                            >
                                <Tree
                                    checkable
                                    onExpand={onExpand}
                                    expandedKeys={expandedKeys}
                                    autoExpandParent={autoExpandParent}
                                    checkStrictly={false}
                                    onCheck={onCheck}
                                    checkedKeys={checkedKeys}
                                    onSelect={onSelect}
                                    selectedKeys={selectedKeys}
                                    treeData={treeData}
                                />
                            </Form.Item>
                            <Form.Item
                                label="备注"
                                name="comment"
                                rules={[{ required: false, message: '请输入备注!' }]}
                            >
                                <TextArea rows={4} placeholder="请输入备注!" />
                            </Form.Item>
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit" loading={false}>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </Spin>
                </Drawer>
            </div>
        );
    },
);

export default RoleModifyModal;
