/*
 * @Author: atdow
 * @Date: 2021-05-26 17:43:42
 * @LastEditors: null
 * @LastEditTime: 2021-05-26 17:44:28
 * @Description: file content
 */
import axios from 'axios';
/**
 * 获取权限列表
 * @returns {*}
 */
export function getSearchList(parameter) {
    return axios({
        url: '/pt/searchList',
        method: 'get',
        data: parameter,
    });
}
