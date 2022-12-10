import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export default function SummaryForm() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = (e) => {
    setIsChecked(e.target.checked);
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms and conditions">
        <Form.Check
          onChange={toggleChecked}
          type="checkbox"
          label={checkboxLabel}
          checked={isChecked}
        />
      </Form.Group>
      {/* enabled when checkbox is on and disabled when checkbox is off */}
      <Button variant="primary" type="submit" disabled={!isChecked}>
        Confirm order
      </Button>
    </Form>
  );
}
