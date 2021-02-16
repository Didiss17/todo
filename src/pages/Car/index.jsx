import React,{useState}  from "react";
import AddCar from "../../components/Addcar";
import NewCar from "../../components/Car";
import { Container } from "react-bootstrap";
import {useSelector,useDispatch} from 'react-redux';
import {addcar,carcounter,deleteCar} from "../../actions/addcaraction"

import "./index.css";

const Car = (props) => {
  const dispatch = useDispatch();
  const myTasks = useSelector((store) => store.addcarreducer.cars);
  const counter = useSelector((store) => store.addcarreducer.counter);
  const [open,setOpen]=useState(false)
  const[description,setDescription]=useState("")
  const[title,setTitle]=useState("")  
  const[image,setImage]=useState("")  

  const handelClick = () => {
    if (title !== "" && description !== "" && image !== "") {
     
      dispatch(addcar({ title:title,image:image,description:description,key: counter }));
      setTitle("");
      setDescription("");
      setImage("");
      setOpen(true);
      dispatch(carcounter());
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
  const handleck = (e) => {
console.log(e)
    dispatch(deleteCar(e.target.id));
  };
  return (
    <div>
      <Container>
        <AddCar
          clickme={handelClick}
          change={(e)=>handelChange(e)}
          title={title}
          description={description}
          image={image}
        
        />

        <div className="flex">
        {myTasks.map(item=><NewCar  description={item.description} title={item.title} image={item.image} cle={item.key} click={(e)=>handleck(e)}/>)}
          
        </div>
      </Container>
    </div>
  );
};

export default Car;
