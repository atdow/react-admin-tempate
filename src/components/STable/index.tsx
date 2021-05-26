/*
 * @Author: atdow
 * @Date: 2021-05-26 17:07:01
 * @LastEditors: null
 * @LastEditTime: 2021-05-26 18:16:50
 * @Description: file content
 */

import React, { useEffect, MouseEvent } from 'react';
import { Table } from 'antd';

type Props = {
    columns?: Array<any>;
    dataSource: Function;
    // onClick(e: MouseEvent<HTMLElement>): void
};
const Stable: React.FC<Props> = ({ columns, dataSource }): JSX.Element => {
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    useEffect(() => {
        dataSource({}).then(res => {
            console.log('res:', res);
        });
    }, []);

    function change(pagination, filters, sorte) {
        console.log('pagination, filters, sorte:', pagination, filters, sorte);
    }

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                onChange={change}
                bordered
                pagination={{
                    total: 600,
                    defaultPageSize: 2,
                    pageSizeOptions: ['2', '10', '20', '50', '100'],
                }}
            />
        </div>
    );
};

export default Stable;
