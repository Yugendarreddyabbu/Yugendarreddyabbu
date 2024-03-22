import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
        <section className="blog blog-widget blog-animated">
        <header>
                <div class="container">
                    <h2 class="h2 title">Blogs</h2>
                    <div class="text">
                        <p>
                            Explore and unfold thoughts <a href="blog-grid.html" class="btn btn-main">View all</a>
                        </p>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <article>
                           <Link to="/" className="blog-link">
                                <div className="image" style={{ backgroundImage: "url(assets/images/blog_1.jpg)" }}>
                                    <img src="assets/images/product-1.jpg" alt="" />
                                </div>
                                <div className="entry entry-table">
                                    <div className="date-wrapper">
                                        <div className="date">
                                            <span>Mar</span>
                                            <strong>08</strong>
                                            <span>2024</span>
                                        </div>
                                    </div>
                                    <div className="title">
                                        <h2 className="h5">Future of Automotive Tech: What’s Next for Car Servicing?</h2>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    </div>
                    <div className="col-md-6">
                        <article>
                        <Link to="/" className="blog-link">
                                <div className="image" style={{ backgroundImage: "url(assets/images/blog_2.jpg)" }}>
                                    <img src="assets/images/product-1.jpg" alt="" />
                                </div>
                                <div className="entry entry-table">
                                    <div className="date-wrapper">
                                        <div className="date">
                                            <span>Jan</span>
                                            <strong>01</strong>
                                            <span>2024</span>
                                        </div>
                                    </div>
                                    <div className="title">
                                        <h2 className="h5">How to Recycle Batteries and Why It Matters</h2>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    </div>
                    <div className="col-md-6">
                        <article>
                        <Link to="/" className="blog-link">
                                <div className="image" style={{ backgroundImage: "url(assets/images/blog_3.jpg)" }}>
                                    <img src="assets/images/product-1.jpg" alt="" />
                                </div>
                                <div className="entry entry-table">
                                    <div className="date-wrapper">
                                        <div className="date">
                                            <span>oct</span>
                                            <strong>10</strong>
                                            <span>2023</span>
                                        </div>
                                    </div>
                                    <div className="title">
                                        <h2 className="h5">Advanced Cross-Traffic Alert Systems for Safer Driving</h2>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    </div>
                    <div className="col-md-6">
                        <article>
                        <Link to="/" className="blog-link">
                                <div className="image" style={{ backgroundImage: "url(assets/images/blog_4.jpg)" }}>
                                    <img src="assets/images/product-1.jpg" alt="" />
                                </div>
                                <div className="entry entry-table">
                                    <div className="date-wrapper">
                                        <div className="date">
                                            <span>Sep</span>
                                            <strong>08</strong>
                                            <span>2019</span>
                                        </div>
                                    </div>
                                    <div className="title">
                                        <h2 className="h5">Unlocking Performance: The Ultimate Guide to Car Tuning and Upgrades</h2>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Blogs;
