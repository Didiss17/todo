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

function App() {
  return (
    <div className="App">
     
      <Router>
      <Header></Header>
       <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cars">
            <Cars/>
          </Route>
       
        </Switch>
        </Router>
        <Footer></Footer>
    </div>
  );
}

export default App;
