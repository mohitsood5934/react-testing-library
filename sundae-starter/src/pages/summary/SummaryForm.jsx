import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);
  const [showPopover, setShowPopover] = useState(false);

  console.log("render summary form");

  const checkboxLabel = () => {
    return (
      <span>
        I agree to <span style={{ color: "blue " }}>Terms and Conditions</span>
      </span>
    );
  };

  function handleSubmit(event) {
    event.preventDefault();
    setOrderPhase("completed");
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        No ice cream will actually be delivered
      </Popover.Body>
    </Popover>
  );

  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">Click me to see</Button>
    </OverlayTrigger>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel()}
          onMouseOver={(event) => setShowPopover(true)}
          onMouseOut={(event) => setShowPopover(false)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm Order
      </Button>
      {showPopover && <Example />}
    </Form>
  );
};

export default SummaryForm;
