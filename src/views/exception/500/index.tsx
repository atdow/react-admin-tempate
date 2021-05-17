/*
 * @Author: atdow
 * @Date: 2021-05-17 13:46:19
 * @LastEditors: null
 * @LastEditTime: 2021-05-17 13:48:07
 * @Description: file content
 */

// import { Link } from 'umi';
import { Result, Button } from 'antd';
import React from 'react';

export default () => (
    <Result
        status="500"
        title="500"
        style={{
            background: 'none',
        }}
        subTitle="Sorry, the server is reporting an error."
        extra={
            //   <Link to="/">
            <Button type="primary">Back Home</Button>
            //   </Link>
        }
    />
);
