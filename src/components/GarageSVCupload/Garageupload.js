import React, { useState } from "react";
import GarageHeader from "../GarageHeader/GarageHeader";
import GarageFooter from "../GarageFooter/GarageFooter";

const GarageSVCupload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <div>
            {/* <GarageHeader /> */}
                <div className="card-body">
                    <div className="p-4 border rounded">
                        <form className="row g-3 needs-validation" noValidate>
                            <div className="col-12 row">
                                <div className="form-group col-6" style={{textAlign:"start"}}>
                                    {/* <label htmlFor="filePicker">Choose File:</label> */}
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="filePicker"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <div className="col-6">
                                <button className="btn btn-primary" type="submit">
                                    Upload
                                </button>
                            </div>
                            </div>
                        </form>
                    </div>
                    </div>
            {/* <GarageFooter /> */}
        </div>
    );
};

export default GarageSVCupload;
