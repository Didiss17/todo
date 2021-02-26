import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
import { login } from "../../Service/Firebase/firebaseUser";
import Myalert from "../../components/Myalert";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();

  const [msg, setMsg] = useState("");
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    switch (e.target.id) {
      case "mail":
        setEmail(e.target.value);
        break;
      case "pword":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleClick = (e) => {
    if (email && password) {
      login(email, password)
        .then((res) => {
          /*setEmail("");
          setPassword("");
          setMsg("login ok")
          setTitle("success")
          setShow(true)*/
        
          history.push("/cars");

        })
        .catch((error) => {
          //alert(error.message);
          setMsg(error.message)
          setTitle("error")
          setShow(true)
        });
    }
  };
  const handleClose = () => setShow(false);

  return (
    <div className="container"> 
    <Myalert show={show} handleClose={handleClose} message={msg} title={title} />
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => handleChange(e)}
            value={email}
            id="mail"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            value={password}
            id="pword"
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={(e) => handleClick(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
