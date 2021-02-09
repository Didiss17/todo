import React, { Component } from "react";
import NewTodo from "../../components/NewTodo";
import Todo from "../../components/Todo";
import { Container } from "react-bootstrap";
import "./index.css";

class Contact extends Component {
  state = {
    tasks: [],
    text: "",
    counter: 1,
    open: true,
  };
  handelClick() {
    if(this.state.text!==""){
       /* Tasks([...tasks,{name:text, key: counter}])
        setText("")
        setOpen(true)
       setCounter(counter+1)*/
       this.setState({
        text: "",
        tasks: [...this.state.tasks,{name:this.state.text, key: this.state.counter}],
        counter: this.state.counter+1,
        open: true,
    }); 
    } 
  }
  handelChange(val) {
    this.setState({
        text: val,
        tasks: this.state.tasks,
        counter: this.state.counter,
        open: this.state.open,
    }); 
  }
   handleck=(id)=>{
 
    this.setState({
      
    tasks : this.state.tasks.filter(item=>item.key!=id),
    text: this.state.text,
    counter: this.state.counter,
    open: this.state.open,
    })
    if (this.state.tasks.length<1)
    this.setState({
      tasks : this.state.tasks,
      text: this.state.text,
    counter: this.state.counter,
    open: false,
  })
    
  }
  


  render() {
    return (
      <div>
         
        <Container>
        <h1>Contact</h1>
          <NewTodo
            clickme={()=>this.handelClick()}
            change={(e) => this.handelChange(e.target.value)}
            mytext={this.state.text}
          />
          {this.state.tasks.map((item) => (
            <Todo text={item.name} cle={item.key} bg="black" cl="white"  clik={(e) => this.handleck(e.target.id)}/>
          ))}
        </Container>
      </div>
    );
  }
}

export default Contact;
