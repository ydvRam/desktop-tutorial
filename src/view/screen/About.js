import {
  about_sec,
  about_img,
  design,
  who,
  lorem1,
  button,
} from "../data/Data";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Card from 'react-bootstrap/Card';
function About() {
  return (
    <div className="home">
      <Container fluid className="about-bt">
        <Row>
         <Col>
         <Card style={{background:'orange',border:'none'}}>
      <Card.Header as="h5" style={{border:'none',textAlign:'center',marginTop:'10px'}}>ABOUT US</Card.Header>
      <Card.Body  style={{border:'none',textAlign:'center',marginTop:'70px'}}>
        <Card.Title>Simplicity and durability are our guiding principles. We combine our innovative design and handcrafted construction with high-quality materials. This results in heavy-duty bed frames with a massive weight capacity. We guarantee the safety of adults of all shapes and sizes.</Card.Title>
  
        <Button variant="primary" style={{border:'none',textAlign:'center',marginTop:'90px'}}>READ MORE</Button>
      </Card.Body>
    </Card>
         </Col>
          <Col md={6} className="abt-img">
            {about_img.map(function (d) {
              return (
                <>
                  <img src={d.image} />
                </>
              );
            })}
          </Col>
        </Row>
      </Container>
      <Container fluid className="aboutus">
        <Row className="aboutrow1">
          {design.map(function (d) {
            return <p>{d.head}</p>;
          })}
        </Row>
        <Row className="aboutrow2">
          {who.map(function (d) {
            return <p className="font4">{d.inno}</p>;
          })}
        </Row>
        <Row className="aboutrow3">
          {lorem1.map(function (d) {
            return <p className="font5">{d.lorem}</p>;
          })}
        </Row>
      </Container>
    </div>
  );
}
export default About;
