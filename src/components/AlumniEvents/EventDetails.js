import React, {useEffect, useState} from 'react';
import axios from 'axios';
import _ from 'lodash';

import {toast} from 'react-toastify';

import {NavLink, Redirect} from "react-router-dom";
import {
    Button, Row, Col, CardHeader, CardTitle,
    CardBody, Form, FormGroup, Input, Card,
    Alert,
} from 'reactstrap';

const EventDetails = (props) => {

    const id = props.match.params.id || null;

    const [redirectTo, setRedirectTo] = useState(null);
    const [event, setEvent] = useState({
        name: '',
        location: '',
        description: undefined,
        start_date: undefined,
        end_date: undefined,
    });

    useEffect(() => {
        if (id) {
            axios.get(`/webapi/alumni/events/${id}`)
                .then(({data}) => {
                    const {status, alumni_event} = data;

                    if (status === 'success' && !_.isEmpty(alumni_event)) {
                        setEvent(alumni_event);
                    } else {
                        setRedirectTo('/events')
                    }

                }).catch(() => {
                toast.error("Invalid URL passed");
                setRedirectTo('/events')
            })
        }

    }, [id]);


    if (redirectTo) {
        return <Redirect to={redirectTo}/>
    }
    return (

        <>
            <div className="content">

                <Row className='mb-3'>
                    <Col>
                        <NavLink to={'/events'}>
                            <i className='fa fa-arrow-left'/> Back to list
                        </NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Card className="card-user">
                            <CardHeader>
                                <CardTitle tag="h5">Event Details</CardTitle>
                            </CardHeader>

                            <CardBody>
                                event details here
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="card-user">
                            <CardHeader>
                                <CardTitle tag="h5">Add Attendees</CardTitle>
                            </CardHeader>

                            <CardBody>
                                Searchbox here..
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card className="card-user">
                            <CardHeader>
                                <CardTitle tag="h5">Event Attendees</CardTitle>
                            </CardHeader>

                            <CardBody>
                                table here w/ id and delete
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default EventDetails;