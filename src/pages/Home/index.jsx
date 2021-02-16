import React,{useState}  from "react";
import { Card } from "react-bootstrap";
import NewTodo from "../../components/NewTodo";
import Todo from "../../components/Todo";
import "./index.css";
import {Container} from "react-bootstrap"
import {addTaskHome,Counter,Delete} from '../../actions/todo action'
import {useSelector,useDispatch} from 'react-redux';

//PAGE HOME _ FONCTION MERE
const Home = (props) => {

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
    const handeDelete=(e)=>{
      //setTasks(tasks.filter(item=>item.key!=e.target.id))
      dispatch(Delete(e.target.id))
    }
  return (
    <div id="container">
        <Container>
          <h1>HOME</h1>
      <NewTodo clickme={handelClick}  change= {handelChange} mytext={text} />
       <div id="todo" >
      {myTasks.map(item=><Todo text={item.name} cle={item.key}bg="black" cl="white" clik={handeDelete}/>)}

      </div>
      </Container>
    </div>
  );
};

export default Home;
