/*
 * @Author: atdow
 * @Date: 2021-06-02 17:11:35
 * @LastEditors: null
 * @LastEditTime: 2021-06-03 17:16:37
 * @Description: file description
 */

import axios from 'axios';

/**
 * 获取角色列表
 * @returns {*}
 */
export function queryRoleList(parameter) {
    return axios({
        url: '/pt/roleList',
        method: 'post',
        data: parameter,
    });
}

/**
 * 切换取角色状态
 * @returns {*}
 */
export function changeRoleStatus(parameter) {
    return axios({
        url: '/pt/changeRoleStatus',
        method: 'post',
        data: parameter,
    });
}

/**
 * 获取角色权限信息
 * @returns {*}
 */
export function getRolePerssionInfo(parameter) {
    return axios({
        url: '/pt/getRolePerssionInfo',
        method: 'get',
        params: parameter,
    });
}

/**
 * 获取菜单树
 * @returns {*}
 */
export function getMenuTree() {
    return axios({
        url: '/pt/getMenuTree',
        method: 'get',
    });
}
