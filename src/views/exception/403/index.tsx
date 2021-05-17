/*
 * @Author: atdow
 * @Date: 2021-05-17 13:46:05
 * @LastEditors: null
 * @LastEditTime: 2021-05-17 13:46:54
 * @Description: file content
 */

// import { Link } from 'umi';
import { Result, Button } from 'antd';
import React from 'react';

export default () => (
    <Result
        status="403"
        title="403"
        style={{
            background: 'none',
        }}
        subTitle="Sorry, you don't have access to this page."
        extra={
            //   <Link to="/">
            <Button type="primary">Back to home</Button>
            //   </Link>
        }
    />
);
