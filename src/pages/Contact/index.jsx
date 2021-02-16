/*import React, { Component } from "react";
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
      /* this.setState({
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
*/
import React,{useState}  from "react";
import { Card } from "react-bootstrap";
import NewTodo from "../../components/NewTodo";
import Todo from "../../components/Todo";
import "./index.css";
import {Container} from "react-bootstrap"
import {addTaskHome,Counter,Delete} from '../../actions/todo action'
import {useSelector,useDispatch} from 'react-redux';

//PAGE HOME _ FONCTION MERE
const Contact = (props) => {

  const dispatch = useDispatch();

  const myTasks = useSelector(store=> store.todoReducer.tasks)
  const counter = useSelector(store=> store.todoReducer.counter)

 


  // STATE POUR MONTRER OU FAIRE APPARAITRE UNE DIV
  const [open,setOpen]=useState(false)
  //STATE POUR 
  /*const[counter,setCounter]=useState(1)*/
  
//STATE PROPS POUR CHANGER LES PROPRIETES
const[bgcolor,setBgcolor]=useState("green")
//STATE POUR STOCKER LA LISTE DES TASKS SOUS FORME {name:valeur;key:valeur}
    //const[tasks,setTasks]=useState([])
  //STATE POUR STOCKER LA VALEUR DU TEXTE
  const[text,setText]=useState("") 
  
//FONCTION POUR APPLIQUER
    const handelClick=()=>{
       // setBgcolor("red")
       if(text!==""){
        dispatch(addTaskHome({name:text, key: counter}))
       //setTasks([...tasks,{name:text, key: counter}])


       setText("")
       setOpen(true)
       dispatch(Counter())
       

      /*setCounter(counter+1)*/
      }
      
    }
    const handelChange=(event)=>{
      setText(event.target.value)
      
   }
    const handleck=(e)=>{
      //setTasks(tasks.filter(item=>item.key!=e.target.id))
      dispatch(Delete(e.target.id))
    }
  return (
    <div id="container">
        <Container>
          <h1>HOME</h1>
      <NewTodo clickme={handelClick}  change= {handelChange} mytext={text} />
       <div id="todo" >
      {myTasks.map(item=><Todo text={item.name} cle={item.key}bg="black" cl="white" clik={handleck}/>)}

      </div>
      </Container>
    </div>
  );
};

export default Contact;