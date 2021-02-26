import React from "react";
import {  Form, Button } from "react-bootstrap";
import "./index.css";

function AddCar(props) {
  return (
    <div>
       <h1>Title</h1>
      <Form.Control size="lg" id='title' type="text" placeholder="Large text" onChange={props.change} value={props.title}/>
      <h1>Decription</h1>
      <Form.Control size="lg" id='description' type="text" placeholder="Large text" onChange={props.change} value={props.description}/>
      <h1>Image</h1>
      <Form.Control size="lg" id='image' type="text" placeholder="Large text" onChange={props.change} value={props.image}/>
      <Button style={{marginTop: "10px"}} variant="primary" onClick={props.clickme} id={props.mych}> {props.btnlabel} </Button>


    </div>
  );
}

export default AddCar;