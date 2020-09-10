import React from 'react';
import {
    Row, Col, CardHeader, CardTitle,
    CardBody, Card, Table
} from 'reactstrap';
import {NavLink} from "react-router-dom";
import PaginatedTable from "../ingredients/PaginatedTable";


const ListAlumniEvents = (props) => {


    const columns = React.useMemo(
        () => [
            {
                Header: 'Id',
                accessor: 'id', // accessor is the "key" in the data
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'Event Start Date',
                accessor: 'start_date',
            },
            {
                Header: 'Event End Date',
                accessor: 'end_date',
            },
            {
                Header: 'Created At',
                accessor: 'created_at',
            },
            {
                Header: 'Actions',
                accessor: '',
                Cell: ({row}) => {
                    console.log(row);
                 return (
                     <span>
                    {row.original.id} todo: edit
                    </span>
                 )

                }
            },
        ],
        []
    );

    return (

        <>
            <div className="content">

                <Row>
                    <Col md="12">
                        <Card className="card-user">
                            <CardHeader>
                                <CardTitle tag="h5">
                                    Events
                                    <NavLink
                                        to={'/events/upsert'}
                                        className={'float-right'}
                                        activeClassName="active"
                                    >
                                        <i className={'fa fa-plus'}/>
                                    </NavLink>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <PaginatedTable columns={columns} endpoint={'webapi/alumni/events'}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}


export default ListAlumniEvents;