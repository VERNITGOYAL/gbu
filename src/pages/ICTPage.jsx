import React from "react";
import AboutUs from "../components/AboutIct.jsx";
import HeroBanner from "../components/Research.jsx";
import DepartmentCard from "../components/Deptcard.jsx";
import CenterOfExcellence from "../components/Excellence.jsx";
import OurEntrepreneurs from "../components/Enterpre.jsx"; 
import TechHiringCompanies from "../components/companies.jsx"; 

const ICTPage = () => {
  return (
    <>

               {/* Research & Development Hero */}
      <AboutUs />           
       <DepartmentCard></DepartmentCard> {/* Cards for each department */}
      <CenterOfExcellence />         {/* Section for excellence highlights */}
      <HeroBanner />
      <OurEntrepreneurs /> 
      <TechHiringCompanies/>         {/* Section for entrepreneurs */}
    </>
  );
};

export default ICTPage;
