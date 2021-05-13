/*
 * @Author: atdow
 * @Date: 2021-05-12 16:15:46
 * @LastEditors: null
 * @LastEditTime: 2021-05-13 14:25:12
 * @Description: file content
 */
// 添加状态
import { RootDispatch } from '@src/store';
import {
    routesConfig as routes,
    RouteConfigDeclaration as routesDeclaration,
} from '@src/routes/routes-config';

export interface UserStateDeclaration {
    pageName?: string;
    count: number;
    routes: routesDeclaration[];
    menu: Array<any>;
    permission: Record<string, any>;
}

const state: UserStateDeclaration = {
    pageName: 'user',
    count: 0,
    routes: routes,
    menu: [],
    permission: {},
};

import { queryPerssionList } from '@src/services/api/user/index';

export default {
    name: 'user',
    state,
    reducers: {
        // 两种写法：一种用常量作为 key ，一种直接定义方法，个人认为第二种使用更舒服
        INCREMENT: (state: UserStateDeclaration, payload?: any): UserStateDeclaration => {
            // 打印输出的是一个 proxy 代理实例对象
            // console.log(state);
            state.count += 99;
            // 最终要返回整棵 state 树（当前 model 的 state 树——login）
            return state;
        },
        decrement: (state: UserStateDeclaration, payload?: any): UserStateDeclaration => {
            state.count -= 1;
            return state;
        },
        SETMENU: (state: UserStateDeclaration, payload?: any): UserStateDeclaration => {
            // console.log('menu:', payload);
            state.menu = payload;
            return state;
        },
        SETPERMISSION: (state: UserStateDeclaration, payload?: any): UserStateDeclaration => {
            // console.log('permission:', payload);
            state.permission = payload;
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
            interface Iresolve {
                menu: Array<any>;
                permission: Array<any>;
            }
            return new Promise((resolve: (value: Iresolve) => void, reject) => {
                queryPerssionList()
                    .then(res => {
                        const data = res.data.data || {};
                        const { menu = [], permission = {} } = data;
                        this.SETMENU(menu);
                        this.SETPERMISSION(permission);
                        resolve({ menu, permission });
                        // console.log('data:', data);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        },
    }),
};
