/*
 * @Author: atdow
 * @Date: 2021-05-17 13:46:12
 * @LastEditors: null
 * @LastEditTime: 2021-05-17 13:47:25
 * @Description: file content
 */

// import { Link } from 'umi';
import { Result, Button } from 'antd';
import React from 'react';

export default () => (
    <Result
        status="404"
        title="404"
        style={{
            background: 'none',
        }}
        subTitle="Sorry, the page you visited does not exist."
        extra={
            //   <Link to="/">
            <Button type="primary">Back Home</Button>
            //   </Link>
        }
    />
);
