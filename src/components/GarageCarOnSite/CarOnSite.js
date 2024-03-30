import React from "react";
import GarageHeader from "../GarageHeader/GarageHeader";
import GarageFooter from "../GarageFooter/GarageFooter";
import { useNavigate } from "react-router-dom";

const CarOnSite = () => {
    const navigate=useNavigate();
    const handleEdit=()=>{
        navigate("/editbooking")
    }  
    const handlebegin=()=>{
        navigate("/garagereports")
    }
    return (
        <div>
            <GarageHeader/>
            <div className="container" style={{maxWidth:"1280px"}}>
            <div class="demo-seprater mt-3">
                <h6 class="mb-0 text-uppercase" >Car On Site</h6>
                <div class="my-3 border-bottom"></div>
            </div>

            <div class="row row-cols-1 row-cols-lg-3 mb-3">
                <div class="col">
                    <div class="card">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="First slide" width="100%" height="100%" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="Second slide" width="100%" height="100%" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="Third slide" width="100%" height="100%"/>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                            <div class="card-body">
                                <h5 class="card-title">Mercedes</h5>
                                <hr/>
                                <div class="row g-3" style={{textAlign:"start"}}>
                                    <div class="col-6">
                                            <label class="form-label">Vehicle No</label>
                                            <input type="text" class="form-control" value="AU 19923" />
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Type Of Service</label>
                                            <input type="text" class="form-control" value="Engine Oil" />
                                        </div>
                                        </div>
                                      
                                <div style={{display:"flex",justifyContent:"space-between",paddingTop:"10px"}}>
                                <button class="btn btn-primary" onClick={handleEdit}>View Details</button>
                                <button class="btn btn-primary" onClick={handlebegin}>Begin Service</button>
                                </div> 
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="First slide" width="100%" height="100%" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="Second slide" width="100%" height="100%" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="Third slide" width="100%" height="100%"/>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                    <div class="card-body">
                                <h5 class="card-title">Mercedes</h5>
                                <hr/>
                                <div class="row g-3" style={{textAlign:"start"}}>
                                    <div class="col-6">
                                            <label class="form-label">Vehicle No</label>
                                            <input type="text" class="form-control" value="AU 19923" />
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Type Of Service</label>
                                            <input type="text" class="form-control" value="Engine Oil" />
                                        </div>
                                        </div>
                                      
                                <div style={{display:"flex",justifyContent:"space-between",paddingTop:"10px"}}>
                                <button class="btn btn-primary">View Details</button>
                                <button class="btn btn-primary">Begin Service</button>
                                </div> 
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="First slide" width="100%" height="100%" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="Second slide" width="100%" height="100%" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="Third slide" width="100%" height="100%"/>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                    <div class="card-body">
                                <h5 class="card-title">Mercedes</h5>
                                <hr/>
                                <div class="row g-3" style={{textAlign:"start"}}>
                                    <div class="col-6">
                                            <label class="form-label">Vehicle No</label>
                                            <input type="text" class="form-control" value="AU 19923" />
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Type Of Service</label>
                                            <input type="text" class="form-control" value="Engine Oil" />
                                        </div>
                                        </div>
                                      
                                <div style={{display:"flex",justifyContent:"space-between",paddingTop:"10px"}}>
                                <button class="btn btn-primary">View Details</button>
                                <button class="btn btn-primary">Begin Service</button>
                                </div> 
                            </div>
                    </div>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-lg-3 mb-3">
                <div class="col">
                    <div class="card">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="First slide" width="100%" height="100%" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="Second slide" width="100%" height="100%" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="Third slide" width="100%" height="100%"/>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                    <div class="card-body">
                                <h5 class="card-title">Mercedes</h5>
                                <hr/>
                                <div class="row g-3" style={{textAlign:"start"}}>
                                    <div class="col-6">
                                            <label class="form-label">Vehicle No</label>
                                            <input type="text" class="form-control" value="AU 19923" />
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Type Of Service</label>
                                            <input type="text" class="form-control" value="Engine Oil" />
                                        </div>
                                        </div>
                                      
                                <div style={{display:"flex",justifyContent:"space-between",paddingTop:"10px"}}>
                                <button class="btn btn-primary">View Details</button>
                                <button class="btn btn-primary">Begin Service</button>
                                </div> 
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="First slide" width="100%" height="100%" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="Second slide" width="100%" height="100%" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="Third slide" width="100%" height="100%"/>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                    <div class="card-body">
                                <h5 class="card-title">Mercedes</h5>
                                <hr/>
                                <div class="row g-3" style={{textAlign:"start"}}>
                                    <div class="col-6">
                                            <label class="form-label">Vehicle No</label>
                                            <input type="text" class="form-control" value="AU 19923" />
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Type Of Service</label>
                                            <input type="text" class="form-control" value="Engine Oil" />
                                        </div>
                                        </div>
                                      
                                <div style={{display:"flex",justifyContent:"space-between",paddingTop:"10px"}}>
                                <button class="btn btn-primary">View Details</button>
                                <button class="btn btn-primary">Begin Service</button>
                                </div> 
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="First slide" width="100%" height="100%" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="Second slide" width="100%" height="100%" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="assets/images/Garagebg.jpg" alt="Third slide" width="100%" height="100%"/>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                    <div class="card-body">
                                <h5 class="card-title">Mercedes</h5>
                                <hr/>
                                <div class="row g-3" style={{textAlign:"start"}}>
                                    <div class="col-6">
                                            <label class="form-label">Vehicle No</label>
                                            <input type="text" class="form-control" value="AU 19923" />
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Type Of Service</label>
                                            <input type="text" class="form-control" value="Engine Oil" />
                                        </div>
                                        </div>
                                      
                                <div style={{display:"flex",justifyContent:"space-between",paddingTop:"10px"}}>
                                <button class="btn btn-primary">View Details</button>
                                <button class="btn btn-primary">Begin Service</button>
                                </div> 
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <GarageFooter/>
        </div>
    )
}
export default CarOnSite;
