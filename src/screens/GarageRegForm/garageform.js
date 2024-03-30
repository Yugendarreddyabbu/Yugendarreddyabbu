import React from "react";
import MultipleSelect from "./garagemultiselect";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


const Garage = () => {
    const handleChange = (event) => {
        // Handle input changes here if needed
    };

    return (
        <div>
            <Header />
            <div className="login-block login-block-signup" style={{marginTop:'35px'}}>
                <div className="h4">
                    Register now{" "}
                    {/* <a href="javascript:void(0);" className="btn btn-main btn-sm btn-login pull-right">
                        Already member?
                    </a> */}
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" defaultValue="" className="form-control" placeholder="Garage Name: *" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" defaultValue="" className="form-control" placeholder="Owner's Name: *" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" defaultValue="" className="form-control" placeholder="Business License Number: *" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" defaultValue="" className="form-control" placeholder="Years in Business: *" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="text" defaultValue="" className="form-control" placeholder="Address:" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <input type="text" defaultValue="" className="form-control" placeholder="Zip code: *" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="form-group">
                            <input type="text" defaultValue="" className="form-control" placeholder="City: *" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" defaultValue="" className="form-control" placeholder="Email: *" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" defaultValue="" className="form-control" placeholder="Phone: *" />
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <label>Services offered:</label>
                    <MultipleSelect />
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Upload Images:</label>
                        <input type="file" className="form-control-file" />

                        <hr />
                    </div>

                    <div className="col-md-12">
                        <a href="#" className="btn btn-outline-dark">
                            Register
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Garage;