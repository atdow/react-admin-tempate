/*
 * @Author: atdow
 * @Date: 2021-05-11 15:38:06
 * @LastEditors: null
 * @LastEditTime: 2021-05-13 15:40:10
 * @Description: file content
 */
import React from 'react';
import styles from './page-loading.module.less';
import { Spin } from 'antd';

export default class PageLoading extends React.Component<
    {
        message?: string;
        className?: string;
        style?: React.CSSProperties;
    },
    {}
> {
    render() {
        return (
            <div className={styles.container}>
                <Spin size="large" />
            </div>
        );
    }
}
