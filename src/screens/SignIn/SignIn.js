import React,{useState} from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    // Event handler for the user ID input
    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };

    // Event handler for the password input
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div>
            <Header />
            <section className="login">
                <div className="container">
                    <div className="col-md-6 offset-md-3">
                        <div className="login-wrapper">
                            <div className="login-block login-block">
                                <div className="h4">Sign in <Link to="/signup" className="btn btn-main btn-sm btn-register pull-right">Create an account</Link></div>
                                <hr />
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text"
                                            value={userId}
                                             className="form-control"
                                              placeholder="User ID"
                                              onChange={handleUserIdChange}
                                              >
                                              </input>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-group">
                                            <input
                                             type="password"
                                             value={password}
                                               className="form-control"
                                                placeholder="Password"
                                                onChange={handlePasswordChange}
                                                >

                                                </input>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <span className="checkbox">
                                            <input type="checkbox" id="checkBoxId3"></input>
                                            <label htmlFor="checkBoxId3">Remember me &nbsp;<a href="#">Forgot password?</a></label>
                                        </span>
                                    </div>

                                    <div className="col-12">
                                        <hr />
                                        <Link to="/" className="btn btn-primary">Sign in</Link>
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

export default SignIn;
