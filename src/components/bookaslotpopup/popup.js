import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import "./popup.css";
import { Link } from 'react-router-dom';


const PopUp = () => {
    const [postcode, setPostcode] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    const bookSlot = () => {
        handleClose();
    };

    if (!isOpen) {
        return null; 
    }

    return (
        <div className="popup-container">
            <div className='popup-overlay'onClick={handleClose}></div>
            <div className='popup-content'>
                <button className="close-button" onClick={handleClose}>X</button>
                <div className="logo-container">
                <h3>Welcome to </h3>
                    <img src="assets/images/carservice-logo1.png" className="image" alt="product image" />
                   
                </div>

                <h4 className='popup-heading'>Are you looking for a Car Service?</h4>
                <div>
                    <h6>Get the best price in your area for your vehicle.</h6>
                </div>
                <div className="form-group">
                    <TextField
                        id="postcode"
                        label="Postcode"
                        variant="outlined"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <TextField
                        id="registrationNumber"
                        label="Registration Number"
                        variant="outlined"
                        value={registrationNumber}
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                        required 
                    />
                </div>
                <div className='popup-buttons'>
                  <Link to="checkout-service"> <Button variant="contained" 
                    style={{    padding: "10px 20px",
                                border:" none",
                                borderRadius: "4px",
                                cursor:"pointer",
                                backgroundColor:" #3d4976",
                            }} 
                    onClick={bookSlot}>
                        Get a Quote
                    </Button></Link>
                </div>
        </div>
        </div>
    );
};

export default PopUp;
