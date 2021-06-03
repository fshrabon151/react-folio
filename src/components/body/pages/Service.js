import React, { useEffect, useState } from "react";
import TitleHeading from "./nestedComponent/TitleHeading";
import data from "./../../../data/data";
import ServiceTemplate from "./nestedComponent/ServiceTemplate";
import PortfolioTemplate from "./nestedComponent/PortfolioTemplate";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import SinglePortfolioTemplate from "./nestedComponent/SinglePortfolioTemplate";

const Service = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [modal, setModal] = useState(false);

  const onPortfolioSelect = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setModal(!modal);
  };
  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    document.title = "F Shrabon - Services";
  });

  const services = data[0].services.map((service) => {
    return <ServiceTemplate key={service.id} {...service} />;
  });
  const portfolio = data[0].portfolio.map((portfolio) => {
    return (
      <PortfolioTemplate
        key={portfolio.id}
        {...portfolio}
        onPortfolioSelect={() => onPortfolioSelect(portfolio)}
      />
    );
  });

  let selected_portfolio = null;
  if (selectedPortfolio != null) {
    selected_portfolio = <SinglePortfolioTemplate {...selectedPortfolio} />;
  }
  return (
    <>
      <div className="container mb-5">
        <TitleHeading title="Services" />
        <div className="row animate__animated animate__lightSpeedInRight">
          {services}
        </div>

        <h3 className="mt-5">Portfolio</h3>
        <hr />

        <div className="row animate__animated animate__lightSpeedInLeft">
          {portfolio}
        </div>
      </div>

      <hr />
      <div>
        <Modal isOpen={modal} className="modal-dialog modal-dialog-centered" onClick={toggleModal}>
          <ModalBody>{selected_portfolio}</ModalBody>
          <ModalFooter>
            <Button color="danger" className="btn-block" onClick={toggleModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default Service;
