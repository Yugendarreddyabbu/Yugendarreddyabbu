import React from 'react';
import { Link } from 'react-router-dom';

const SpareParts = () => {
    return (
        <div style={{marginTop:"70px"}}>
        <section className="products pt-0">
             <header>
                <div class="container">
                    <h2 class=" h2 title">Spare Parts</h2>
                    <div class="text">
                        <p>Quality is our priority</p>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-12">
                                <article>
                                    <div className="info">
                                        {/* <span className="add-favorite">
                                            <Link to="/" data-title="Add to favorites" data-title-added="Added to favorites list">
                                                <i className="icon icon-heart"></i>
                                            </Link>
                                        </span> */}
                                        <span>
                                            <Link to="/" className="mfp-open" data-title="Quick view">
                                                <i className="icon icon-eye"></i>
                                            </Link>
                                        </span>
                                    </div>
                                    {/* <div className="btn btn-add">
                                        <i className="icon icon-cart"></i>
                                    </div> */}
                                    <div className="figure-list">
                                        <span className="badge badge-warning">100% Genuine</span>
                                        <div className="image">
                                            <a href="product.html">
                                                <img src="assets/images/spareparts_1.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="text">
                                            <h2 className="title h4">
                                                <a href="product.html">Engine Oil</a>
                                            </h2>
                                           
                                            <span className="description clearfix">
                                            Quality oil guarantees proper lubrication, thus reducing friction and preventing the excessive wear of the engine parts.
                                             It also protects against corrosion, stops the engine from being clogged up with dirt, and helps to seal parts and cool the engine.
                                            </span>
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
                                            <Link to="/" href="#productid1" className="mfp-open" data-title="Quick view">
                                                <i className="icon icon-eye"></i>
                                            </Link>
                                        </span>
                                    </div>
                                    {/* <div className="btn btn-add">
                                        <i className="icon icon-cart"></i>
                                    </div> */}
                                    <div className="figure-list">
                                        <span className="badge badge-warning">100% Genuine</span>
                                        <div className="image">
                                            <a href="product.html">
                                                <img src="assets/images/spareparts_2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="text">
                                            <h2 className="title h4">
                                                <a href="product.html">Engine Belt</a>
                                            </h2>
                                           
                                            <span className="description clearfix">
                                            A genuine engine belt is a rubber belt that drives a car's engine's mechanisms, 
                                            such as the water pump or fans. The belt is made in India and comes in a box.
                                            </span>
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
                                            <Link to="/" href="#productid1" className="mfp-open" data-title="Quick view">
                                                <i className="icon icon-eye"></i>
                                            </Link>
                                        </span>
                                    </div>
                                    {/* <div className="btn btn-add">
                                        <i className="icon icon-cart"></i>
                                    </div> */}
                                    <div className="figure-list">
                                        <span className="badge badge-warning">100% Genuine</span>
                                        <div className="image">
                                            <a href="product.html">
                                                <img src="assets/images/spareparts_3.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="text">
                                            <h2 className="title h4">
                                                <a href="product.html">Brake Pads</a>
                                            </h2>
                                           
                                            <span className="description clearfix">
                                            Through contact with the brake disc rotor, brake pads convert the vehicle's kinetic energy into thermal energy to slow or stop the vehicle.
                                             They have been extensively tested for temperature resistance, performance durability, noise performance and longevity to provide balanced, 
                                             smooth and safe braking.
                                            </span>
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
    );
};

export default SpareParts;
