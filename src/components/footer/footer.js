import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
<footer>

<div class="container-fluid">

    <div class="footer-wrap">

        <div class="container">

            {/* <!--footer showroom--> */}
            <div class="footer-showroom">
                <div class="text-center">
                    <a href="/"><img src="assets/images/carservice-logo1.png" alt="" width="130" height="55" /></a>
                </div>
            </div>

            {/* <!--footer links--> */}
            <div class="footer-links">
                <div class="row">
                    <div class="col-md-2">
                        <h5>ABOUT US</h5>
                        <ul>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><Link to="/termsandconditions">Terms and Conditions</Link></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Our Partners</a></li>
                            <li><a href="#">Offers</a></li>
                            <li><a href="#">Reviews</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <h5>OUR SERVICES</h5>
                        <ul>
                            <li><a href="#">Scheduled Services</a></li>
                            <li><a href="#">AC Services</a></li>
                            <li><a href="#">Cleaning & Detalling</a></li>
                            <li><a href="#">Lights & Fitments</a></li>
                            <li><a href="#">Denting Painting</a></li>
                            <li><a href="#">Batteries</a></li>
                            <li><a href="#">MOTs</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <h5>Service info</h5>
                        <ul>
                            <li><a href="#">Service Status </a></li>
                            <li><a href="#">Payments</a></li>
                            <li><a href="#">My Vechiles</a></li>
                            <li><a href="#">Invoice</a></li>
                            <li><a href="#">Service history</a></li>
                        </ul>
                    </div>
                    <div class="offset-md-3 col-md-3">
                        <h5>Sign up for our newsletter</h5>
                        <p><i>Add your email address to sign up for our monthly emails and to receive promotional offers.</i></p>
                        <div class="form-group form-newsletter">
                            <input class="form-control" type="text" name="email" value="" placeholder="Email address" />
                            <input type="submit" class="btn btn-secondary btn-sm" value="Subscribe" />
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--footer social--> */}

            <div class="footer-social">
                <div class="row">
                    <div class="col-sm-6">
                        <a href="#" target="_blank"><i class="fa fa-download"></i> Download Our Mobile APP</a> &nbsp; | &nbsp; <a href="#">Sitemap</a> &nbsp; | &nbsp; <a href="#">Privacy policy</a>
                    </div>
                    <div class="col-sm-6 links">
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

</footer>
);
};



export default Footer;
