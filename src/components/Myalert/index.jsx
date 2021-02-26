import React from "react";
import { Modal } from "react-bootstrap";

const Myalert = (props) => {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message}</Modal.Body>
      </Modal>
    </div>
  );
};

export default Myalert;
