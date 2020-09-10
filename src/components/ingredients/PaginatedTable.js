import React, {useEffect, useState} from "react";
import axios from "axios";
import {useTable} from "react-table";
import {Table} from "reactstrap";
import {Pagination} from "react-laravel-paginex";

import './PaginatedTable.css';

const PaginatedTable = ({columns, endpoint}) => {

    const [data, setData] = useState({
        page: 1,
        current_page: 1,
        last_page: 1,
        next_page_url: null,
        prev_page_url: null,
    });

    const fetchData = (page) => {
        if (page) {
            axios.get(`${endpoint}?page=${page}`)
                .then(response => {
                    setData(response.data);
                });
        }
    }

    const getData = (data) => {

        if (data.page) {
            fetchData(data.page)
        }

    }

    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data: data.data || []})


    useEffect(() => {
        fetchData(1);
    }, [data.page]);

    return (

        <div>
            <Table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell, index) => {
                                return (
                                    <td
                                        key={index}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </Table>

            <Pagination className={'justify-content-end'} changePage={getData} data={data}/>
        </div>
    );

};

export default PaginatedTable;