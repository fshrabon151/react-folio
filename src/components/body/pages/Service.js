import React, { useEffect } from "react";
import TitleHeading from "./nestedComponent/TitleHeading";
import data from "./../../../data/data";
import ServiceTemplate from "./nestedComponent/ServiceTemplate";

const Service = () => {
  useEffect(() => {
    document.title = "F Shrabon - Services";
  });
  const services = data[0].services.map((service) => {
    return <ServiceTemplate key={service.id} {...service} />;
  });
  const portfolio = data[0].portfolio.map((portfolio) => {
    return <ServiceTemplate key={portfolio.id} {...portfolio} />;
  });
  return (
    <div className="container mb-5">
      <TitleHeading title="Services" />
      <div className="row animate__animated animate__lightSpeedInRight">{services}</div>

      <h3 className="mt-5">Portfolio</h3>
        <hr />

      <div className="row animate__animated animate__lightSpeedInLeft">{portfolio}</div>


    </div>
  );
};

export default Service;
