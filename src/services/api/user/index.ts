/*
 * @Author: atdow
 * @Date: 2021-05-11 15:38:06
 * @LastEditors: null
 * @LastEditTime: 2021-05-12 17:19:51
 * @Description: file content
 */
import axios from 'axios';

// 获取用户信息
export const getUserInfo = () => axios.post('/getUserInfo');

/**
 * 账号密码登录
 * @param { String } username required body
 * @param { String } password required body
 * @returns {*}
 */
export function login(parameter) {
    return axios({
        url: '/pb/login',
        method: 'post',
        data: parameter,
    });
}

/**
 * 获取权限列表
 * @returns {*}
 */
export function queryPerssionList() {
    return axios({
        url: '/pt/perssionlist',
        method: 'get',
        // params: parameter,
    });
}
