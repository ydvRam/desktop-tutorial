import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/view/screen/Home";
import Contact from "../src/view/screen/Contact";
import About from "../src/view/screen/About";
import Service from "./view/screen/Service";
import style from "../src/view/style/style.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { NavImg } from "./view/data/Data";
import { FiPhoneCall } from "react-icons/fi";

function NavScrollExample() {
  return (
    <BrowserRouter>
      <Navbar expand="lg" className="b">
        <Container fluid>
          <div className="header-img">
            {NavImg.map(function (d) {
              return (
                <div className="img">
                  <img src={d.Image} />
                </div>
              );
            })}
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
              style={{ paddingLeft: "20%" }}
            >
              <Nav.Link className="name" href="/">
                Home &nbsp;&nbsp;
              </Nav.Link>
              <Nav.Link className="name" href="/About">
                About Us &nbsp;&nbsp;
              </Nav.Link>
              <Nav.Link className="name" href="/Conatct">
                Conatct &nbsp;&nbsp;
              </Nav.Link>
              <Nav.Link className="name" href="Service">
                Services
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Conatct" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavScrollExample;
