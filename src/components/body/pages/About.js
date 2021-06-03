import React, { useEffect } from "react";
import data from "../../../data/data";
import SkillsTemplate from "./nestedComponent/SkillsTemplate";
import TitleHeading from "./nestedComponent/TitleHeading";

const About = () => {

  useEffect(()=>{
    document.title = "F Shrabon - About Me"
  });
  const skills = data[0].skills.map((skill, i) => (
    <SkillsTemplate key={skill.id} {...skill} />
  ));
  return (
    <div className="container mb-5">
      <TitleHeading title="About Me" />
      <div className="d-flex justify-content-between my-5 animate__animated animate__lightSpeedInLeft">
        <img
          src={data[0].photo}
          alt={data[0].name}
          style={{ width: "200px" }}
          className="my-3 img-fluid shadow card-img mx-auto mt-5"
        />
        <div className="ml-5 mt-4 align-self-center">
          <h3 className="my-3">{data[0].name}</h3>
          <p className="mt-2">{data[0].description}</p>
        </div>
      </div>
      <div className="skills">
        <h3>SKILLS</h3>
        <hr />
        <div className="row mt-4 animate__animated animate__lightSpeedInRight">{skills}</div>
      </div>
    </div>
  );
};

export default About;
