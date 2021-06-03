import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const ServiceTemplate = ({title,image}) => {
  return (
    <div className="col-md-4 my-3">
      <Card className="h-100 shadow">
        <CardImg top width="100%" src={image} alt={title} />
        <CardBody>
          <CardTitle tag="h4" className="text-center">
            {title}
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default ServiceTemplate;
