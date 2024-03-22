import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import HomeScreen from "../screens/Home/home";
import TermsAndConditions from "../screens/termsandconditions/TermsAndConditions";

export const Router = (props) => (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/termsandconditions" element={<TermsAndConditions/>} />
     </Routes>

</BrowserRouter>
);