import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const PortfolioTemplate = ({ title, image, onPortfolioSelect }) => {
  return (
    <div className="col-md-4 my-3">
      <p className="main-bg text-white text-center p-3 portfolio" onClick={onPortfolioSelect}>{title}</p>
      {/* <Card className="h-100 shadow onPortfolioSelect" onClick={onPortfolioSelect}>
        
        <CardBody>
          <CardTitle tag="h4" className="text-center">
            {title}
          </CardTitle>
        </CardBody>
        <CardImg top width="100%" height="250" src={image} alt={title} />
      </Card> */}
    </div>
  );
};

export default PortfolioTemplate;
