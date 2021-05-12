/*
 * @Author: atdow
 * @Date: 2021-05-12 14:30:35
 * @LastEditors: null
 * @LastEditTime: 2021-05-12 14:31:26
 * @Description: file content
 */
export function isIE() {
    const bw = window.navigator.userAgent;
    const compare = s => bw.indexOf(s) >= 0;
    const ie11 = (() => 'ActiveXObject' in window)();
    return compare('MSIE') || ie11;
}
