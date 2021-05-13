/*
 * @Author: atdow
 * @Date: 2021-05-13 16:34:09
 * @LastEditors: null
 * @LastEditTime: 2021-05-13 16:41:20
 * @Description: file content
 */

import React from 'react';
import logo from '@assets/images/logo.svg';
import styles from './logo.module.less';
export default function Logo(props) {
    return (
        <>
            <img alt="logo" src={logo} className={styles.img} />
        </>
    );
}
