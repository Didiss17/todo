import React,{useState}  from "react";
//IMPORTER BOUTTON ET FORM CONTROM DEPUIS BOOTSTRAP
import {Button,InputGroup,FormControl} from "react-bootstrap"
//POUR CREER UNE COMPOSANTE DE TYPE FONCTION 
const NewTodo = (props) => {
 
  //RETURN LA PARTIE HTML DE LA COMPOSANTE
  return (
    <div>
      <InputGroup className="mb-3">
        {/**APPLIQUER LE PROPS POUR RAPPEL SUR LA HOME */}
       <FormControl onChange={props.change}
          placeholder="To live list"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
         // VALUE SERT A CONTROLER DEPUIS LA SOURCE .
          value={props.mytext}
        />
        <InputGroup.Append>
         {/**APPLIQUER LE PROPS POUR RAPPEL SUR LA HOME */}
          <Button  variant="outline-primary" onClick={props.clickme}>ADD</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};
//EXPORT NECESSAIRE POUR IMPORTER LA COMPOSANTE 
export default NewTodo;