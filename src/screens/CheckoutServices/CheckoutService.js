import React, { useState } from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Card, CardContent, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BasketContainer from '../../components/basketsummary/basketsummary';
import RelatedSection from '../../components/relatedsection/relatedsection';

const CheckoutServices = () => {
    const [selectedService, setSelectedService] = useState('Interim Service');
    const [selectedServicePrice, setSelectedServicePrice] = useState('£169.95');
    const services = [
        {
            name: 'Interim Service',
            description: 'An interim service is usually recommended every 6 months for high mileage cars.',
            price: '£169.95',
            details: [
                'Oil change for your BMW I7 Ev: Not Applicable litres',
                '40+ maintenance checks for peace of mind',
                'Price match promise plus all the Fixter Guarantees included'
            ]
        },
        {
            name: 'Full Service',
            description: 'A full service is usually recommended every 12 months for high mileage cars.',
            price: '£239.95',
            details: [
                'Oil change for your BMW I7 Ev: Not Applicable litres',
                '71+ maintenance checks for peace of mind',
                'All parts and labour are protected with our Fixter 12-month warranty',
                'Price match promise plus all the Fixter Guarantees included'
            ]
        },
        {
            name: 'Major Service',
            description: 'A major service is usually recommended every 24 months.',
            price: '£379.95',
            details: [
                'Oil change for your BMW I7 Ev: Not Applicable litres',
                '94+ maintenance checks for peace of mind',
                'All parts and labour are protected with our Fixter 12-month warranty',
                'Price match promise plus all the Fixter Guarantees included'
            ]
        },
    ];

    const handleChange = (event) => {
        const selectedServiceName = event.target.value;
        setSelectedService(selectedServiceName);
        const price = services.find(service => service.name === selectedServiceName).price;
        setSelectedServicePrice(price);
    };

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
                            <li className="col-3">
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
            <section className="checkout" style={{ display: 'flex', justifyContent: "center" }}>
                <div>

                    <div className='inwrapper'>
                        <Card style={{ width: "580px", borderRadius: "40px" }}>
                            <CardContent>
                                <RadioGroup value={selectedService} onChange={handleChange}
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        gap: 0,
                                        alignItems: "center",
                                        borderBottom: "1px solid #d6d5e3",
                                        borderRadius: "12px",
                                        padding: "8px",
                                        minHeight: "80px"
                                    }}
                                >
                                    {services.map((service, index) => (
                                        <FormControlLabel
                                            style={{
                                                color: "#2c3750",
                                                backgroundColor: "#f4f0ff",
                                                height: "100%",
                                                borderRadius: "8px"
                                            }}
                                            key={index}
                                            value={service.name}
                                            control={<Radio />}
                                            label={service.name}
                                        />
                                    ))}
                                </RadioGroup>
                                {selectedService && (
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        rowGap: "20px"
                                    }}>

                                        <Typography style={{
                                            backgroundColor: "#e5bae5",
                                            borderRadius: "10px",
                                            height: "fit-content"
                                        }}>{services.find(service => service.name === selectedService).description}</Typography>
                                        <ul style={{ listStyleType: 'none' }}>
                                            {services.find(service => service.name === selectedService).details.map((detail, index) => (
                                                <li style={{ display: "flex" }} key={index}>
                                                    <CheckCircleOutlineIcon style={{ marginRight: '5px', color: 'green' }} />
                                                    <p>
                                                        <a href={`#modal-${detail}`} className="sc-41eeff59-2 juexqR">{detail}</a>
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                        <div class="price">
                                            <span class="final h5">{services.find(service => service.name === selectedService).price}</span>
                                        </div>
                                        <div className="btn btn-light icon icon-cart" style={{ marginLeft: "400px" }}>Add to Basket</div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <BasketContainer selectedServicePrice={selectedServicePrice} style={{ marginLeft: '20px' }} />
            </section>
            <RelatedSection />
            <Footer />
        </div>
    );
};

export default CheckoutServices;
