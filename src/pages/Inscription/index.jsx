import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from "react-bootstrap";
import {inscription} from "../../Service/Firebase/firebaseUser"
import Myalert from "../../components/Myalert";
const Inscription = props => {
  const [msg, setMsg] = useState("");
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);
 const[email,setEmail]=useState("");
 const[name,setName]=useState("");
 const[password,setPassword]=useState("");
 
 const handleChange=(e)=>{
  
  switch(e.target.id){
      case "name":
        setName(e.target.value)
          break;
          case "mail":
            setEmail(e.target.value)
          break;
          case "pword":
        setPassword(e.target.value)
          break;
          default:
              break;
  }
    
 }
 const handleClick=(e)=>{
    
    if (email && name && password) {
        inscription(name,email,password).then(res=>{
            setName("")
            setEmail("")
            setPassword("")
            setMsg("Inscription terminé")
            setTitle("success")
            setShow(true)
        }).catch(error=>{
            //alert(error.message)
            setMsg(error.message)
          setTitle("error")
          setShow(true)
        })
    } 
} 
const handleClose = () => setShow(false);  
 
    return (
        <div className="container">
           <Myalert show={show} handleClose={handleClose} message={msg} title={title} />
         <Form>
         <Form.Group controlId="text">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" onChange={(e)=>handleChange(e)} value={name} id="name"/>
    </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>handleChange(e)} value={email} id="mail"/>
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>handleChange(e)} value={password} id="pword" />
  </Form.Group>
  
  <Button variant="primary" type="button" onClick={(e)=>handleClick(e)} >
    Submit
  </Button>
</Form>   
        </div>
    );
};



export default Inscription;