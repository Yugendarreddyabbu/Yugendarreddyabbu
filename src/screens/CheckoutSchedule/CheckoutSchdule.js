import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import BasketContainer from '../../components/basketsummary/basketsummary';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';


const AddressCard = () => {
    return (
        <div style={{ width: '60%',    marginLeft: "230px", paddingBottom: '40px', boxSizing: 'border-box' }}>
            <Card>
                <CardContent>
                    <div className="ScheduleStepSummary ScheduleStepSummary_component__00b31" role="button" tabIndex="0" aria-label="Address Step completed" style={{ outline: 'none', display: 'flex', cursor: 'pointer' }}>
                        <span className="Image sc-61fd45f8-0 hlBTau schedule-step-summary-img" style={{ display: 'inline-block', width: '55px', height: '62px' }}>
                            <span style={{
                                boxSizing: 'border-box',
                                display: 'inline-block',
                                overflow: 'hidden',
                                width: '55px',
                                height: '62px',
                                background: 'none',
                                opacity: 1,
                                border: '0px',
                                margin: '0px',
                                padding: '0px',
                                position: 'relative'
                            }}>
                                <img alt="transport checked" src="https://res.cloudinary.com/fxtr/image/upload/f_svg,c_limit,w_128,q_100/landing/icons/rectangle_check_purple_aozewp.svg" decoding="async" data-nimg="fixed"
                                    style={{
                                        position: 'absolute',
                                        inset: '0px',
                                        boxSizing: 'border-box',
                                        padding: '0px',
                                        border: 'none',
                                        margin: 'auto',
                                        display: 'block',
                                        width: '0px',
                                        height: '0px',
                                        minWidth: '100%',
                                        maxWidth: '100%',
                                        minHeight: '100%',
                                        maxHeight: '100%'
                                    }}
                                />
                            </span>
                        </span>
                        <div className="schedule-step-summary-wrapper" style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                            <p className="schedule-step-summary-title" style={{ margin: 0, fontFeatureSettings: '"kern"', fontKerning: 'normal' }}>Your address</p>
                            <div className="schedule-step-summary-content">
                                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                    10 Manor Farm Road,
                                    Wembley,
                                    Greater London,
                                    HA0 1AD
                                </Typography>
                            </div>
                            <a className="SimpleLink SimpleLink_component__ms_FU schedule-step-summary-cta SimpleLink_link-2__RXbSC" href="#" style={{
                                textDecoration: 'underline',
                                fontWeight: 600,
                                WebkitTextDecorationColor: '#5739d8',
                                textDecorationColor: '#5739d8',
                                color: '#5739d8'
                            }}>Edit address</a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

const TransportMethodCard = () => {
    return (
        <div style={{ width: '60%',    marginLeft: "230px", paddingBottom: '40px', boxSizing: 'border-box' }}>
            <Card>
                <CardContent>
                    <div className="ScheduleStepSummary ScheduleStepSummary_component__00b31" role="button" tabIndex="0" aria-label="Address Step completed" style={{ outline: 'none', display: 'flex', cursor: 'pointer' }}>
                        <span className="Image sc-61fd45f8-0 hlBTau schedule-step-summary-img" style={{ display: 'inline-block', width: '55px', height: '62px' }}>
                            <span style={{
                                boxSizing: 'border-box',
                                display: 'inline-block',
                                overflow: 'hidden',
                                width: '55px',
                                height: '62px',
                                background: 'none',
                                opacity: 1,
                                border: '0px',
                                margin: '0px',
                                padding: '0px',
                                position: 'relative'
                            }}>
                                <img alt="transport checked" src="https://res.cloudinary.com/fxtr/image/upload/f_svg,c_limit,w_128,q_100/landing/icons/rectangle_check_purple_aozewp.svg" decoding="async" data-nimg="fixed"
                                    style={{
                                        position: 'absolute',
                                        inset: '0px',
                                        boxSizing: 'border-box',
                                        padding: '0px',
                                        border: 'none',
                                        margin: 'auto',
                                        display: 'block',
                                        width: '0px',
                                        height: '0px',
                                        minWidth: '100%',
                                        maxWidth: '100%',
                                        minHeight: '100%',
                                        maxHeight: '100%'
                                    }}
                                />
                            </span>
                        </span>
                        <div className="schedule-step-summary-wrapper" style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                            <p className="schedule-step-summary-title" style={{ margin: 0, fontFeatureSettings: '"kern"', fontKerning: 'normal' }}>Your chosen Transport Method</p>
                            <div className="schedule-step-summary-content">
                                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                    I will drive my car to the garage
                                </Typography>
                            </div>
                            <a className="SimpleLink SimpleLink_component__ms_FU schedule-step-summary-cta SimpleLink_link-2__RXbSC" href="#" style={{
                                textDecoration: 'underline',
                                fontWeight: 600,
                                WebkitTextDecorationColor: '#5739d8',
                                textDecorationColor: '#5739d8',
                                color: '#5739d8'
                            }}>Edit Method</a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

const GarageCard = () => {
    return (
        <div style={{ width: '60%',    marginLeft: "230px", paddingBottom: '40px', boxSizing: 'border-box' }}>            <Card>
                <CardContent>
                    <div className="ScheduleStepSummary ScheduleStepSummary_component__00b31" role="button" tabIndex="0" aria-label="Address Step completed" style={{ outline: 'none', display: 'flex', cursor: 'pointer' }}>
                        <span className="Image sc-61fd45f8-0 hlBTau schedule-step-summary-img" style={{ display: 'inline-block', width: '55px', height: '62px' }}>
                            <span style={{
                                boxSizing: 'border-box',
                                display: 'inline-block',
                                overflow: 'hidden',
                                width: '55px',
                                height: '62px',
                                background: 'none',
                                opacity: 1,
                                border: '0px',
                                margin: '0px',
                                padding: '0px',
                                position: 'relative'
                            }}>
                                <img alt="transport checked" src="https://res.cloudinary.com/fxtr/image/upload/f_svg,c_limit,w_128,q_100/landing/icons/rectangle_check_purple_aozewp.svg" decoding="async" data-nimg="fixed"
                                    style={{
                                        position: 'absolute',
                                        inset: '0px',
                                        boxSizing: 'border-box',
                                        padding: '0px',
                                        border: 'none',
                                        margin: 'auto',
                                        display: 'block',
                                        width: '0px',
                                        height: '0px',
                                        minWidth: '100%',
                                        maxWidth: '100%',
                                        minHeight: '100%',
                                        maxHeight: '100%'
                                    }}
                                />
                            </span>
                        </span>
                        <div className="schedule-step-summary-wrapper" style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                            <p className="schedule-step-summary-title" style={{ margin: 0, fontFeatureSettings: '"kern"', fontKerning: 'normal' }}>Your garage</p>
                            <div className="schedule-step-summary-content">
                                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                    AM Autos London, London UB6 7PP
                                </Typography>
                            </div>
                            <a className="SimpleLink SimpleLink_component__ms_FU schedule-step-summary-cta SimpleLink_link-2__RXbSC" href="#" style={{
                                textDecoration: 'underline',
                                fontWeight: 600,
                                WebkitTextDecorationColor: '#5739d8',
                                textDecorationColor: '#5739d8',
                                color: '#5739d8'
                            }}>Edit garage</a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};


const DropOffTimeCard = () => {
    return (
        <div style={{ width: '60%',    marginLeft: "230px", paddingBottom: '40px', boxSizing: 'border-box' }}>            <Card>
                <CardContent>
                    <div className="ScheduleStepSummary ScheduleStepSummary_component__00b31" role="button" tabIndex="0" aria-label="Address Step completed" style={{ outline: 'none', display: 'flex', cursor: 'pointer' }}>
                        <span className="Image sc-61fd45f8-0 hlBTau schedule-step-summary-img" style={{ display: 'inline-block', width: '55px', height: '62px' }}>
                            <span style={{
                                boxSizing: 'border-box',
                                display: 'inline-block',
                                overflow: 'hidden',
                                width: '55px',
                                height: '62px',
                                background: 'none',
                                opacity: 1,
                                border: '0px',
                                margin: '0px',
                                padding: '0px',
                                position: 'relative'
                            }}>
                                <img alt="transport checked" src="https://res.cloudinary.com/fxtr/image/upload/f_svg,c_limit,w_128,q_100/landing/icons/rectangle_check_purple_aozewp.svg" decoding="async" data-nimg="fixed"
                                    style={{
                                        position: 'absolute',
                                        inset: '0px',
                                        boxSizing: 'border-box',
                                        padding: '0px',
                                        border: 'none',
                                        margin: 'auto',
                                        display: 'block',
                                        width: '0px',
                                        height: '0px',
                                        minWidth: '100%',
                                        maxWidth: '100%',
                                        minHeight: '100%',
                                        maxHeight: '100%'
                                    }}
                                />
                            </span>
                        </span>
                        <div className="schedule-step-summary-wrapper" style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                            <p className="schedule-step-summary-title" style={{ margin: 0, fontFeatureSettings: '"kern"', fontKerning: 'normal' }}>Drop-off time</p>
                            <div className="schedule-step-summary-content">
                                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                    Friday 5th April, 9:00am -  10:00am
                                </Typography>
                            </div>
                            <a className="SimpleLink SimpleLink_component__ms_FU schedule-step-summary-cta SimpleLink_link-2__RXbSC" href="#" style={{
                                textDecoration: 'underline',
                                fontWeight: 600,
                                WebkitTextDecorationColor: '#5739d8',
                                textDecorationColor: '#5739d8',
                                color: '#5739d8'
                            }}>Edit time</a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

const EstimatedPickupCard = () => {
    return (
        <div style={{ width: '60%',    marginLeft: "230px", paddingBottom: '40px', boxSizing: 'border-box' }}>            <Card>
                <CardContent>
                    <div className="ScheduleStepSummary ScheduleStepSummary_component__00b31" role="button" tabIndex="0" aria-label="Address Step completed" style={{ outline: 'none', display: 'flex', cursor: 'pointer' }}>
                        <span className="Image sc-61fd45f8-0 hlBTau schedule-step-summary-img" style={{ display: 'inline-block', width: '55px', height: '62px' }}>
                            <span style={{
                                boxSizing: 'border-box',
                                display: 'inline-block',
                                overflow: 'hidden',
                                width: '55px',
                                height: '62px',
                                background: 'none',
                                opacity: 1,
                                border: '0px',
                                margin: '0px',
                                padding: '0px',
                                position: 'relative'
                            }}>
                                <img alt="transport checked" src="https://res.cloudinary.com/fxtr/image/upload/f_svg,c_limit,w_128,q_100/landing/icons/rectangle_check_purple_aozewp.svg" decoding="async" data-nimg="fixed"
                                    style={{
                                        position: 'absolute',
                                        inset: '0px',
                                        boxSizing: 'border-box',
                                        padding: '0px',
                                        border: 'none',
                                        margin: 'auto',
                                        display: 'block',
                                        width: '0px',
                                        height: '0px',
                                        minWidth: '100%',
                                        maxWidth: '100%',
                                        minHeight: '100%',
                                        maxHeight: '100%'
                                    }}
                                />
                            </span>
                        </span>
                        <div className="schedule-step-summary-wrapper" style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                            <p className="schedule-step-summary-title" style={{ margin: 0, fontFeatureSettings: '"kern"', fontKerning: 'normal' }}>Estimated pickup</p>
                            <div className="schedule-step-summary-content">
                                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                                    Friday 5th April, in the afternoon
                                </Typography>
                                <Typography>
                                    We’ll keep you updated by email/sms on progress throughout the day, and notify you when your car is ready to be picked up.
                                </Typography>
                            </div>

                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

const CheckoutSchdule = () => {
    return (
        <div>
            <Header />
            <div className="step-wrapper" style={{ top: "80px", position: "relative" }}>
                <div className="container">
                    <div className="stepper">
                        <ul className="row">
                            <li className="col-3 active">
                                <span data-text="Add Service"></span>
                            </li>
                            <li className="col-3 active">
                                <span data-text="Collection & Delivery"></span>
                            </li>
                            <li className="col-3">
                                <span data-text="Confirm details"></span>
                            </li>
                            <li className="col-3">
                                <span data-text="Receipt"></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="checkout">
                <div className='inwrapper'>
                    <AddressCard />
                    <TransportMethodCard />
                    <GarageCard />
                    <DropOffTimeCard />
                    <EstimatedPickupCard />
                    <div > 
                    <Link to="/checkout-schedule"><div className="btn btn- icon icon-chevron-left"  style={{ width: "150px",  position: "relative"}}>Back</div></Link>
                    <Link to="/checkout-receipt"><div className="btn btn-dark icon icon-chevron-right"  style={{ width: "150px",  position: "relative"}}>Confirm Booking</div></Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default CheckoutSchdule;
