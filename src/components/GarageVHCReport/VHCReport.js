import React from "react";
import { useState } from "react";
import GarageHeader from "../GarageHeader/GarageHeader";
import GarageFooter from "../GarageFooter/GarageFooter";

const VHCReport = () => {

    const [buttonColor, setButtonColor] = useState("");
    const handleButtonClick = (color) => {
        setButtonColor(color);
    };

    return (
        <div>
            {/* <GarageHeader />            */}
            <div class="container mt-3" style={{ textAlign: "start" }}>
                <div class="col-lg-12 mx-auto">
                    <div class="card radius-10">
                        <div class="card-body">
                            <div>
                                <div className="col-12 row">
                                    <div class="col-6">
                                        <h5 class="mb-0">VHC Report</h5>
                                    </div>
                                    <div class="col-lg-6" style={{ display: "flex", justifyContent: "end" }}>
                                        <a href="" class="btn btn-primary me-2"><ion-icon name="file-tray-full-sharp"></ion-icon>Export as PDF</a>
                                        <a href="" onclick="window.print()" class="btn btn-secondary"><ion-icon name="print-sharp"></ion-icon>Print</a>
                                    </div>
                                </div>

                                <h5 class="mb-0 mt-4">User Information</h5>
                                <hr />
                                <div class="row g-3">
                                    <div class="col-6">
                                        <label class="form-label">First Name</label>
                                        <input type="text" class="form-control" value="" />
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Last Name</label>
                                        <input type="text" class="form-control" value="" />
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Email</label>
                                        <input type="text" class="form-control" value="" />
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Contact Number</label>
                                        <input type="text" class="form-control" value="" />
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Schedule Date</label>
                                        <input type="text" class="form-control" value="" />
                                    </div>
                                </div>
                                <div>
                                    <h5 class="mb-0 mt-4">Inspection</h5>
                                    <hr />
                                    <h6>BRAKE SYSTEM</h6>

                                    <div style={{ backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "5px", marginBottom: "4px", fontWeight: "600", paddingLeft: "5px" }}>
                                        Service brakes
                                        <div className="col-12 row mb-2 mt-2">
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: buttonColor === "green" ? "rgb(98, 197, 114)" : "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px", textAlign: "center" }} onClick={() => handleButtonClick("green")}>Ok</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: buttonColor === "orange" ? "rgb(255, 153, 50)" : "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }} onClick={() => handleButtonClick("orange")}>Needs Repair</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: buttonColor === "gray" ? "rgb(102, 102, 102)" : "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }} onClick={() => handleButtonClick("gray")}>Not Applicable</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: buttonColor === "red" ? "rgb(217, 91, 93)" : "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }} onClick={() => handleButtonClick("red")}>Repaired</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "5px", marginBottom: "4px", fontWeight: "600", paddingLeft: "5px" }}>
                                        Parking brakes
                                        <div className="col-12 row mb-2 mt-2">
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px", textAlign: "center" }} >Ok</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }} >Needs Repair</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }}>Not Applicable</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }}>Repaired</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "5px", marginBottom: "4px", fontWeight: "600", paddingLeft: "5px" }}>
                                        Brake drums/rotors
                                        <div className="col-12 row mb-2 mt-2">
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px", textAlign: "center" }} >Ok</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }} >Needs Repair</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }}>Not Applicable</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }}>Repaired</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "5px", marginBottom: "4px", fontWeight: "600", paddingLeft: "5px" }}>
                                        Brake hose
                                        <div className="col-12 row mb-2 mt-2">
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px", textAlign: "center" }} >Ok</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }} >Needs Repair</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }}>Not Applicable</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }}>Repaired</button>
                                            </div>
                                        </div>
                                    </div>
                                    <h6>COUPLING DEVICES</h6>

                                    <div style={{ backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "5px", marginBottom: "4px", fontWeight: "600", paddingLeft: "5px" }}>
                                        Fifth wheel
                                        <div className="col-12 row mb-2 mt-2">
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: buttonColor === "green" ? "rgb(98, 197, 114)" : "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px", textAlign: "center" }} onClick={() => handleButtonClick("green")}>Ok</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: buttonColor === "orange" ? "rgb(255, 153, 50)" : "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }} onClick={() => handleButtonClick("orange")}>Needs Repair</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: buttonColor === "gray" ? "rgb(102, 102, 102)" : "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }} onClick={() => handleButtonClick("gray")}>Not Applicable</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: buttonColor === "red" ? "rgb(217, 91, 93)" : "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }} onClick={() => handleButtonClick("red")}>Repaired</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "5px", marginBottom: "4px", fontWeight: "600", paddingLeft: "5px" }}>
                                        Pintle hooks
                                        <div className="col-12 row mb-2 mt-2">
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px", textAlign: "center" }} >Ok</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }} >Needs Repair</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }}>Not Applicable</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }}>Repaired</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "5px", marginBottom: "4px", fontWeight: "600", paddingLeft: "5px" }}>
                                        Drawbar/towbar eye and tongue
                                        <div className="col-12 row mb-2 mt-2">
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px", textAlign: "center" }} >Ok</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }} >Needs Repair</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }}>Not Applicable</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }}>Repaired</button>
                                            </div>
                                        </div>
                                    </div>
                                    <h6>ENGINE OPERATION</h6>

                                    <div style={{ backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "5px", marginBottom: "4px", fontWeight: "600", paddingLeft: "5px" }}>
                                        Fan/compressor belts
                                        <div className="col-12 row mb-2 mt-2">
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: buttonColor === "green" ? "rgb(98, 197, 114)" : "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px", textAlign: "center" }} onClick={() => handleButtonClick("green")}>Ok</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: buttonColor === "orange" ? "rgb(255, 153, 50)" : "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }} onClick={() => handleButtonClick("orange")}>Needs Repair</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: buttonColor === "gray" ? "rgb(102, 102, 102)" : "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }} onClick={() => handleButtonClick("gray")}>Not Applicable</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: buttonColor === "red" ? "rgb(217, 91, 93)" : "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }} onClick={() => handleButtonClick("red")}>Repaired</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "5px", marginBottom: "4px", fontWeight: "600", paddingLeft: "5px" }}>
                                        Oil pressure
                                        <div className="col-12 row mb-2 mt-2">
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px", textAlign: "center" }} >Ok</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }} >Needs Repair</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }}>Not Applicable</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }}>Repaired</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "5px", marginBottom: "4px", fontWeight: "600", paddingLeft: "5px" }}>
                                        Radiator
                                        <div className="col-12 row mb-2 mt-2">
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px", textAlign: "center" }} >Ok</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }} >Needs Repair</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }}>Not Applicable</button>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-white" style={{ width: "100%", backgroundColor: "#f5f5f5", color: "#000", fontSize: "16px", fontWeight: "500", padding: "10px", whiteSpace: "nowrap", borderRadius: "4px" }}>Repaired</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display:"flex",justifyContent:"center",paddingTop:"10px"}}>
                                <button class="btn btn-primary">Send Mail</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <GarageFooter /> */}
        </div>
    )
}
export default VHCReport;