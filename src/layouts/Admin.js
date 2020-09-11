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
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import {Route, Switch} from "react-router-dom";

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
import UpsertAlumniEvent from "../components/AlumniEvents/UpsertAlumniEvent";
import EventDetails from "../components/AlumniEvents/EventDetails";

var ps;

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "black",
            activeColor: "info",
        };
        this.mainPanel = React.createRef();
    }

    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(this.mainPanel.current);
            document.body.classList.toggle("perfect-scrollbar-on");
        }
    }

    componentWillUnmount() {
        if (navigator.platform.indexOf("Win") > -1) {
            ps.destroy();
            document.body.classList.toggle("perfect-scrollbar-on");
        }
    }

    componentDidUpdate(e) {
        if (e.history.action === "PUSH") {
            this.mainPanel.current.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
        }
    }

    handleActiveClick = (color) => {
        this.setState({activeColor: color});
    };
    handleBgClick = (color) => {
        this.setState({backgroundColor: color});
    };

    render() {
        return (
            <div className="wrapper">

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                <Sidebar
                    {...this.props}
                    routes={routes}
                    bgColor={this.state.backgroundColor}
                    activeColor={this.state.activeColor}
                />
                <div className="main-panel" ref={this.mainPanel}>
                    <DemoNavbar {...this.props} />
                    <Switch>
                        <>
                            {routes.map((prop, key) => {
                                return (
                                    <Route
                                        exact
                                        path={prop.path}
                                        component={prop.component}
                                        key={key}
                                    />
                                );
                            })}
                            <Route exact path={'/events/upsert'} component={UpsertAlumniEvent}/>
                            <Route path={'/events/upsert/:id'} component={UpsertAlumniEvent}/>
                            <Route path={'/events/details/:id'} component={EventDetails}/>
                        </>
                    </Switch>
                    <Footer fluid/>
                </div>
            </div>
        );
    }
}

export default Dashboard;
