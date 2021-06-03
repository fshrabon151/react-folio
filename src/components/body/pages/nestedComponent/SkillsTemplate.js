import React from "react";
import {CardTitle, Card, Progress } from "reactstrap";



const SkillsTemplate = ({ title, percentage }) => {

  return (
    <div className="col-md-3">
      <Card body className={`card shadow sec-bg text-white mb-4`}>
      <CardTitle tag="h6" className="mb-2">{title}</CardTitle>
        <div className="text-right">{percentage}%</div>
        <Progress animated color="primary" className="mb-3" value={percentage} />
      </Card>

    </div>
  );
};

export default SkillsTemplate;
