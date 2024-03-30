import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <Header />
            <section class="login">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 offset-md-3">
                            <div class="login-wrapper">
                                <div class="login-block login-block-signup">
                                    <div class="h4">Register now <Link to="/signin" class="btn btn-main btn-sm btn-login pull-right">Already member?</Link></div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" value="" class="form-control" placeholder="First name: *"></input>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" value="" class="form-control" placeholder="Last name: *"></input>
                                            </div>
                                        </div>

                                        <div class="col-md-12">

                                            <div class="form-group">
                                                <input type="text" value="" class="form-control" placeholder="Registration Number:"></input>
                                            </div>
                                        </div>
                                        
                                        

                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <input type="text" value="" class="form-control" placeholder="Zip code: *"></input>
                                            </div>
                                        </div>

                                        <div class="col-md-8">
                                            <div class="form-group">
                                                <input type="text" value="" class="form-control" placeholder="City: *"></input>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" value="" class="form-control" placeholder="Email: *"></input>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" value="" class="form-control" placeholder="Phone: *"></input>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                            <label>Driving Licence:</label>
                                                <input type="file" value="" class="form-control-file" placeholder="Driving Licence:"></input>
                                            </div>
                                        </div>  
                                        <div class="col-md-12">
                                            <hr />
                                            <span class="checkbox">
                                                <input type="checkbox" id="checkBoxId1"></input>
                                                <label for="checkBoxId1">I have read and accepted the <a href="#">terms</a>, as well as read and understood our terms of <a href="#">business contidions</a></label>
                                            </span>
                                            <span class="checkbox">
                                                <input type="checkbox" id="checkBoxId2"></input>
                                                <label for="checkBoxId2">Subscribe to exciting newsletters and great tips</label>
                                            </span>
                                            <hr />
                                        </div>

                                        <div class="col-md-12">
                                            <a href="#" class="btn btn-outline-dark">Create account</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default SignUp;