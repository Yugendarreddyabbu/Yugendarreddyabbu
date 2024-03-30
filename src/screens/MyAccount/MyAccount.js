import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const MyAccount = () => {
    return (
        <div>
            <Header />
            <Container className="mt-4" >
                <h2>My Account</h2>
                <div style={{
                    backgroundColor: 'white',width:"560px",position:"relative",left:"270px"
                }}>
                <Row style={{display:"inline-flex"}}>
                    <Col sm={4}>
                        <div className="mb-2" style={{
                    backgroundColor: 'whitesmoke',
                    borderRadius: '10px',
                    padding: '20px',
                    maxWidth: '220px',
                    margin: 'auto',
                    marginTop:"20px"
                }}>
                            <p>£0.00</p>
                            <p>Earned Credits</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="mb-2"  style={{
                    backgroundColor: 'whitesmoke',
                    borderRadius: '10px',
                    padding: '20px',
                    maxWidth: '140px',
                    margin: 'auto',
                    marginTop:"20px"
                }}>
                            <p>-£0.00</p>
                            <p>Spent Credits</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="mb-2"  style={{
                    backgroundColor: 'whitesmoke',
                    borderRadius: '10px',
                    padding: '20px',
                    maxWidth: '140px',
                    margin: 'auto',
                    marginTop:"20px"
                }}>
                            <p>£0.00</p>
                            <p>Remaining Credits</p>
                        </div>
                    </Col>
                </Row>
                <p>Use my credits</p>
                <Row className="mb-4"  style={{
                    backgroundColor: 'whitesmoke',
                    borderRadius: '10px',
                    padding: '20px',
                    maxWidth: '800px',
                    margin: 'auto',
                    marginTop:"20px"
                }}>
                    
                    <Col sm={12}>
                        <div style={{display:"inline-block"}}>
                          
                            <p>Share your unique link and you will receive £30.00 in credits.</p>
                            <Row>
                                <Col sm={6}>
                                    <input type="text" className="form-control" value="www.fixter.co.uk/me/mark-994391" readOnly />
                                </Col>
                                <Col sm={1}>
                                    <Link to="#" className="btn btn-primary">Copy</Link>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                </div>

                <Row style={{
                    backgroundColor: 'whitesmoke',
                    borderRadius: '10px',
                    padding: '20px',
                    maxWidth: '800px',
                    margin: 'auto',
                    marginTop:"20px"
                }}>
                    <Col sm={4}>
                        <div className="mb-4">
                            <p>First name</p>
                            <input type="text" className="form-control" value="Mark" readOnly />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="mb-4">
                            <p>Last name</p>
                            <input type="text" className="form-control" value="Henry" readOnly />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="mb-4">
                            <p>Phone number</p>
                            <input type="text" className="form-control" value="+447771401991" readOnly />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                    <div className="image">
                             <div>
                             <p>Driving Licence</p>
                             <img src="https://www.shutterstock.com/image-illustration/uk-driver-license-id-card-600nw-1216398274.jpg" alt="" />
                            </div>
                     </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default MyAccount;
