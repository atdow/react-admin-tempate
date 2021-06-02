/*
 * @Author: atdow
 * @Date: 2021-05-11 15:38:06
 * @LastEditors: null
 * @LastEditTime: 2021-06-02 17:13:06
 * @Description: file description
 */
/**
 * @author：atdow
 * @description：后端接口入口文件
 * @date：2020/3/19
 */
import * as user from './user';
import * as permission from './permission';

// api 中的 key 以单个模块命名，防止接口重名
export const api = {
    user,
    permission,
};
