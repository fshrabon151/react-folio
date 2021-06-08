import React, { useEffect } from "react";
import data from "../../../data/data";
import Typewriter from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.css";
import { Link } from 'react-router-dom';


const Home = () => {
  useEffect(()=>{
    document.title = "F Shrabon - Home"
  });
  return (
    <div className="container home">
      <div className="row align-self-center pt-5 animate__animated animate__fadeInDown">
        <div id="home__title" className="col-md-6 align-self-center animate__animated animate__shakeX">
          <h1>{data[0].name}</h1>
          <h5 style={{ margin: "auto 0", fontWeight: "normal"}}>  
            <span style={{ color: "#004080", fontWeight: "bold",fontSize: "25px"}}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                words={data[0].designation}
              />
            </span>
          </h5>
          <div class="mt-4"><Link class="btn-get-started" exact to="/service">Get Started</Link></div>
        </div>
        <div className="col-md-6 hero align-self-center animate__animated animate__bounceInRight">
          <img
            className="animated img-fluid"
            src={data[0].heroPhoto}
            alt={data[0].name}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
