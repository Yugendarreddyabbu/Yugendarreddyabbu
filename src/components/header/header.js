import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav>

    <div class="container">

         <Link to="/" className="logo">
            <img src="assets/images/carservice-logo1.png" alt=""  width="130" height="55"/>
         </Link>

        {/* <!-- ==========  Top navigation ========== --> */}

        <div class="navigation navigation-top clearfix">
            <ul>
                {/* <!--add active class for current page--> */}
                <li className="left-side">
              <Link to="/" className="logo-icon">
                <img src="assets/images/carservice-logo1.png" alt="app logo" width="150" height="34" style={{ height: "45px" }}/>
              </Link>
             </li>          
             <li className="left-side"><Link to="/book-slot">Book a Slot</Link></li>
            <li className="left-side"><Link to="/call-us">Call us</Link></li>
            <li><Link to="#" className="open-login"><i className="icon icon-user"></i></Link></li>
            <li><Link to="#" className="open-search"><i className="icon icon-magnifier"></i></Link></li>
            <li><Link to="#" className="open-cart"><i className="icon icon-cart"></i> <span>4</span></Link></li>
            </ul>
        </div>

        {/* <!-- ==========  Main navigation ========== --> */}

        <div class="navigation navigation-main">
        <Link to="#" className="open-login"><i className="icon icon-user"></i></Link>
          <Link to="#" className="open-search"><i className="icon icon-magnifier"></i></Link>
          <Link to="#" className="open-cart"><i className="icon icon-cart"></i> <span>4</span></Link>
          <Link to="#" className="open-menu"><i className="icon icon-menu"></i></Link>


            <div class="floating-menu">
                {/* <!--mobile toggle menu trigger--> */}
                <div class="close-menu-wrapper">
                    <span class="close-menu"><i class="icon icon-cross"></i></span>
                </div>
                <ul>
                     <li>
                     <Link to="/">Home <span className="open-dropdown"><i></i></span></Link>
                     </li>
                    <li>
                    <Link to="/">Services <span class="open-dropdown"><i class="fa fa-angle-down"></i></span></Link>
                        <div class="navbar-dropdown">
                            <div class="navbar-box">
                                <div class="box-full">
                                    <div class="box clearfix">
                                        <div class="row">
                                        <div class="col-lg-3">
                                                <ul>
                                                <Link to="/"class="label">Oem Service. After Market</Link>
                                                  <li> <Link to="/">A</Link></li>
                                                  <li> <Link to="/">B</Link></li>
                                                  <li><Link to="/">C</Link></li>
                                                  <li><Link to="/">D</Link></li>
                                                  <li class="more"><Link to="/"><i class="icon icon-chevron-right"></i> More</Link></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-3">
                                                <ul>
                                                <Link to="/"class="label">Maintenance & Repair</Link>
                                                <li>  <Link to="/">Petrol</Link></li>
                                                <li>  <Link to="/">Diesel</Link></li>
                                                <li>  <Link to="/">EV</Link></li>
                                                <li>  <Link to="/">Hybrid</Link></li>
                                                    <li class="more"><Link to="/"><i class="icon icon-chevron-right"></i> More</Link></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-3">
                                                <ul>
                                                    <li class="label">Collision Repair & Painting</li>
                                                    <li> <Link to="/">A</Link></li>
                                                  <li> <Link to="/">B</Link></li>
                                                  <li><Link to="/">C</Link></li>
                                                  <li><Link to="/">D</Link></li>
                                                    <li class="more"><Link to="/"><i class="icon icon-chevron-right"></i> More</Link></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-3">
                                                <ul>
                                                    <li class="label">Car Wash & Detailing</li>
                                                    <li> <Link to="/">A</Link></li>
                                                  <li> <Link to="/">B</Link></li>
                                                  <li><Link to="/">C</Link></li>
                                                  <li><Link to="/">D</Link></li>
                                                    <li class="more"><Link to="/"><i class="icon icon-chevron-right"></i> More</Link></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-3">
                                                <ul>
                                                    <li class="label">Extended Wrranty</li>
                                                    <li> <Link to="/">A</Link></li>
                                                  <li> <Link to="/">B</Link></li>
                                                  <li><Link to="/">C</Link></li>
                                                  <li><Link to="/">D</Link></li>
                                                    <li class="more"><Link to="/"><i class="icon icon-chevron-right"></i> More</Link></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-3">
                                                <ul>
                                                    <li class="label">Insurance</li>
                                                    <li> <Link to="/">A</Link></li>
                                                  <li> <Link to="/">B</Link></li>
                                                  <li><Link to="/">C</Link></li>
                                                  <li><Link to="/">D</Link></li>
                                                    <li class="more"><Link to="/"><i class="icon icon-chevron-right"></i> More</Link></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-3">
                                                <ul>
                                                    <li class="label">Roadside Assistance</li>
                                                    <li> <Link to="/">A</Link></li>
                                                  <li> <Link to="/">B</Link></li>
                                                  <li><Link to="/">C</Link></li>
                                                  <li><Link to="/">D</Link></li>
                                                    <li class="more"><Link to="/"><i class="icon icon-chevron-right"></i> More</Link></li>
                                                    <li class="more"><a href="#"><i class="icon icon-chevron-right"></i> More</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-3">
                                                <ul>
                                                    <li class="label">MOTs</li>
                                                    <li> <Link to="/">A</Link></li>
                                                  <li> <Link to="/">B</Link></li>
                                                  <li><Link to="/">C</Link></li>
                                                  <li><Link to="/">D</Link></li>
                                                    <li class="more"><Link to="/"><i class="icon icon-chevron-right"></i> More</Link></li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                    <Link to="#">The Company <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></Link>
                <div className="navbar-dropdown navbar-dropdown-single">
                  <div className="navbar-box">
                    <div className="box-full">
                      <div className="box clearfix">
                        <ul>
                          <li className="label">Our Story</li>
                          <li><Link to="/">Leadership</Link></li>
                          <li><Link to="/">Partners</Link></li>
                          <li><Link to="/">Careers</Link></li>
                          <li><Link to="/">Contact Us</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                </li>
                <li>
                <Link to="#">For Business <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></Link>
                <div className="navbar-dropdown navbar-dropdown-single">
                  <div className="navbar-box">
                    <div className="box-full">
                      <div className="box clearfix">
                        <ul>
                          <li className="label"><Link to="#">Register Garage</Link></li>
                          {/* <li><Link to="/category"></Link></li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li>
                <Link to="#">Blog <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></Link>
                <div className="navbar-dropdown navbar-dropdown-single">
                  <div className="navbar-box">
                    <div className="box-full">
                      <div className="box clearfix">
                        <ul>
                          <li className="label">Blog categories</li>
                          <li><Link to="/">Blog - grid</Link></li>
                          <li><Link to="/">Blog - list</Link></li>
                          <li><Link to="/">Blog - fullpage</Link></li>
                          <li className="label">Blog articles</li>
                          <li><Link to="/">Article - single</Link></li>
                          <li><Link to="/">Article - right menu</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
                    {/* <li>
                        <a href="#">Checkout <span class="open-dropdown"><i class="fa fa-angle-down"></i></span></a>
                        <div class="navbar-dropdown navbar-dropdown-single">
                            <div class="navbar-box">
                                <div class="box-full">
                                    <div class="box clearfix">
                                        <ul>
                                            <li class="label">Checkout</li>
                                            <li><a href="checkout-1.html">Checkout - Cart items</a></li>
                                            <li><a href="checkout-2.html">Checkout - Delivery</a></li>
                                            <li><a href="checkout-3.html">Checkout - Payment</a></li>
                                            <li><a href="checkout-4.html">Checkout - Receipt</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="index.html">Boxmenu  <span class="open-dropdown"><i class="fa fa-angle-down"></i></span></a>
                        <div class="navbar-dropdown">
                            <div class="navbar-box">
                                <div class="box-lg">
                                    <div class="box clearfix">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <ul>
                                                    <li class="label">Living Room</li>
                                                    <li><a href="#">Sofas</a></li>
                                                    <li><a href="#">Loveseats</a></li>
                                                    <li><a href="#">Sectionals</a></li>
                                                    <li><a href="#">Chairs & Chaises</a></li>
                                                    <li class="more"><a href="#"><i class="icon icon-chevron-right"></i> More</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-4">
                                                <ul>
                                                    <li class="label">Packages</li>
                                                    <li><a href="#">Recliners</a></li>
                                                    <li><a href="#">Ottomans</a></li>
                                                    <li><a href="#">Cabinets</a></li>
                                                    <li><a href="#">Entertainment</a></li>
                                                    <li class="more"><a href="#"><i class="icon icon-chevron-right"></i> More</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-4">
                                                <ul>
                                                    <li class="label">Dining</li>
                                                    <li><a href="#">Dining Packages</a></li>
                                                    <li><a href="#">Dining Tables</a></li>
                                                    <li><a href="#">Dining Chairs</a></li>
                                                    <li><a href="#">Dining Benches</a></li>
                                                    <li class="more"><a href="#"><i class="icon icon-chevron-right"></i> More</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-4">
                                                <ul>
                                                    <li class="label">TV & Video</li>
                                                    <li><a href="#">TVs</a></li>
                                                    <li><a href="#">DVD & Blu-ray Players</a></li>
                                                    <li><a href="#">Home Audio & Theater</a></li>
                                                    <li><a href="#">TVs Accessories</a></li>
                                                    <li class="more"><a href="#"><i class="icon icon-chevron-right"></i> More</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-4">
                                                <ul>
                                                    <li class="label">Bedroom</li>
                                                    <li><a href="#">King Beds</a></li>
                                                    <li><a href="#">Queen Beds</a></li>
                                                    <li><a href="#">Storage Beds</a></li>
                                                    <li><a href="#">Daybeds & Futons</a></li>
                                                    <li class="more"><a href="#"><i class="icon icon-chevron-right"></i> More</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-4">
                                                <ul>
                                                    <li class="label">Storages</li>
                                                    <li><a href="#">Dressers & Chests</a></li>
                                                    <li><a href="#">Night Tables</a></li>
                                                    <li><a href="#">Mirrors</a></li>
                                                    <li><a href="#">Armoires</a></li>
                                                    <li class="more"><a href="#"><i class="icon icon-chevron-right"></i> More</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-sm">
                                    <div class="image">
                                        <img src="assets/images/m-1.jpg" alt="Alternate Text" />
                                    </div>
                                    <div class="box">
                                        <div class="h4">Premium quality</div>
                                        <div class="clearfix">
                                            <p>Homes that differ in terms of style, concept and architectural solutions have been furnished by Furniture Factory. These spaces tell of an international lifestyle that expresses modernity, research and a creative spirit.</p>
                                            <a class="btn btn-clean btn-big" href="products-grid.html">Shop now</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li> */}
                  <li>
            <div style={{ display: 'flex'}} >
              <Link to="/"   className="btn btn-primary active" style={{ display: 'flex', justifyContent: 'flex-end',position:"relative", left:" 90%" }}>
                <i className="fa fa-download"></i> Download Mobile App
              </Link>
            </div>
          </li>

                    {/* <li class="nav-settings">
                        <a href="javascript:void(0);"><span class="nav-settings-value">USD</span> <span class="open-dropdown"><i class="fa fa-angle-down"></i></span></a>
                        <div class="navbar-dropdown navbar-dropdown-single">
                            <div class="navbar-box">
                                <div class="box-full">
                                    <div class="box clearfix">
                                        <ul class="nav-settings-list">
                                            <li><a href="javascript:void(0);">USD</a></li>
                                            <li><a href="javascript:void(0);">EUR</a></li>
                                            <li><a href="javascript:void(0);">GBP</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-settings">
                        <a href="javascript:void(0);"><span class="nav-settings-value">ENG</span> <span class="open-dropdown"><i class="fa fa-angle-down"></i></span></a>
                        <div class="navbar-dropdown navbar-dropdown-single">
                            <div class="navbar-box">
                                <div class="box-full">
                                    <div class="box clearfix">
                                        <ul class="nav-settings-list">
                                            <li><a href="javascript:void(0);">ENG</a></li>
                                            <li><a href="javascript:void(0);">GER</a></li>
                                            <li><a href="javascript:void(0);">لعربية</a></li>
                                            <li><a href="javascript:void(0);">עִבְרִית</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li> */}
                </ul>
            </div>
        </div>

        {/* <!-- ==========  Search wrapper ========== --> */}

        <div class="search-wrapper">
            <input class="form-control" placeholder="Search..." />
            <button class="btn btn-outline-dark btn-sm">Search now</button>
        </div>

        {/* <!-- ==========  Login wrapper ========== --> */}

        <div class="login-wrapper">
            <div class="h5">Sign in</div>
            <form>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"></input>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div class="form-group">
                    <a href="#forgotpassword" class="open-popup btn btn-main btn-sm">Forgot password?</a>
                    <a href="#createaccount" class="open-popup btn btn-main btn-sm">Don't have an account?</a>
                </div>
                <button type="submit" class="btn btn-block btn-outline-primary">Submit</button>
            </form>
        </div>

        {/* <!-- ==========  Cart wrapper ========== --> */}

        <div class="cart-wrapper">
            <div class="checkout">
                <div class="clearfix">

                    {/* <!--cart item--> */}

                    <div class="row">

                        <div class="cart-block cart-block-item clearfix">
                            <div class="image">
                                <a href="product.html"><img src="assets/images/item-1.jpg" alt="" /></a>
                            </div>
                            <div class="title">
                                <div><a href="product.html">Product item</a></div>
                                <small>Product category</small>
                            </div>
                            <div class="quantity">
                                <input type="number" value="2" class="form-control form-quantity" />
                            </div>
                            <div class="price">
                                <span class="final">$ 1.998</span>
                                <span class="discount">$ 2.666</span>
                            </div>
                            {/* <!--delete-this-item--> */}
                            <span class="icon icon-cross icon-delete"></span>
                        </div>

                        {/* <!--cart item--> */}

                        <div class="cart-block cart-block-item clearfix">
                            <div class="image">
                                <a href="product.html"><img src="assets/images/item-2.jpg" alt="" /></a>
                            </div>
                            <div class="title">
                                <div><a href="product.html">Product item</a></div>
                                <small>Product category</small>
                            </div>
                            <div class="quantity">
                                <input type="number" value="2" class="form-control form-quantity" />
                            </div>
                            <div class="price">
                                <span class="final">$ 1.998</span>
                                <span class="discount">$ 2.666</span>
                            </div>
                            {/* <!--delete-this-item--> */}
                            <span class="icon icon-cross icon-delete"></span>
                        </div>

                        {/* <!--cart item--> */}

                        <div class="cart-block cart-block-item clearfix">
                            <div class="image">
                                <a href="product.html"><img src="assets/images/item-3.jpg" alt="" /></a>
                            </div>
                            <div class="title">
                                <div><a href="product.html">Product item</a></div>
                                <small>Product category</small>
                            </div>
                            <div class="quantity">
                                <input type="number" value="2" class="form-control form-quantity" />
                            </div>
                            <div class="price">
                                <span class="final">$ 1.998</span>
                                <span class="discount">$ 2.666</span>
                            </div>
                            {/* <!--delete-this-item--> */}
                            <span class="icon icon-cross icon-delete"></span>
                        </div>

                    </div>

                    <hr />

                    {/* <!--cart prices --> */}

                    <div class="clearfix">
                        <div class="cart-block cart-block-footer clearfix">
                            <div>
                                <strong>Discount 15%</strong>
                            </div>
                            <div>
                                <span>$ 159,00</span>
                            </div>
                        </div>

                        <div class="cart-block cart-block-footer clearfix">
                            <div>
                                <strong>Shipping</strong>
                            </div>
                            <div>
                                <span>$ 30,00</span>
                            </div>
                        </div>

                        <div class="cart-block cart-block-footer clearfix">
                            <div>
                                <strong>VAT</strong>
                            </div>
                            <div>
                                <span>$ 59,00</span>
                            </div>
                        </div>
                    </div>

                    <hr />

                    {/* <!--cart final price --> */}

                    <div class="clearfix">
                        <div class="cart-block cart-block-footer clearfix">
                            <div>
                                <strong>Total</strong>
                            </div>
                            <div>
                                <div class="h4 title">$ 1259,00</div>
                            </div>
                        </div>
                    </div>


                    {/* <!--cart navigation --> */}

                    <div class="cart-block-buttons clearfix">
                        <div class="row">
                            <div class="col-sm-6">
                                <a href="products-grid.html" class="btn btn-outline-info">Continue shopping</a>
                            </div>
                            <div class="col-sm-6 text-right">
                                <a href="checkout-1.html" class="btn btn-outline-warning"><span class="icon icon-cart"></span> Checkout</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</nav>
  );
};



export default Header;
