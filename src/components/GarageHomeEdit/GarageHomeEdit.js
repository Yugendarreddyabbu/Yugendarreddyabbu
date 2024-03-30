import React, { useState } from 'react';
import GarageHeader from '../GarageHeader/GarageHeader';
import GarageFooter from '../GarageFooter/GarageFooter';

const EditBooking = () => {
    return (
        <div>
            <GarageHeader/>

            <div class="container" style={{ textAlign: "start" }}>
                <div class="col-lg-8 mx-auto">
                    <div class="card radius-10">
                        <div class="card-body">
                            <div>
                                <h5 class="mb-3">Edit Booking</h5>
                                <div class="mb-4 d-flex flex-column gap-3 align-items-center justify-content-center">
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
                                    {/* <button type="button" class="btn btn-outline-primary btn-sm radius-30 px-4"><ion-icon name="image-sharp"></ion-icon>Change Photo</button> */}
                                </div>
                                <h5 class="mb-0 mt-4">User Information</h5>
                                <hr />
                                <div class="row g-3">
                                    <div class="col-6">
                                        <label class="form-label">Username</label>
                                        <input type="text" class="form-control" value="Jhon" />
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Email address</label>
                                        <input type="text" class="form-control" value="jhon@gmail.com" />
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">First Name</label>
                                        <input type="text" class="form-control" value="jhon" />
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label">Last Name</label>
                                        <input type="text" class="form-control" value="Cena" />
                                    </div>
                                </div>
                                <div>
                                    <h5 class="mb-0 mt-4">Contact Information</h5>
                                    <hr />
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <label class="form-label">Address</label>
                                            <input type="text" class="form-control" value="47-A,Brisbane, United Kingdom" />
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">City</label>
                                            <input type="text" class="form-control" value="Brisbane" />
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Country</label>
                                            <input type="text" class="form-control" value="UK" />
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Pin Code</label>
                                            <input type="text" class="form-control" value="300563" />
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label">Contact Number</label>
                                            <input type="text" class="form-control" value="663-881-1119" />
                                        </div>  
                                    </div>
                                    <div>
                                    <h5 class="mb-0 mt-4">Scheduled Date and Time</h5>
                                    <hr />
                                    <div class="row g-3">
                                    <div class="col-6">
                                            <label class="form-label">Existing Scheduled Date and Time</label>
                                            <input type="text" class="form-control" value="Apr 2, 2023 18:23:33" />
                                        </div>  
                                        <div class="col-6">
                                            <label class="form-label">Updating Scheduled Date and Time</label>
                                            <input type="text" class="form-control" value="Apr 4, 2023 18:23:33" />
                                        </div>
                                    </div>
                                    </div>
                                    <div class="text-start mt-3" style={{textAlign:"center"}}>
                                        <button type="button" class="btn btn-primary px-4">Send Mail</button>
                                    </div>
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
export default EditBooking;