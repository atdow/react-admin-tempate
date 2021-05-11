/*
 * @Author: atdow
 * @Date: 2021-05-11 15:38:06
 * @LastEditors: null
 * @LastEditTime: 2021-05-11 15:49:31
 * @Description: 生成随机字符串
 */

export function generateRandomString(len: number) {
    const base = 19968,
        range = 10;
    let i = 0,
        str = '';
    // 19968 至 40869
    while (i < len) {
        i++;
        const lower = parseInt('' + Math.random() * range);
        str += String.fromCharCode(base + lower);
    }
    return str;
}
