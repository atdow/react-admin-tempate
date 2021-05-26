/*
 * @Author: atdow
 * @Date: 2021-05-26 17:41:32
 * @LastEditors: null
 * @LastEditTime: 2021-05-26 18:17:58
 * @Description: file content
 */
import Mock from 'mockjs2';
import { builder } from '../util';

const searchList = options => {
    const result = {
        data: [],
        pageNo: 1,
        pageSize: 20,
        totalCount: 154752,
        totalPage: 7738,
    };
    return result;
};

Mock.mock(/\/pt\/searchList/, 'get', searchList);
