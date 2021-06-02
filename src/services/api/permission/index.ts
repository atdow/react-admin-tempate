/*
 * @Author: atdow
 * @Date: 2021-06-02 17:11:35
 * @LastEditors: null
 * @LastEditTime: 2021-06-02 17:37:57
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
