import React, { Component } from "react";

import { Row, Jumbotron, Form, Button } from "react-bootstrap";

import IconButton from "@material-ui/core/IconButton";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Tooltip from "@material-ui/core/Tooltip";

class editFileName extends Component {

    render() {

        return (
            <div>
                <div className="container mgntop">
                    <h4 style={{ textAlign: "center" }}> Edit File Name </h4>
                    <Row>
                        <div className="wrapper p-b-45">
                            <div style={{ textAlign: "right" }}>
                                <Tooltip title="File Name" placement="top">
                                    <IconButton
                                        href="/home/edifileName"
                                        aria-label="delete"
                                        ontSize="small"
                                    >

                                        <ListAltIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            </div>

                            <Form onSubmit={this.submitCustomer}>
                                <Jumbotron style={{ width: "60rem" }}>
                                    <div>
                                        <div>
                                            <div className="card card-5">
                                                <div className="card-heading">
                                                    <h4 className="title">
                                                        Edit File Name
                                                    </h4>
                                                    <br />
                                                </div>
                                                <div className="card-body">
                                                    <form id="filenameform">
                                                        <div className="form-row">
                                                            <div className="name"> File Name </div>
                                                            <div className="value">
                                                                <div className="input-group">
                                                                    <input
                                                                        className="input--style-5"
                                                                        placeholder="Name here"
                                                                        type="text"
                                                                        id="filename"
                                                                        name="filename"
                                                                        value={filename}
                                                                        autoComplete="off"
                                                                        required
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <Button type="submit" variant="warning">
                                                                {" "}
                                                                Submit{" "}
                                                            </Button>
                                                        </div>
                                                        <br />
                                                        <br />
                                                        <div style={{ alignItems: "center" }}>
                                                            <br /> &nbsp;&nbsp;{" "}
                                                        </div>
                                                        {this.state.message === "error" ? (
                                                            <div className="alert alert-danger" role="alert">
                                                                Please provide valid information!
                                                            </div>
                                                        ) : null}
                                                        {this.state.message === "success" ? (
                                                            <div className="alert alert-success" role="alert">
                                                                Successfully updated file name
                                                            </div>
                                                        ) : null}
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Jumbotron>
                            </Form>
                        </div>
                    </Row>
                </div>
            </div>
        );
    }
}

export default editFileName;
