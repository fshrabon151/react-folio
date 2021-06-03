import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const ServiceTemplate = ({ title, image, id }) => {
  return (
    <div className="col-md-4 my-3">
      <NavLink
        to={"/service/" + id}
        style={{ textDecoration: "none", color: "#000" }}
      >
        <Card className="h-100 shadow">
          <CardImg top width="100%" src={image} alt={title} />
          <CardBody>
            <CardTitle tag="h4" className="text-center">
              {title}
            </CardTitle>
          </CardBody>
        </Card>
      </NavLink>
    </div>
  );
};

export default ServiceTemplate;
