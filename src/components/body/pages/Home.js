import React from "react";
import data from "../../../data/data";
import Typewriter from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.css'

const Home = () => {
  return (
    <div className="container home">
      <div className="row align-self-center pt-5">
        <div className="col-md-6 align-self-center">
          <h1>{data[0].name}</h1>
          <h5 style={{ margin: 'auto 0', fontWeight: 'normal' }}>
        <span style={{ color: '#2B79FD', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            loop
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={data[0].designation}
          />
        </span></h5>
        </div>
        <div className="col-md-6 hero align-self-center">
          <img className="animated img-fluid" src={data[0].heroPhoto} alt={data[0].name} />
        </div>
      </div>
    </div>
  );
};

export default Home;
