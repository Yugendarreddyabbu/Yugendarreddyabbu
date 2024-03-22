import React from "react";
import { TextField, Button } from '@mui/material';

const BookSlot = () => {
    return (
        <section className="banner">
            <div className="container-fluid">
                <div className="banner-image" style={{backgroundImage:"url(assets/images/slot_book.jpg)", height:"6 50px"}}>
                    {/* <!--Header--> */}
                    <header>
                        <div className="container">
                            <h2 className="h2 title">Car Servicing & MOT</h2>
                            <div className="text">
                                <p>With FREE Collection & Delivery</p>
                            </div>
                        </div>
                    </header>

                    {/* <!--Content--> */}
                    <div className="container">
                        <div className=" align-items-center">
                        <h4 className='popup-heading'>Are you looking for a Car Service?</h4>
                <div>
                    <h6>Get the best price in your area for your vehicle.</h6>
                </div>
                <div className="form-group">
                    <TextField
                        id="postcode"
                        label="Postcode"
                        // variant="outlined"
                        // value={postcode}
                        // onChange={(e) => setPostcode(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        id="registrationNumber"
                        label="Registration Number"
                        // variant="outlined"
                        // value={registrationNumber}
                        // onChange={(e) => setRegistrationNumber(e.target.value)}
                    />
                </div>
                <div className='popup-buttons'>
                    <Button variant="contained" 
                    style={{    padding: "10px 20px",
                                border:" none",
                                borderRadius: "4px",
                                cursor:"pointer",
                                backgroundColor:" #3d4976",
                            }} 
                    // onClick={bookSlot}
                    >
                        Get a Quote
                    </Button>
                </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/container-fluid--> */}
        </section>
    );
};

export default BookSlot;
