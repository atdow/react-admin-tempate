/*
 * @Author: atdow
 * @Date: 2021-05-26 17:07:01
 * @LastEditors: null
 * @LastEditTime: 2021-06-02 17:59:33
 * @Description: file content
 */

import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

type Props = {
    columns: ColumnsType<any>;
    dataSource: Function;
    showSizeChanger?: Boolean;
    className?: string;
    rowKey?: string | Function;
    [key: string]: any;
};
const Stable: React.FC<Props> = forwardRef(
    (
        { columns, dataSource, showSizeChanger, className, rowKey = 'key', ...arg },
        ref,
    ): JSX.Element => {
        // table数据
        const [tableData, setTableData] = useState([]);
        const [loading, setLoading] = useState(false);
        // 请求参数
        const [queryParam, setQueryParam] = useState({
            pageNo: 1,
            pageSize: 10,
        });
        // 分页参数
        const [paginationData, setPaginationData] = useState({
            current: 1,
            total: 0,
            defaultPageSize: 10,
            pageSizeOptions: ['10', '20', '50', '100'],
            showSizeChanger: showSizeChanger,
        });

        useImperativeHandle(ref, () => ({
            // 暴露给父组件的方法
            request: value => {
                requestData(value);
            },
        }));

        useEffect(() => {
            requestData();
        }, []);

        function requestData(refresh = false) {
            setLoading(true);
            if (refresh) {
                queryParam.pageNo = 1;
                paginationData.current = 1;
                setPaginationData[paginationData as any];
            }
            dataSource(queryParam)
                .then(res => {
                    // 为防止删除数据后导致页面当前页面数据长度为 0 ,自动翻页到上一页
                    if (
                        res.data.length === 0 &&
                        this.showSizeChanger &&
                        paginationData.current > 1
                    ) {
                        paginationData.current--;
                        setPaginationData(paginationData);
                        queryParam.pageNo--;
                        setQueryParam(queryParam);
                        requestData();
                        return;
                    }
                    paginationData.total = res.totalCount || 0;
                    setPaginationData(paginationData);
                    let tableData = res.data || [];
                    setTableData(tableData);
                })
                .catch(err => {})
                .finally(() => {
                    setLoading(false);
                });
        }

        function change(pagination, filters, sorte) {
            // 改变pageSize时，回退到第一页
            if (queryParam.pageSize !== pagination.pageSize) {
                queryParam.pageSize = pagination.pageSize;
                // 回退第一页
                queryParam.pageNo = 1;
                paginationData.current = 1;
            } else {
                queryParam.pageSize = pagination.pageSize;
                queryParam.pageNo = pagination.current;
                paginationData.current = pagination.current;
            }
            requestData();
            setPaginationData[paginationData as any];
        }

        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={tableData}
                    onChange={change}
                    bordered
                    loading={loading}
                    pagination={paginationData as any}
                    className={className}
                    {...arg}
                />
            </div>
        );
    },
);

export default Stable;
