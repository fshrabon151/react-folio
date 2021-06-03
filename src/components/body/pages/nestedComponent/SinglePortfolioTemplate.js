import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const SinglePortfolioTemplate = ({ title, image }) => {
  return (
    <Card className="h-100 w-100 shadow">
      <CardBody>
        <CardTitle tag="h4" className="text-center">
          {title}
        </CardTitle>
        <CardImg top width="100%" src={image} alt={title} />
      </CardBody>
    </Card>
  );
};

export default SinglePortfolioTemplate;
