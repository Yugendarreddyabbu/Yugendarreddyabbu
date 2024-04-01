import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer/footer';
import { Modal, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Header from '../../components/header/header';
import { Link, useNavigate } from 'react-router-dom';

const MyCars = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [company, setCompany] = useState('');
    const [model, setModel] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = (event) => {
        // Handle form submission logic here
        event.preventDefault();
        // Example: Logging the form data
        console.log(event.target);
        handleClose(); // Close modal after form submission
    };

    const handleNavigate = () => {
        navigate("/mybookings");
    };

    const handleSeeQuotes = () => {
        navigate("/checkout-service");
    };

    return (
        <div>
            <Header />
            <div style={{ backgroundColor: 'rgb(57 58 52)', padding: '20px' }}>
                <h1>My Cars</h1>

            <Link to="/mybookings">
                <div 
                    style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    padding: '20px',
                    maxWidth: '400px',
                    margin: 'auto'
                        }}>
                    <img src="https://i.pinimg.com/originals/27/2f/cd/272fcd3d1ac73529e35c8d9d420005fc.png" style={{ width: "250px" }} />

                    <h2>Land Rover</h2>
                    <p>Unknown mileage</p>

                        <Link to="/checkout-service">
                    <div className="col-md-12">
                        <div className="btn btn-outline-dark">
                            See my quotes
                        </div>
                    </div>
                    </Link>
                </div>
                </Link>
                <Link to="/mybookings">
                <div
                
                 style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    padding: '20px',
                    maxWidth: '400px',
                    margin: 'auto',
                    marginTop:"20px"
                }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/800px-BMW_logo_%28gray%29.svg.png" style={{ width: "100px" }} />

                    <h2>BMW I7 Ev</h2>
                    <p>Unknown mileage</p>

                    <Link to="/checkout-service">
                    <div className="col-md-12">
                        <div className="btn btn-outline-dark">
                            See my quotes
                        </div>
                    </div>
                    </Link>
                </div>
                </Link>

                <Button  className="btn btn-outline-dark" style={{color:"antiquewhite", marginTop: '20px', padding: '10px', borderRadius: '5px' }} onClick={handleOpen}>Add Car</Button>
                <Modal open={open} onClose={handleClose}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
                        <h2>Add Car</h2>
                        <form onSubmit={handleSubmit}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Car Company</InputLabel>
                                <Select
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    variant="outlined"
                                >
                                    <MenuItem value="Mahindra">Mahindra</MenuItem>
                                    <MenuItem value="BMW">BMW</MenuItem>
                                    <MenuItem value="Audi">Audi</MenuItem>
                                    <MenuItem value="MS">Maruthi S</MenuItem>
                                    <MenuItem value="Honda">Honda</MenuItem>
                                    
                                </Select>
                            </FormControl>
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Model</InputLabel>
                                <Select
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                    variant="outlined"
                                >
                                    {company === "Mahindra" ? (
                                        <>
                                            <MenuItem value="Thar">Thar</MenuItem>
                                            <MenuItem value="Scorpio">Scorpio</MenuItem>
                                            <MenuItem value="XUV300">XUV300</MenuItem>
                                            <MenuItem value="XUV400">XUV400</MenuItem>
                                            <MenuItem value="XUV500">XUV500</MenuItem>
                                            <MenuItem value="XUV700">XUV700</MenuItem>
                                        </>
                                    ) : company === "BMW" ? (
                                        <>
                                            <MenuItem value="I7 Ev">I7 Ev</MenuItem>
                                            <MenuItem value="X1">X1</MenuItem>
                                            <MenuItem value="X2">X2</MenuItem>
                                            <MenuItem value="X3">X3</MenuItem>
                                        </>
                                        
                                    ) :  company === "Honda" ? (
                                        <>
                                            <MenuItem value="Amaze">Amaze</MenuItem>
                                            <MenuItem value="City">City</MenuItem>
                                            <MenuItem value="Civic">Civic</MenuItem>
                                          
                                        </>
                                        
                                    ) :
                                    
                                    null}
                                </Select>
                            </FormControl>
                            <TextField label="V5C" variant="outlined" fullWidth margin="normal" />
                            <Button variant="contained" color="primary" type="submit" style={{ marginTop: '10px' }}>
                                Submit
                            </Button>
                        </form>
                    </div>
                </Modal>

            </div>
            <Footer />
        </div>
    );
}

export default MyCars;