import { Navbar,Nav,Form , FormControl,Button } from "react-bootstrap";

import {
  Link
} from "react-router-dom";
const index = (props) => {
  return (
    <div >
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href=""><Link to="/home">Home</Link></Nav.Link>
          <Nav.Link href=""><Link to="/contact">Contact</Link></Nav.Link>
          <Nav.Link href=""><Link to="/story">Story</Link></Nav.Link>
          <Nav.Link href=""><Link to="/login">Login</Link></Nav.Link>
          <Nav.Link href=""><Link to="/inscription">Inscription</Link></Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default index;
