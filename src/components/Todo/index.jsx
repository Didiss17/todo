import React from "react";
//IMPORTER  REACT DEPUIS REACT
import { Card } from "react-bootstrap";
import "./index.css";
//IMPORTER CARD FROM BOOTSTRAP ET CSS DEPUIS SA SOURCE


//POUR CREER UNE COMPOSANTE DE TYPE FONCTION 
const Todo = (props) => {
  return (
    <div id="carda">
    {/* APPLIQUER PROPS POUR CHANGER LES PROPRIETES*/}  
    <Card style={{backgroundColor:props.bg,color:props.cl}}>
      {/* AJOUTER PROPS POUR CONTROLER LE TEXTE ET LEVENEMENT CLICK POUR LE BOUTTON */}  
      {/* ID PROPS.key POUR SUPPRIMER LE CHAMPS RELATIF A L'ID KEY DANS LA SOURCE  */}  
      <Card.Body className="bodycard"><span>{props.text}</span> <button onClick={props.clik} id={props.cle} type="button" class="btn btn-primary">Delete</button> </Card.Body>

    </Card>
    </div>
  );
};
//EXPORT NECESSAIRE POUR IMPORTER LA COMPOSANTE 
export default Todo;
