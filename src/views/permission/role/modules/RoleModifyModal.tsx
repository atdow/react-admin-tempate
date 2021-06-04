/*
 * @Author: atdow
 * @Date: 2021-06-03 11:36:31
 * @LastEditors: null
 * @LastEditTime: 2021-06-04 16:45:16
 * @Description: file description
 */

import React, { useEffect, useState, forwardRef, useImperativeHandle, useRef } from 'react';

import { Drawer, Form, Input, Radio, Tree, Button, Spin, Checkbox, Row, Col } from 'antd';
// import { InternalFormType } from 'antd/es/form';
const { TextArea } = Input;

import {
    getMenuTree,
    getRolePerssionInfo,
    changeRolePerssionInfo,
} from '@src/services/api/permission';
import { menuDataToTreeData } from '@utils/perssion';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 24 },
};

type Props = {
    onRoleInfoChange?: Function;
    [key: string]: any;
};
type roleModifyModalType = {
    formRef?: React.RefObject<any>;
};

let roleId;
let originAllMenuData = [];
const RoleModifyModal: React.FC<Props> = forwardRef(
    ({ onRoleInfoChange, ...arg }, ref): JSX.Element => {
        const [visible, setVisible] = useState<boolean>(false);
        const [loading, setLoading] = useState<boolean>(false);
        const formRef = useRef(null);
        const [treeData, setTreeData] = useState([]);
        const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
        const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
        const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
        const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
        const [treeAllFold, setTreeAllFold] = useState<boolean>(false);
        const [treeAllSelect, setTreeAllSelect] = useState<boolean>(false);

        useImperativeHandle(ref, () => ({
            show: id => {
                roleId = id;
                show(true);
                clearState();
                setLoading(true);
                // 获取所有菜单树
                getMenuTree()
                    .then(res => {
                        const data = res.data || {};
                        if (data.code !== 200) {
                            show(false);
                            return;
                        }
                        const originData = data.data || [];
                        originAllMenuData = [...originData];
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
                                    status: originData.status === 0 ? true : false,
                                    menuPerssion: checkedKeys,
                                    comment: originData.comment,
                                });
                            })
                            .catch(err => {
                                // console.log('err:', err);
                                show(false);
                            })
                            .finally(() => {
                                setLoading(false);
                            });
                    })
                    .catch(err => {
                        // console.log('err:', err);
                        setLoading(false);
                        show(false);
                    })
                    .finally(() => []);
            },
        }));

        useEffect(() => {}, []);
        // 清空所有状态
        function clearState() {
            setExpandedKeys([]);
            setCheckedKeys([]);
            setSelectedKeys([]);
            setTreeAllFold(false);
            setTreeAllSelect(false);
            formRef.current?.resetFields();
        }

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

        const show = (status: boolean): void => {
            setVisible(status);
        };
        const onClose = (): void => {
            setVisible(false);
        };
        const onSureChange = (isSaveClose: boolean = false): void => {
            formRef.current
                .validateFields()
                .then(values => {
                    // console.log('values:', values);
                    setLoading(true);
                    delete values.menuPerssion;
                    let allCheckedKeys = []; // 有效选中的key
                    checkedKeys.forEach(checkedKeysItem => {
                        // 当前checkedKeys对应menu
                        let currentMenuItemArr = originAllMenuData.filter(originAllMenuDataItem => {
                            return originAllMenuDataItem.id === checkedKeysItem;
                        });
                        let currentMenuItem = currentMenuItemArr[0];
                        allCheckedKeys.push(checkedKeysItem);
                        // 如果子级选中，父级必须选中，所以补充父级
                        if (
                            currentMenuItem &&
                            currentMenuItem.parentId !== 0 &&
                            allCheckedKeys.indexOf(currentMenuItem.parentId) === -1
                        ) {
                            allCheckedKeys.push(currentMenuItem.parentId);
                        }
                    });
                    allCheckedKeys = Array.from(new Set(allCheckedKeys));
                    // console.log('allCheckedKeys:', allCheckedKeys);
                    changeRolePerssionInfo({
                        id: roleId,
                        ...values,
                        status: values.status === true ? 0 : 1,
                        menu: allCheckedKeys,
                    })
                        .then(res => {
                            const data = res.data;
                            if (data.code === 200 && onRoleInfoChange) {
                                onRoleInfoChange(true);
                                if (isSaveClose === true) {
                                    onClose();
                                }
                            }
                        })
                        .catch(err => {
                            // console.log('err:', err);
                            onRoleInfoChange(false);
                        })
                        .finally(() => {
                            setLoading(false);
                        });
                })
                .catch(errorInfo => {});
        };

        const onTreeExpand = (expandedKeysValue: React.Key[]) => {
            setExpandedKeys(expandedKeysValue);
            setAutoExpandParent(false);
        };
        const onTreeCheck = checkedKeysValue => {
            setCheckedKeys(checkedKeysValue);
        };
        const onTreeSelect = (selectedKeysValue: React.Key[], info: any) => {
            setSelectedKeys(selectedKeysValue);
        };
        function onTreeAllFoldChange(e) {
            if (e.target.checked === true) {
                setTreeAllFold(true);
                let expandedKeys = [];
                originAllMenuData.forEach(originAllMenuDataItem => {
                    expandedKeys.push(originAllMenuDataItem.id);
                });
                setExpandedKeys(expandedKeys);
            } else {
                setTreeAllFold(false);
                setExpandedKeys([]);
            }
        }
        function onTreeAllSelectChange(e) {
            if (e.target.checked === true) {
                setTreeAllSelect(true);
                let checkedKeys = [];
                originAllMenuData.forEach(originAllMenuDataItem => {
                    checkedKeys.push(originAllMenuDataItem.id);
                });
                setCheckedKeys(checkedKeys);
            } else {
                setTreeAllSelect(false);
                setCheckedKeys([]);
            }
        }

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
                    footer={
                        <div style={{ textAlign: 'right' }}>
                            <Button
                                className="margin-right-10"
                                onClick={() => setVisible(false)}
                                loading={false}
                            >
                                取消
                            </Button>
                            <Button
                                className="margin-right-10"
                                type="primary"
                                onClick={() => onSureChange(false)}
                                loading={loading}
                            >
                                保存
                            </Button>
                            <Button
                                type="primary"
                                onClick={() => onSureChange(true)}
                                loading={loading}
                            >
                                保存并关闭
                            </Button>
                        </div>
                    }
                >
                    <Spin spinning={loading}>
                        <Form
                            ref={formRef}
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
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
                                rules={[{ required: false, message: '请选择菜单权限!' }]}
                            >
                                <Row>
                                    <Col
                                        span={24}
                                        style={{ height: '32px' }}
                                        className="flex-align-center"
                                    >
                                        <Checkbox
                                            checked={treeAllFold}
                                            onChange={onTreeAllFoldChange}
                                        >
                                            展开或折叠
                                        </Checkbox>
                                        <Checkbox
                                            checked={treeAllSelect}
                                            onChange={onTreeAllSelectChange}
                                        >
                                            全选或全不选
                                        </Checkbox>
                                    </Col>
                                    <Col span={24}>
                                        <div style={{ border: '1px solid #d9d9d9' }}>
                                            <Tree
                                                checkable
                                                onExpand={onTreeExpand}
                                                expandedKeys={expandedKeys}
                                                autoExpandParent={autoExpandParent}
                                                checkStrictly={false}
                                                onCheck={onTreeCheck}
                                                checkedKeys={checkedKeys}
                                                onSelect={onTreeSelect}
                                                selectedKeys={selectedKeys}
                                                treeData={treeData}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item
                                label="备注"
                                name="comment"
                                rules={[{ required: false, message: '请输入备注!' }]}
                            >
                                <TextArea rows={4} placeholder="请输入备注!" />
                            </Form.Item>
                        </Form>
                    </Spin>
                </Drawer>
            </div>
        );
    },
);

export default RoleModifyModal;
