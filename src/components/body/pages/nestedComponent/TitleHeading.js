import React from "react";

const TitleHeading = ({title}) => {
  return (
    <div className="animate__animated animate__bounce">
      <h1 className="text-center my-5 text-uppercase font-weight-bold">{title}</h1>
      <hr />
    </div>
  );
};

export default TitleHeading;
