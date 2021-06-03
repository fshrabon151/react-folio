import React, {useEffect} from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import TitleHeading from "./nestedComponent/TitleHeading";

const Contact = () => {
  useEffect(() => {
    document.title = "F Shrabon - Contact";
  });
  return (
    <div className="container">
      <TitleHeading title="Contact Me" />

      <div className="mt-5 animate__animated  animate__bounceInUp">
        <Form>
          <FormGroup>
            <Label for="fname">First Name</Label>
            <Input
              type="text"
              name="fName"
              id="fname"
              placeholder="Your first name..."
            />
          </FormGroup>
          <FormGroup>
            <Label for="lname">Last Name</Label>
            <Input
              type="text"
              name="lname"
              id="lname"
              placeholder="Your last name..."
            />
          </FormGroup>
          <FormGroup>
            <Label for="country">Counrty</Label>
            <Input type="select" name="select" id="country">
              <option>Select</option>
              <option>America</option>
              <option>Bangladesh</option>
              <option>Canada</option>
              <option>Denmark</option>
              <option>England</option>
              <option>Others</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="Message">Message</Label>
            <Input type="textarea" name="text" id="Message" />
          </FormGroup>

          <Button className="main-bg">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
