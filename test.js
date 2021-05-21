/*
 * @Author: atdow
 * @Date: 2021-05-21 17:22:30
 * @LastEditors: null
 * @LastEditTime: 2021-05-21 17:23:46
 * @Description: file content
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const os = require('os');

function getIp() {
    const [, WLAN] = Object.values(os.networkInterfaces());
    for (let i = 0; i < WLAN.length; i++) {
        const { family, address, internal } = WLAN[i];
        if (family === 'IPv4' && address !== '127.0.0.1' && !internal) return address;
    }
}

console.log('getIp:', getIp());
