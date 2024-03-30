import React from "react";
import GarageFooter from "../GarageFooter/GarageFooter";
import GarageHeader from "../GarageHeader/GarageHeader";

const GarageNotifications=()=>{
    return(
        <div>
            <div>
            <GarageHeader/>
                <div className="card-body col-12 " style={{ display:"flex",justifyContent:"center"}}>
                    <div className="p-4 border rounded">
                    <div class="row g-3">
                                    <div class="col-4">
                                        <label class="form-label">Vehicle No</label>
                                        <input type="text" class="form-control" value="AU 13323" />
                                    </div>
                                    <div class="col-4">
                                        <label class="form-label">Type of Car</label>
                                        <input type="text" class="form-control" value="Mercedes" />
                                    </div>
                                    <div class="col-4">
                                        <label class="form-label">First Name</label>
                                        <input type="text" class="form-control" value="jhon" />
                                    </div>
                                    <div class="col-4">
                                        <label class="form-label">Last Name</label>
                                        <input type="text" class="form-control" value="Cena" />
                                    </div>
                                    <div class="col-4">
                                        <label class="form-label">Email address</label>
                                        <input type="text" class="form-control" value="jhon@gmail.com" />
                                    </div>
                                    <div class="col-4">
                                        <label class="form-label">Contact Number</label>
                                        <input type="text" class="form-control" value="643-232-7775" />
                                    </div>
                                </div>
                            <div className="col-12 mt-3" style={{display:"flex",justifyContent:"center"}} type="submit" >
                                <button className="btn btn-success" type="submit" >
                                    Call Now
                                </button>
                    
                                </div>
                                </div>
                    </div>

                    <div className="card-body col-12 " style={{ display:"flex",justifyContent:"center",textAlign:"start",border:"1px solid"}}>
                    <div className="p-4 border rounded" style={{border:"2px solid"}}> 
                    <div class="row g-3">
                                    <div class="col-4">
                                        <label class="form-label">Vehicle No</label>
                                        <input type="text" class="form-control" value="AU 13323" />
                                    </div>
                                    <div class="col-4">
                                        <label class="form-label">Type of Car</label>
                                        <input type="text" class="form-control" value="Mercedes" />
                                    </div>
                                    <div class="col-4">
                                        <label class="form-label">First Name</label>
                                        <input type="text" class="form-control" value="jhon" />
                                    </div>
                                    <div class="col-4">
                                        <label class="form-label">Last Name</label>
                                        <input type="text" class="form-control" value="Cena" />
                                    </div>
                                    <div class="col-4">
                                        <label class="form-label">Email address</label>
                                        <input type="text" class="form-control" value="jhon@gmail.com" />
                                    </div>
                                    <div class="col-4">
                                        <label class="form-label">Contact Number</label>
                                        <input type="text" class="form-control" value="643-232-7775" />
                                    </div>
                                </div>
                            <div className="col-12 mt-3" style={{display:"flex",justifyContent:"center"}} type="submit" >
                                <button className="btn btn-success" type="submit" >
                                    Call Now
                                </button>
                    
                                </div>
                                </div>
                    </div>
            <GarageFooter/>
        </div>
        </div>
    )
}
export default GarageNotifications;