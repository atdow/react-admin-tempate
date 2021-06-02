/*
 * @Author: atdow
 * @Date: 2021-06-02 17:37:24
 * @LastEditors: null
 * @LastEditTime: 2021-06-02 19:13:35
 * @Description: file description
 */
import Mock from 'mockjs2';
import { builder, getQueryParameters } from '../util';
const totalCount = 5701;

const roleListData = [
    {
        key: 1,
        id: 1,
        roleIndex: 1,
        roleName: '超级管理员',
        permissonCharacter: 'admin',
        displaySequence: 1,
        status: true,
        createTime: '2020-11-20 19:29:43',
    },
    {
        key: 2,
        id: 2,
        roleIndex: 2,
        roleName: '普通角色',
        permissonCharacter: 'common',
        displaySequence: 2,
        status: false,
        createTime: '2020-11-20 19:29:43',
    },
];
const roleList = options => {
    const parameters = JSON.parse(options.body);
    const { roleName, permissonCharacter, status, createdTime } = parameters;
    const result = roleListData.filter(data => {
        const roleNameFlag = !!!roleName || String(data.roleName).indexOf(String(roleName)) !== -1;
        const permissonCharacterFlag =
            !!!permissonCharacter ||
            String(data.permissonCharacter).indexOf(String(permissonCharacter)) !== -1;
        const statusFlag = !!!status || String(data.status).indexOf(String(status)) !== -1;
        const createdTimeFlag =
            !!!createdTime || String(data.createdTime).indexOf(String(createdTime)) !== -1;
        return roleNameFlag && permissonCharacterFlag && statusFlag && createdTimeFlag;
    });

    return builder({
        pageSize: 1,
        pageNo: 1,
        totalCount: 2,
        totalPage: 1,
        data: result,
    });
};

Mock.mock(/\/pt\/roleList/, 'post', roleList);
