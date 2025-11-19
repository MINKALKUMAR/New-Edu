import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import WelcomeSection from "./Component/WelcomeSection";
import ScrollingStrips from "./Component/ScrollingStrips";
import DiscussionPoints from "./Component/DiscussionPoints";
import WhyAttend from "./Component/WhyAttend";
import WhoShouldAttend from "./Component/WhoShouldAttend";
import Speakers from "./Component/Speakers";
import PastGlimpses from "./Component/PastGlimpses";
import Partners from "./Component/Partners";
import Venue from "./Component/Venue";
import IndustryTestimonials from "./Component/IndustryTestimonials";
import ConnectWithUs from "./Component/ConnectWithUs";
import FocusSectors from "./Component/FocusSectors";
import FixedButton from "./Component/FixedButton";
import Awards from "./Component/Awards";
import OurPartners from "./Component/OurPartners";
import RegistrationPage from "./Component/RegistrationPage";
import SponsorshipQuery from "./Component/SponsorshipQuery";
import NominateNow from "./Component/NominateNow";
import SpeakersSection from "./Component/SpeakersSection";
import EmailCopyBanner from "./Component/EmailCopyBanner";
import PDFBookViewer from "./Component/PDFBookViewer";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/magazine" element={<PDFBookViewer/>}/>
        <Route path="*" element={
          <>
            <Navbar />
            <Routes>
              {/* Main homepage route */}
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <WelcomeSection />
                    <ScrollingStrips />
                    <OurPartners/>
                    <SpeakersSection/>
                    <DiscussionPoints />
                    <WhyAttend />
                    <WhoShouldAttend />
                    <Speakers />
                    <FocusSectors />
                    <PastGlimpses />
                    <Partners />
                    <Venue />
                    <IndustryTestimonials />
                    <ConnectWithUs />
                    <FixedButton />
                  </>
                }
              />
              <Route path="/awards" element={<Awards />} />
              <Route path="/registration" element={<RegistrationPage/>} />
              <Route path="/SponsorshipQuery" element={<SponsorshipQuery/>} />
              <Route path="/Nominate" element={<NominateNow/>}/>
              <Route path="/mailer" element={<EmailCopyBanner/>}/>
            </Routes>
          </>
        } />
      </Routes>
    </Router>
  );
}
