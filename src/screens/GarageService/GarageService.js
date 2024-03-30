import React, { useState } from "react";
import GarageHeader from "../../components/GarageHeader/GarageHeader";
import GarageFooter from "../../components/GarageFooter/GarageFooter";
import GarageSVCupload from "../../components/GarageSVCupload/Garageupload";
import GarageSVCinvoice from "../../components/GarageSVCinvoice/Garageinvoice";


const GarageService = () => {
    const [showUpload, setShowUpload] = useState(true); // Set initial state to true

    const handleTabClick = (isUpload) => {
        setShowUpload(isUpload);
    };

    return (
        <div>
            <GarageHeader />
            <div className="container mt-3"  style={{maxWidth:"1280px"}}>
                <div className="card">
                    <div className="card-body">
                        <ul className="nav nav-tabs nav-primary" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className={`nav-link ${showUpload ? 'active' : ''}`} data-bs-toggle="tab" href="#primaryhome" role="tab" aria-selected="true" onClick={() => handleTabClick(true)}>
                                    <div className="d-flex align-items-center">
                                        <div className="tab-icon"><ion-icon name="home-sharp" className="me-1"></ion-icon></div>
                                        <div className="tab-title">Changed Parts</div>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className={`nav-link ${showUpload ? '' : 'active'}`} data-bs-toggle="tab" role="tab" aria-selected="false" onClick={() => handleTabClick(false)}>
                                    <div className="d-flex align-items-center">
                                        <div className="tab-icon"><ion-icon name="person-sharp" className="me-1"></ion-icon></div>
                                        <div className="tab-title">Invoice and Service History</div>
                                    </div>
                                </a>
                            </li>
                            {/* <li className="nav-item" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false">
                                    <div className="d-flex align-items-center">
                                        <div className="tab-icon"><ion-icon name="call-sharp" className="me-1"></ion-icon></div>
                                        <div className="tab-title">Autodata</div>
                                    </div>
                                </a>
                            </li> */}
                        </ul>
                        {showUpload ? <GarageSVCupload/> : <GarageSVCinvoice/>}
                    </div>
                </div>
            </div>
            <GarageFooter />
        </div>
    );
};

export default GarageService;
