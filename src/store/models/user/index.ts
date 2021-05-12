/*
 * @Author: atdow
 * @Date: 2021-05-12 16:15:46
 * @LastEditors: null
 * @LastEditTime: 2021-05-12 17:17:41
 * @Description: file content
 */
// 添加状态
import { RootDispatch } from '@src/store';

export interface LoginStateDeclaration {
    pageName?: string;
    count: number;
}

const state: LoginStateDeclaration = {
    pageName: 'user',
    count: 0,
};

export default {
    name: 'user',
    state,
    reducers: {
        // 两种写法：一种用常量作为 key ，一种直接定义方法，个人认为第二种使用更舒服
        INCREMENT: (state: LoginStateDeclaration, payload?: any): LoginStateDeclaration => {
            // 打印输出的是一个 proxy 代理实例对象
            // console.log(state);
            state.count += 99;
            // 最终要返回整棵 state 树（当前 model 的 state 树——login）
            return state;
        },
        decrement: (state: LoginStateDeclaration, payload?: any): LoginStateDeclaration => {
            state.count -= 1;
            return state;
        },
    },
    effects: (dispatch: RootDispatch) => ({
        getUserInfoAsync() {
            return new Promise(resolve =>
                setTimeout(() => {
                    resolve({ id: 11111 });
                }, 1000),
            );
        },
        getPerssionList() {
            console.log('gerPerssionList');
        },
    }),
};
