import React from "react";
import "../../stylesheets/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <p className="text-center copyright"> F Shrabon &copy; {year}</p>
    </div>
  );
};

export default Footer;
