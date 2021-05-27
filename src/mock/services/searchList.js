/*
 * @Author: atdow
 * @Date: 2021-05-26 17:41:32
 * @LastEditors: null
 * @LastEditTime: 2021-05-27 11:43:16
 * @Description: file content
 */
import Mock from 'mockjs2';
import { builder, getQueryParameters } from '../util';
const totalCount = 5701;

const searchList = options => {
    const parameters = JSON.parse(options.body);
    // console.log('parameters:', parameters);
    const result = [];
    const pageNo = parseInt(parameters.pageNo);
    const pageSize = parseInt(parameters.pageSize);

    const totalPage = Math.ceil(totalCount / pageSize);
    const key = (pageNo - 1) * pageSize;
    const next = (pageNo >= totalPage ? totalCount % pageSize : pageSize) + 1;

    for (let i = 1; i < next; i++) {
        const tmpKey = key + i;
        result.push({
            //1-8
            key: tmpKey,
            no: 'No ' + tmpKey,
            id: tmpKey,
            name: 'TradeCode' + tmpKey,
            description: '这是一段描述',
            useCount: tmpKey + '万',
            status: tmpKey % 4,
        });
    }

    return builder({
        pageSize: pageSize,
        pageNo: pageNo,
        totalCount: totalCount,
        totalPage: totalPage,
        data: result,
    });
};

Mock.mock(/\/pt\/searchList/, 'get', searchList);
