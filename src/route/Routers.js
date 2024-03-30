import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import HomeScreen from "../screens/Home/home";
import TermsAndConditions from "../screens/termsandconditions/TermsAndConditions";
import AboutUs from "../screens/AboutUs/aboutus";
import SignUp from "../screens/signup/signup";
import SignIn from "../screens/SignIn/SignIn";
import MyAccount from "../screens/MyAccount/MyAccount";
import Garage from "../screens/GarageRegForm/garageform";
import MyCars from "../screens/MyCars/MyCars";
import MyBookings from "../screens/MyBookings/MyBookings";
import CheckoutServices from "../screens/CheckoutServices/CheckoutService";
import CheckoutSchedule from "../screens/CheckoutSchedule/CheckoutSchdule";
import CheckoutReceipt from "../screens/CheckoutReceipt/CheckoutReceipt";


import GarageHeader from "../components/GarageHeader/GarageHeader";
import GarageHome from "../screens/GarageHome/GarageHome";
import TypeOfService from "../components/GarageHomeSVC/TypeOfService";
import EditBooking from "../components/GarageHomeEdit/GarageHomeEdit";
import HomeCarList from "../components/GarageHomeEdit/CarList";
import CarOnSite from "../components/GarageCarOnSite/CarOnSite";
import VHCReport from "../components/GarageVHCReport/VHCReport";
import GarageReports from "../screens/GarageReports/GarageReports";
import Advisories from "../components/GarageAdvisories/Advisories";
import GarageSVCupload from "../components/GarageSVCupload/Garageupload";
import GarageService from "../screens/GarageService/GarageService";
import GarageSVCinvoice from "../components/GarageSVCinvoice/Garageinvoice";
import GarageViewInvoice from "../components/GarageViewInvoice/ViewInvoice";
import PaymentAndStatus from "../components/GaragePayment/PaymentAndStatus";
import GarageSendMail from "../components/GaragePaymentMail/GarageSendMail";
import GarageNotifications from "../components/GarageNotifications/Notifications";

export const Router = (props) => (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/termsandconditions" element={<TermsAndConditions/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/myaccount" element={<MyAccount/>} />
        <Route path="/mybookings" element={<MyBookings/>} />
        <Route path="/mycars" element={<MyCars/>} />
        <Route path="/gagare-register" element={<Garage/>} />
        <Route path="/checkout-service" element={<CheckoutServices/>} />
        <Route path="/checkout-schedule" element={<CheckoutSchedule/>} />
        <Route path="/checkout-receipt" element={<CheckoutReceipt/>} />




        <Route path="/garage-header" element={<GarageHeader/>} />
        <Route path="/garage-Footer" element={<GarageHeader/>} />
        <Route path="/garagehome" element={<GarageHome/>} />
        <Route path="/typeofservice" element={<TypeOfService/>} />
        <Route path="/editbooking" element={<EditBooking/>}/>
        <Route path="/homecarlist" element={<HomeCarList/>}/>
        <Route path="/caronsite" element={<CarOnSite/>}/>
        <Route path="/VHCReport" element={<VHCReport/>}/>
        <Route path="/garagereports" element={<GarageReports/>}/>
        <Route path="/advisories" element={<Advisories/>}/>
        <Route path="/garageservice" element={<GarageService/>}/>
        <Route path="/garagesvcupload" element={<GarageSVCupload/>}/>
        <Route path="/garageinvoice" element={<GarageSVCinvoice/>}/>
        <Route path="/garageviewinvoice" element={<GarageViewInvoice/>}/>
        <Route path="/garagepayment" element={<PaymentAndStatus/>}/>
        <Route path="/garagesendmail" element={<GarageSendMail/>}/>
        <Route path="/garagenotification" element={<GarageNotifications/>}/>
     </Routes>

</BrowserRouter>
);