import React, {useState} from "react";
import Header from "../../components/header/header";
import HomeSlider from "../../components/homeSlider/homeslider";
import GarageList from "../../components/garageList/garagelist";
import OurStats from "../../components/ourstats/stats";
import Footer from "../../components/footer/footer";
import BookSlot from "../../components/bookslot/bookslot";
import SignUp from "../signup/signup";
import Blogs from "../../components/blogs/blogs";
import PopUp from "../../components/bookaslotpopup/popup";
import SpareParts from "../../components/partsweuse/Partsused";

const HomeScreen = () => {
  
return(
<div>
<Header/>
     <HomeSlider/>
      <PopUp/>
     <GarageList/>
     <OurStats/> 
     <SpareParts/>
     <Blogs/>
     <BookSlot/>
     <Footer/>
    
</div>
);
};

export default HomeScreen;