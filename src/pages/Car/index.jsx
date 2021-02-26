import React,{useState}  from "react";
import AddCar from "../../components/Addcar";
import NewCar from "../../components/Car";
import { Container } from "react-bootstrap";
import {useSelector,useDispatch} from 'react-redux';
import {addcar,carcounter,deleteCar} from "../../actions/addcaraction"

import "./index.css";
import{create, remove,update} from  "../../Service/Firebase/firebaseService"
const Car = (props) => {
  const dispatch = useDispatch();
  const myTasks = useSelector((store) => store.addcarreducer.cars);
  const counter = useSelector((store) => store.addcarreducer.counter);
  const [open,setOpen]=useState(false)
  const[description,setDescription]=useState("")
  const[title,setTitle]=useState("")  
  const[image,setImage]=useState("") 
   const [btn,setBtn]=
   useState({
     label:"Add",
     id:"Add"
   })
  const[selecteditem,setSelecteditem]=useState({})
  const handelClick = (e) => {
    switch(e.target.id){
      case "edit":
        update(selecteditem.id,{description:description,title:title,image:image})
        setTitle("");
          setDescription("");
          setImage("");
          setOpen(true);
          setBtn({label:"Add",id:"Add"})
          dispatch(carcounter());
      break;
      case "Add":
        if (title !== "" && description !== "" && image !== "") {
          create({ title:title,image:image,description:description,key: counter })
    
          //dispatch(addcar({ title:title,image:image,description:description,key: counter }));
          
          setTitle("");
          setDescription("");
          setImage("");
          setOpen(true);
          dispatch(carcounter());
        }
      break;


    }
    
  };
  const handelChange = (event) => {

    switch(event.target.id){
      case "title":
        setTitle(event.target.value)
        break;
        case "description":
        setDescription(event.target.value)
        break;
        case "image":
        setImage(event.target.value)
        break;
    }


    //setText(event.target.value);
  };
  const handleup =(e)=>{
    const selcteditem1=myTasks.filter(item=>item.title==e.target.id)[0]
    setSelecteditem(selcteditem1)
setBtn({label:"Edit",
id:"edit"})
    setTitle(selcteditem1.title);
    setDescription(selcteditem1.description);
    setImage(selcteditem1.image);
  }
  const handleck = (e) => {
console.log(e)
remove(e.target.id)
    //dispatch(deleteCar(e.target.id));
  };
  return (
    <div>
      <Container>
        <AddCar
          clickme={(e)=>handelClick(e)}
          change={(e)=>handelChange(e)}
          title={title}
          description={description}
          image={image}
          mych={btn.id}
          btnlabel={btn.label}
        
        />

        <div className="flex">
        {myTasks.map(item=><NewCar  description={item.description} title={item.title} image={item.image} cle={item.id} mykey={item.title} upclick={(e)=>handleup(e)}  click={(e)=>handleck(e)}/>)}
          
        </div>
      </Container>
    </div>
  );
};

export default Car;
