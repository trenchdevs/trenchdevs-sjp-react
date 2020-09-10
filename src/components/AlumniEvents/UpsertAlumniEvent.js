import React, {useState} from 'react';
import axios from 'axios';
import _ from 'lodash';

import {toast} from 'react-toastify';

import {NavLink, Redirect} from "react-router-dom";
import {
    Button, Row, Col, CardHeader, CardTitle,
    CardBody, Form, FormGroup, Input, Card,
    Alert,
} from 'reactstrap';

const UpsertAlumniEvent = (props) => {


    const [formFields, setFormFields] = useState({
        name: '',
        location: '',
        description: undefined,
        start_date: undefined,
        end_date: undefined,
    });

    const [errors, setErrors] = useState([]);
    const [redirectTo, setRedirectTo] = useState(null);

    const setSimpleFormValue = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value,
        });
    }

    const submit = async () => {
        const response = await axios.post('/webapi/alumni/events/upsert', formFields)
        const {errors = [], status = 'error', message = ''} = response.data;

        if (status === 'success') {
            toast.success(message);
            setRedirectTo('/events');
        } else {
            setErrors(errors);
        }
    };

    if (redirectTo) {
        return <Redirect to={redirectTo} />
    }

    return (

        <>
            <div className="content">

                <Row>
                    <Col md="9">
                        <Card className="card-user">
                            <CardHeader>
                                <CardTitle tag="h5">Create New Event</CardTitle>
                            </CardHeader>

                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-2" md="12">
                                            <FormGroup>
                                                <label>Event Name</label>
                                                <Input
                                                    name={'name'}
                                                    defaultValue={formFields.name}
                                                    placeholder="eg. Alumni Homecoming 2020"
                                                    type="text"
                                                    onChange={setSimpleFormValue}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>Location</label>
                                                <Input
                                                    defaultValue={formFields.location}
                                                    placeholder="Where the event will take place"
                                                    type="text"
                                                    name="location"
                                                    onChange={setSimpleFormValue}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>Event Description</label>
                                                <Input
                                                    name='description'
                                                    type="textarea"
                                                    defaultValue={formFields.description}
                                                    onChange={setSimpleFormValue}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <FormGroup>
                                                <label>Start Date</label>
                                                <Input
                                                    name={'start_date'}
                                                    defaultValue={formFields.start_date}
                                                    placeholder="2020-11-15 13:00:00"
                                                    type="text"
                                                    onChange={setSimpleFormValue}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <label>End Date</label>
                                                <Input
                                                    name={'end_date'}
                                                    defaultValue={formFields.end_date}
                                                    placeholder="2020-11-15 15:00:00"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>

                                    <Row>

                                        {
                                            !_.isEmpty(errors) &&
                                            <Col md={12}>
                                                <Alert className='w-50 float-right' color={'danger'}>
                                                    <ul className='list-unstyled'>
                                                        {errors.map((error, index) => <li key={index}>{error}</li>)}
                                                    </ul>
                                                </Alert>
                                            </Col>
                                        }

                                        <Col>
                                            <div className="update float-right">
                                                <Button
                                                    className="btn-round"
                                                    color="success"
                                                    onClick={submit}
                                                >
                                                    Save
                                                </Button>
                                            </div>
                                            <div className="update float-right">
                                                <NavLink
                                                    to={'/events'}
                                                    // className={'float-right'}
                                                    activeClassName="active"
                                                >
                                                    <Button
                                                        className="btn-round"
                                                        color="primary"
                                                        type="submit"
                                                    >
                                                        Cancel
                                                    </Button>
                                                </NavLink>
                                            </div>

                                        </Col>

                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default UpsertAlumniEvent;