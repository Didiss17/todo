import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import Story from './pages/Story';
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Cars from "./pages/Car"
import {fetchCars} from "./actions/addcaraction";
import {getData} from "./actions/addcaraction";
import { getAll } from "./Service/Firebase/firebaseService";
import {useList} from "react-firebase-hooks/database";
import {useEffect} from "react"
import {useSelector,useDispatch} from 'react-redux';
import Login from "./pages/Login"
import  Inscription from "./pages/Inscription"
import { getUser } from "./Service/Firebase/firebaseUser";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const[cars,loading,error]=useList(getAll())
  useEffect(()=>{
    const mylist=cars.map(item=>{var newitem= item.val();newitem.id=item.key;return newitem});    
    dispatch(fetchCars(mylist))
  },[cars])
  
  return (
    <div className="App">
     {console.log('testt',getUser())}
      <Router>
      <Header></Header>
       <Switch>
          <Route path="/home">
            {getUser()&&getUser().email ?<Home />: <h2>non autorisé</h2>}
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/cars">
            <Cars/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/inscription">
            <Inscription/>
          </Route>
       
        </Switch>
        </Router>
        <Footer></Footer>
    </div>
  );
}

export default App;
