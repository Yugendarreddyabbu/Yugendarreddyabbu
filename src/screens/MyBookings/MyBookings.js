import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

const MyBookings = () => {
    return (
        <div>
            <Header />
            <div style={{ marginTop: "70px" }}>
                <section className="products pt-0">
                    <header>
                        <div class="container">
                            <h2 class=" h2 title">MY BOOKINGS</h2>
                        </div>
                    </header>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-12">
                                        <article>
                                            <div className="info">
                                                <span className="call">
                                                    <Link to="/" data-title="Request a call" data-title-added="Request a call">
                                                         <i className="icon icon-phone"></i>
                                                    </Link>
                                                </span>
                                                <span>
                                                    <Link to="/" data-title="Book again" data-title-added="Book again">
                                                         <i className="icon icon-redo"></i>
                                                    </Link>
                                                </span>
                                                <span>
                                                    <Link to="/" className="mfp-open" data-title="Quick view">
                                                        <i className="icon icon-eye"></i>
                                                    </Link>
                                                </span>
                                            </div>
                                            <div className="figure-list" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                                                <span className="badge badge-warning" style={{ marginRight: "10px" }}>In Progress</span>
                                                <div className="image">
                                                    <a href="product.html">
                                                        <img src="assets/images/spareparts_1.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="text" style={{ display: "flex", flexDirection: "column", flexGrow: "1", marginLeft: "10px" }}>
                                                    <h2 className="title h2">
                                                        <a href="product.html">General Service</a>
                                                    </h2>
                                                    <div className="service-details mb-3">
                                                        <div className="row mb-2">
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">Garage:</span>
                                                                <span className="value">XYZ Garage</span>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">In-date:</span>
                                                                <span className="value">2024-03-25</span>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">Delivered Date:</span>
                                                                <span className="value"></span>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">Equipments Changed:</span>
                                                                <span className="value">Not updated</span>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">Car Number:</span>
                                                                <span className="value">TS07GP3226</span>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">Model:</span>
                                                                <span className="value">MAHINDRA THAR</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="price">
                                                        <span className="label">Total Price:</span>
                                                        <span class="final h5">£ 390,00</span>
                                                        <span class="discount">£ 490,00</span>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                           
                                        </article>
                                    </div>

                                    <div className="col-12">
                                        <article>
                                            <div className="info">
                                                {/* <span className="add-favorite">
                                            <Link to="/" data-title="Add to favorites" data-title-added="Added to favorites list">
                                                <i className="icon icon-heart"></i>
                                            </Link>
                                        </span> */}
                                                <span>
                                                    <Link to="/" data-title="Book again" data-title-added="Book again">
                                                         <i className="icon icon-redo"></i>
                                                    </Link>
                                                </span>
                                                <span>
                                                    <Link to="/" href="#productid1" className="mfp-open" data-title="Quick view">
                                                        <i className="icon icon-eye"></i>
                                                    </Link>
                                                </span>
                                            </div>
                                            {/* <div className="btn btn-add">
                                        <i className="icon icon-cart"></i>
                                    </div> */}
                                            <div className="figure-list">
                                                <span className="badge badge-success">Completed</span>
                                                <div className="image">
                                                    <a href="product.html">
                                                        <img src="assets/images/spareparts_2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="text">
                                                    <h2 className="title h4">
                                                        <a href="product.html">Engine Belt change</a>
                                                    </h2>
                                                    <div className="service-details mb-3">
                                                        <div className="row mb-2">
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">Garage:</span>
                                                                <span className="value">RIO CARZ GARAGE</span>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">In-date:</span>
                                                                <span className="value">2023-03-25</span>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">Delivered Date:</span>
                                                                <span className="value">2023-03-30</span>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">Equipments Changed:</span>
                                                                <span className="value">Engine Belt</span>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">Car Number:</span>
                                                                <span className="value">YE72ZRG</span>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">Model:</span>
                                                                <span className="value">Bmw I7 ev</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="price">
                                                        <span className="label">Total Price:</span>
                                                        <span class="final h5">£ 90,00</span>
                                                        <span class="discount">£ 190,00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-12">
                                        <article>
                                            <div className="info">
                                                {/* <span className="add-favorite">
                                            <Link to="/" data-title="Add to favorites" data-title-added="Added to favorites list">
                                                <i className="icon icon-heart"></i>
                                            </Link>
                                        </span> */}
                                                <span>
                                                    <Link to="/" data-title="Book again" data-title-added="Book again">
                                                         <i className="icon icon-redo"></i>
                                                    </Link>
                                                </span>
                                                <span>
                                                    <Link to="/" href="#productid1" className="mfp-open" data-title="Quick view">
                                                        <i className="icon icon-eye"></i>
                                                    </Link>
                                                </span>
                                            </div>
                                            {/* <div className="btn btn-add">
                                        <i className="icon icon-cart"></i>
                                    </div> */}
                                            <div className="figure-list">
                                                <span className="badge badge-danger">Cancelled</span>
                                                <div className="image">
                                                    <a href="product.html">
                                                        <img src="assets/images/spareparts_3.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="text">
                                                    <h2 className="title h4">
                                                        <a href="product.html">Brake Pads Replacement</a>
                                                    </h2>
                                                    <div className="service-details mb-3">
                                                        <div className="row mb-2">
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">Garage:</span>
                                                                <span className="value">MAX Garage</span>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">In-date:</span>
                                                                <span className="value">2024-03-15</span>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">Delivered Date:</span>
                                                                <span className="value">NA</span>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">Equipments Changed:</span>
                                                                <span className="value">NA</span>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">Car Number:</span>
                                                                <span className="value">BJ68BZS</span>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <span className="label font-weight-bold">Model:</span>
                                                                <span className="value">Land rover Discovery</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="price">
                                                        <span className="label">Total Price:</span>
                                                        <span class="final h5">NA</span>
                                                        <span class="discount"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    {/* Add more product articles similarly */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default MyBookings;
