import React,{useState}  from "react";
import { Card } from "react-bootstrap";
import NewTodo from "../../components/NewTodo";
import Todo from "../../components/Todo";
import "./index.css";
import {Container} from "react-bootstrap"

//PAGE HOME _ FONCTION MERE
const Home = (props) => {
  // STATE POUR MONTRER OU FAIRE APPARAITRE UNE DIV
  const [open,setOpen]=useState(false)
  //STATE POUR 
  const[counter,setCounter]=useState(1)
  
//STATE PROPS POUR CHANGER LES PROPRIETES
    const[bgcolor,setBgcolor]=useState("green")
//STATE POUR STOCKER LA LISTE DES TASKS SOUS FORME {name:valeur;key:valeur}
    const[tasks,setTasks]=useState([
      
  ])
  //STATE POUR STOCKER LA VALEUR DU TEXTE
  const[text,setText]=useState("") 
  
//FONCTION POUR APPLIQUER
    const handelClick=()=>{
       // setBgcolor("red")
       if(text!==""){
       setTasks([...tasks,{name:text, key: counter}])
       setText("")
       setOpen(true)
      setCounter(counter+1)
      }
      
    }
    const handelChange=(event)=>{
      console.log(event.target)
      setText(event.target.value)
      
   }
    const handleck=(e)=>{
      setTasks(tasks.filter(item=>item.key!=e.target.id))
      if (tasks.length<=1)
      
{setOpen(false)}     
 console.log(e)
    }
  return (
    <div id="container">
        <Container>
          <h1>HOME</h1>
      <NewTodo clickme={handelClick}  change= {handelChange} mytext={text} />
      {open && <div id="todo" >
      {tasks.map(item=><Todo text={item.name} cle={item.key}bg="black" cl="white" clik={handleck}/>)}

      </div>}
      </Container>
    </div>
  );
};

export default Home;
