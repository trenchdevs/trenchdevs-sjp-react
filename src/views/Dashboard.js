/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useEffect, useState} from "react";
import {
    Card, CardHeader, CardBody, CardFooter,
    CardTitle, Row, Col, Button,
} from "reactstrap";
import {NavLink} from "react-router-dom";


function Dashboard(props) {

    return (
        <>
            <div className="content">
                <Row>
                    <Col lg="3" md="6" sm="6">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-globe text-warning"/>
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Total Lay</p>
                                            <CardTitle tag="p">600</CardTitle>
                                            <p/>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr/>
                                <div className="stats">
                                    <i className="fas fa-sync-alt"/> As of date
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" sm="6">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-money-coins text-success"/>
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Total Ordained</p>
                                            <CardTitle tag="p">20</CardTitle>
                                            <p/>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr/>
                                <div className="stats">
                                    <i className="far fa-calendar"/> Last day
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" sm="6">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-vector text-danger"/>
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Errors</p>
                                            <CardTitle tag="p">23</CardTitle>
                                            <p/>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr/>
                                <div className="stats">
                                    <i className="far fa-clock"/> In the last hour
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" sm="6">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-favourite-28 text-primary"/>
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Followers</p>
                                            <CardTitle tag="p">+45K</CardTitle>
                                            <p/>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr/>
                                <div className="stats">
                                    <i className="fas fa-sync-alt"/> Update now
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">
                                    Latest Events

                                    <NavLink to={'/events/upsert'}>
                                        <Button size={'sm'} color={'success'} className={'float-right'}>
                                            <i className="fa fa-plus"/>
                                        </Button>
                                    </NavLink>
                                </CardTitle>
                                <p className="card-category"></p>
                            </CardHeader>
                            <CardBody>
                                paginated table here
                            </CardBody>
                            <CardFooter>
                                <hr/>
                                <div className="stats">
                                    <i className="fa fa-history"/> Total
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">
                                    <span>Recently Added Entries</span>
                                    <Button size={'sm'} color={'success'} className={'float-right'}>
                                        <i className="fa fa-plus"/>
                                    </Button>
                                </CardTitle>
                                <p className="card-category"></p>
                            </CardHeader>
                            <CardBody>
                                ...user details here
                            </CardBody>
                            <CardFooter>
                                <hr/>
                                <div className="stats">
                                    <i className="fa fa-history"/> Total
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>

            </div>
        </>
    );
}

export default Dashboard;
