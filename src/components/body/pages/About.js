import React from "react";
import data from "../../../data/data";

const About = () => {
  return (
    <div className="container">
      <div className="card my-5">
        <img
          src={data[0].photo}
          alt={data[0].name}
          style={{ width: "200px" }}
          className="my-3 img-fluid shadow card-img mx-auto mt-5"
        />
        <div className="card-body">
          <h3 className="text-center my-3">{data[0].name}</h3>
          <p className="mt-2">{data[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
