import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/nestedComponent/ServiceDetails";
import ErrorPage from "./pages/ErrorPage";

const Body = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service/:id" component={ServiceDetails} />
        <Route  component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default Body;
