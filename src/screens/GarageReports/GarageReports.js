import React, { useState } from "react";
import GarageHeader from "../../components/GarageHeader/GarageHeader";
import GarageFooter from "../../components/GarageFooter/GarageFooter";
import VHCReport from "../../components/GarageVHCReport/VHCReport";
import Advisories from "../../components/GarageAdvisories/Advisories";

const GarageReports = () => {
    const [showVHCReport, setShowVHCReport] = useState(true); // Set initial state to true

    const handleTabClick = (isVHCReport) => {
        setShowVHCReport(isVHCReport);
    };

    return (
        <div>
            <GarageHeader />
            <div className="container mt-3"  style={{maxWidth:"1280px"}}>
                <div className="card">
                    <div className="card-body">
                        <ul className="nav nav-tabs nav-primary" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className={`nav-link ${showVHCReport ? 'active' : ''}`} data-bs-toggle="tab" href="#primaryhome" role="tab" aria-selected="true" onClick={() => handleTabClick(true)}>
                                    <div className="d-flex align-items-center">
                                        <div className="tab-icon"><ion-icon name="home-sharp" className="me-1"></ion-icon></div>
                                        <div className="tab-title">VHC Report</div>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className={`nav-link ${showVHCReport ? '' : 'active'}`} data-bs-toggle="tab" role="tab" aria-selected="false" onClick={() => handleTabClick(false)}>
                                    <div className="d-flex align-items-center">
                                        <div className="tab-icon"><ion-icon name="person-sharp" className="me-1"></ion-icon></div>
                                        <div className="tab-title">Send Advisories</div>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false">
                                    <div className="d-flex align-items-center">
                                        <div className="tab-icon"><ion-icon name="call-sharp" className="me-1"></ion-icon></div>
                                        <div className="tab-title">Autodata</div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        {showVHCReport ? <VHCReport /> : <Advisories />}
                    </div>
                </div>
            </div>
            <GarageFooter />
        </div>
    );
};

export default GarageReports;
