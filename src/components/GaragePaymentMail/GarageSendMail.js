import React, { useState } from "react";
import { Link } from "react-router-dom";
import GarageHeader from "../GarageHeader/GarageHeader";
import GarageFooter from "../GarageFooter/GarageFooter";

const GarageSendMail = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <div>
            <GarageHeader />
                <div className="card-body col-12 " style={{ display:"flex",justifyContent:"center"}}>
                    <div className="p-4 border rounded">
                            <div className="col-12 row">
                                <div className="form-group col-6">
                                <Link to="/garageviewinvoice"><a className="btn btn-primary" type="submit" style={{width:"100%",color:"whitesmoke"}}>
                                    Invoice
                                </a></Link>
                                </div>
                                <div className="col-6">
                                <button className="btn btn-primary" type="submit" style={{width:"100%"}}>
                                    Service History
                                </button>
                            </div>
                            <div class="col-12" style={{textAlign:"start"}}>
                                        <label class="form-label" >Email (optional):</label>
                                        <input type="text" class="form-control" value="" />
                                    </div>
                            </div>
                            <div className="col-11 mt-3" type="submit" style={{display:"flex",justifyContent:"center"}} >
                                <button className="btn btn-primary" type="submit" >
                                    Send Mail
                                </button>
                    
                                </div>
                                </div>
                    </div>
            <GarageFooter />
        </div>
    );
};

export default GarageSendMail;
