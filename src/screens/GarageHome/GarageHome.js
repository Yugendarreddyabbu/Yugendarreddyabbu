import React from "react";
import { useState,useEffect } from "react";
import GarageHeader from "../../components/GarageHeader/GarageHeader";
import GarageFooter from "../../components/GarageFooter/GarageFooter";
import TypeOfService from "../../components/GarageHomeSVC/TypeOfService";
import HomeCarList from "../../components/GarageHomeEdit/CarList";

const GarageHome = () => {
    const [activeButton, setActiveButton] = useState('button1');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };
    return (
        <div>
            <GarageHeader />
            <div className="container" style={{ maxWidth: "1280px" }}>
                <img src="assets/images/Garagebg.jpg" alt="GarageBG" width="100%" height="100%" />
            </div>
            <div className="container" style={{maxWidth:"1280px"}}>
            <div style={{ display: "flex" }}>
                <h2 style={{ color: "black" }}>Services</h2>
            </div>
            <div style={{ display: "flex" }}>
                <img src="assets/images/GarageHome.png" alt="GarageHome" width="10%" height="10%" />
            </div>
            <div style={{ display: "flex" }}>
                <h4 style={{ fontWeight: "400", color: "black" }}>
                Our cutting-edge application revolutionizes the way garages operate, boosting bookings and expanding customer circles effortlessly. By leveraging our platform, garages witness a significant surge in appointments and clientele.
                 </h4>
                 </div>
            <div style={{ display: "flex",paddingTop:"20px"}}>
                <div style={{ width: "28%"}}>
                    <button
                        style={{
                            fontSize:"20px",
                            display: "block",
                            width: "100%",
                            padding: "10px 15px",
                            textAlign: "center",
                            backgroundColor: activeButton === 'button1' ? "#ff0000" : "#fff", // Red when active, white otherwise
                            color: activeButton === 'button1' ? "#fff" : "#ff0000", // White when active, blue otherwise
                            textDecoration: "none",
                            border: " 1px solid lightgrey",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease"
                        }}
                        onMouseEnter={(e) => { e.target.style.backgroundColor = "#ff0000"; e.target.style.color = "#fff"; }}
                        onMouseLeave={(e) => { e.target.style.backgroundColor = activeButton === 'button1' ? "#ff0000" : "#fff"; e.target.style.color = activeButton === 'button1' ? "#fff" : "#ff0000"; }}
                        
                        onClick={() => handleButtonClick('button1')}
                    >
                        Bookings
                    </button>
                    <button
                        style={{
                            fontSize:"20px",
                            display: "block",
                            width: "100%",
                            padding: "10px 15px",
                            marginBottom: "1px",
                            textAlign: "center",
                            backgroundColor: activeButton === 'button2' ? "#ff0000" : "#fff", // Red when active, white otherwise
                            color: activeButton === 'button2' ? "#fff" : "#ff0000", // White when active, blue otherwise
                            textDecoration: "none",
                            border: " 1px solid lightgrey",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease"
                        }}
                        onMouseEnter={(e) => { e.target.style.backgroundColor = "#ff0000"; e.target.style.color = "#fff"; }}
                        onMouseLeave={(e) => { e.target.style.backgroundColor = activeButton === 'button2' ? "#ff0000" : "#fff"; e.target.style.color = activeButton === 'button2' ? "#fff" : "#ff0000"; }}
                        onClick={() => handleButtonClick('button2')}
                    >
                        Edit Booking
                    </button>
                    
                </div>
                {activeButton === 'button1' && <TypeOfService />}
                {activeButton === 'button2' && <HomeCarList />}
            </div>
            </div>
            <div>
                <GarageFooter />
            </div>
        </div>
    )
}
export default GarageHome;