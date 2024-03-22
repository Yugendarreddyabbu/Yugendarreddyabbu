import React from "react";

const SignUp = () => {
    return(
<section class="login">

{/* <!--Header--> */}

<header class="d-none">
    <div class="container">
        <h2 class="title">Login & registration</h2>
        <div class="text">
            <p>Suspendisse scelerisque odio eu felis eleifend, vitae gravida magna iaculis. Vestibulum volutpat, purus in consectetur porta, velit felis suscipit metus, et pharetra enim augue suscipit est. Aenean non ante tortor. Nam egestas tincidunt turpis, quis accumsan est vestibulum non</p>
            <hr />
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </div>
    </div>
</header>

{/* <!--Content--> */}

<div class="container">

    <div class="row">

       ?

        <div class="col-md-6 offset-md-3">

            <div class="login-wrapper">

               

                <div class="login-block login-block-signin">

                    <div class="h4">Sign in <a href="javascript:void(0);" class="btn btn-main btn-sm btn-register pull-right">Create an account</a></div>

                    <hr />

                    <div class="row">

                        <div class="col-12">
                            <div class="form-group">
                                <input type="text" value="" class="form-control" placeholder="User ID"></input>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="form-group">
                                <input type="password" value="" class="form-control" placeholder="Password"></input>
                            </div>
                        </div>

                        <div class="col-12">
                            <span class="checkbox">
                                <input type="checkbox" id="checkBoxId3"></input>
                                <label for="checkBoxId3">Remember me &nbsp;<a href="#">Forgot password?</a></label>
                            </span>
                        </div>

                        <div class="col-12">
                            <hr />
                            <a href="#" class="btn btn-primary">Sign in</a>
                        </div>
                    </div>
                </div>
                 {/* <!--/signin--> */}
                {/* <!--signup--> */}

                <div class="login-block login-block-signup">

                    <div class="h4">Register now <a href="javascript:void(0);" class="btn btn-main btn-sm btn-login pull-right">Already member?</a></div>

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
    );
};

export default SignUp;