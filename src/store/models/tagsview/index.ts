/*
 * @Author: atdow
 * @Date: 2021-05-24 17:03:21
 * @LastEditors: null
 * @LastEditTime: 2021-05-24 17:06:07
 * @Description: file content
 */
// 添加状态
import { RootDispatch } from '@src/store';

export interface UserStateDeclaration {
    tagsviewData?: Array<any>;
}

const state: UserStateDeclaration = {
    tagsviewData: [],
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
