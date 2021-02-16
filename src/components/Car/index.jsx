import React from "react";
import { Button, Card } from "react-bootstrap";

function Car(props) {
  
  return (
    <div>
      <Card style={{ width: "18rem", margin:"10px" }}>
        <Card.Img
          variant="top"
          src={props.image}
        />
        <Card.Body>
          <Card.Title> <span>{props.title}</span> </Card.Title>
          <Card.Text>
          <span>{props.description}</span>
          </Card.Text>
          <Button  variant="primary" id={props.cle} onClick={props.click}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Car;