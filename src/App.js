import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndConditon";
import ContactUs from "./pages/ContactUs";
import Return from "./pages/Return";

function App() {
  return (
  <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/about" element={<AboutUs/>}/>
          <Route exact path="/privacy" element={<PrivacyPolicy/>}/>
          <Route exact path="/terms" element={<TermsAndCondition/>}/>
          <Route exact path="/contact" element={<ContactUs/>}/>
          <Route exact path="/return" element={<Return/>}/>



          {/* <Route exact path="/" element={<ShowButton/>}/> */}

        </Routes>
      </Router>
  </>
    
  );
}

export default App;
