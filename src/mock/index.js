/*
 * @Author: atdow
 * @Date: 2020-10-21 11:18:41
 * @LastEditors: null
 * @LastEditTime: 2021-05-18 17:49:26
 * @Description: file content
 */
import { isIE } from '@src/utils/util.js';

// console.log('process.env.NODE_ENV:', process.env.NODE_ENV); development
// 判断环境不是 prod 或者 preview 是 true 时，加载 mock 服务
if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === true || true) {
    //if (process.env.NODE_ENV !== 'production') {
    if (isIE()) {
        console.error(
            '[antd-pro] ERROR: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.',
        );
    }
    // 使用同步加载依赖
    // 防止 vuex 中的 GetInfo 早于 mock 运行，导致无法 mock 请求返回结果
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Mock = require('mockjs2');
    require('./services/user');
    require('./services/login');

    Mock.setup({
        timeout: 800, // setter delay time
    });
}
