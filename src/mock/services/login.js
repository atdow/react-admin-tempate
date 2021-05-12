/*
 * @Author: atdow
 * @Date: 2021-05-12 14:26:53
 * @LastEditors: null
 * @LastEditTime: 2021-05-12 14:42:23
 * @Description: file content
 */
import Mock from 'mockjs2';
import { builder } from '../util';

const loginInfo = options => {
    const loginInfo = {
        userInfo: {
            createTime: null,
            delFlag: null,
            id: '1',
            industryId: 'zk_super_1',
            name: '管理员账号',
            phone: '123456',
            pwd: '82c4933f9037449584aa9e5d7597bafb',
            roleId: '1',
            status: 0,
        },
        token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZSI6IjEyMzQ1NiIsImV4cCI6MTU4NzcxMTkyOX0.rqhOagyUa-eVjjxdKW-aWDktCf1AiDLQFBkIMrZxBJE',
    };
    return builder(loginInfo);
};

Mock.mock(/\/pb\/login/, 'post', loginInfo);

Mock.mock(/\/fic-web-api\/login2/, 'post', loginInfo);
