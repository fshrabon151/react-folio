import React from "react";
import { NavLink, useParams } from "react-router-dom";
import data from "../../../../data/data";
import ErrorPage from "../ErrorPage";

const ServiceDetails = () => {
  document
    .querySelector(
      "#root > div > div > div.animate__animated.animate__rubberBand > nav > div > div > div > ul > li:nth-child(3) > a"
    )
    .classList.add("active");
  const params = useParams();
  const id = params.id;
  const service = data[0].services.find(
    (service) => service.id === parseInt(id)
  );
  console.log(service);

  if (service === undefined || null) return <ErrorPage />;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 align-self-center">
          <img src={service.image} className="img-fluid" alt={service.title} />
        </div>
        <div className="col-md-6 align-self-center">
          <h3 className="text-center">{service.title}</h3>
          <p>{service.description}</p>
          <NavLink
            to="/service"
            className="btn main-bg btn-block float-right text-white"
          >
            Go Back
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
