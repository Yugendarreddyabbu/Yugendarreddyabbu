import React from "react";

const GarageList = () => {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStars = Math.ceil(rating - fullStars);
        const emptyStars = 5 - fullStars - halfStars;
        
        const stars = [];
        
        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={i} className="fa fa-star filled"></i>);
        }
        
        if (halfStars === 1) {
            stars.push(<i key={stars.length} className="fa fa-star-half-alt filled"></i>);
        }
        
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<i key={stars.length + i} className="fa fa-star"></i>);
        }
        
        return stars;
    };


 return(
    <section class="blog blog-block">

{/* <!--Header--> */}

<header>
    <div class="container">
        <h2 class="title">Choose the Workshop Near You</h2>
        <div class="text">
            <p>Top picks from your location. <a href="category.html" class="btn btn-main">View more</a></p>
        </div>
    </div>
</header>

{/* <!--Content--> */}

<div class="container">

    <div class="scroll-wrapper">

        <div class="row scroll text-center">

            {/* <!--Item--> */}

            <div class="col-md-4">
                <article data-3d>
                    <a href="products-grid.html">
                        <div class="image">
                            <img src="assets/images/garage_1.jpg" alt="" />
                        </div>
                        <div class="entry entry-block">
                                       
                                        <div class="title">
                                            <h2 class="h4">Garage ABC</h2>
                                        </div>
                                        <div class="title">
                                        <div className="rating">{renderStars(5)}</div>
                                        </div>
                                        <div class="description d-none d-sm-block">
                                            <p>
                                                Ready to pick your car.
                                            </p>
                                        </div>
                        </div>
                        <div class="show-more">
                            <span class="btn btn-clean">Book a Slot</span>
                        </div>
                    </a>
                </article>
            </div>

            {/* <!--Item--> */}

            <div class="col-md-4">
                <article data-3d>
                    <a href="products-grid.html">
                        <div class="image">
                            <img src="assets/images/garage_2.jpg" alt="" />
                        </div>
                        <div class="entry entry-block">
                        <div class="title">
                                            <h2 class="h4">Garage DEF</h2>
                                        </div>
                                        <div class="title">
                                        <div className="rating">{renderStars(4)}</div>
                                        </div>
                                        <div class="description d-none d-sm-block">
                                            <p>
                                            Ready to pick your car.
                                            </p>
                                        </div>
                                        </div>
                        <div class="show-more">
                            <span class="btn btn-clean">Book a Slot</span>
                        </div>
                    </a>
                </article>
            </div>

            {/* <!--Item--> */}

            <div class="col-md-4">
                <article data-3d>
                    <a href="products-grid.html">
                        <div class="image">
                            <img src="assets/images/garage_3.jpg" alt="" />
                        </div>
                        <div class="entry entry-block">
                        <div class="title">
                                            <h2 class="h4">Garage GHI</h2>
                                        </div>
                                        <div class="title">
                                        <div className="rating">{renderStars(3)}</div>
                                        </div>
                                        <div class="description d-none d-sm-block">
                                            <p>
                                            Book now pickup by evening.
                                            </p>
                                        </div>
                                       </div>
                        <div class="show-more">
                            <span class="btn btn-clean">Book a Slot</span>
                        </div>
                    </a>
                </article>
            </div>

        </div>
        {/* <!--/row--> */}
    </div>

</div>
{/* <!--/container--> */}

    </section>
    );

};

export  default GarageList