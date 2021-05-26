/*
 * @Author: atdow
 * @Date: 2021-05-24 17:03:21
 * @LastEditors: null
 * @LastEditTime: 2021-05-26 11:59:10
 * @Description: file content
 */
// 添加状态
import { RootDispatch } from '@src/store';

export interface UserStateDeclaration {
    tagsviewData?: Array<any>;
}

const state: UserStateDeclaration = {
    tagsviewData: [
        {
            name: 'index',
            parentId: 0,
            id: 10000,
            meta: {
                icon: 'HomeOutlined',
                title: '首页',
                show: true,
            },
            component: 'Home',
            path: '/react-admin-tempate/index/home',
        },
    ],
};

export default {
    name: 'tagsview',
    state,
    reducers: {
        setTagsviewData: (state: UserStateDeclaration, payload?: any): UserStateDeclaration => {
            // console.log('permission:', payload);
            state.tagsviewData = payload;
            return state;
        },
    },
    effects: (dispatch: RootDispatch) => ({}),
};
