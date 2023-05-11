import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { background, text, fur, lorem, furtinure } from "../data/Data";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  about_sec,
  about_img,
  design,
  who,
  lorem1,
  button,
} from "../data/Data";

function Home() {
  return (
    <div className="home">
      <container-fluid>
        <Card className=" bg-dark text-white ">
          {background.map(function (d) {
            return <Card.Img src={d.image} className="o" alt="Card image" />;
          })}

          <Card.ImgOverlay className="text">
            <Card.Title className="text-center color">
              {text.map(function (d) {
                return (
                  <>
                    <p className="font1">{d}</p>
                  </>
                );
              })}
            </Card.Title>
            <Card.Title className="text-center">
              <p className="font2">
                There are many variations of passages of Lorem Ipsum{" "}
              </p>
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      </container-fluid>
      <Container>
        <Row className="mt-5">
          {furtinure.map(function (d) {
            return (
              <>
                <Col lg={6} className="">
                  <Row>
                    <img
                      src={d.image}
                      style={{ width: "100%", height: "80%" }}
                    />
                  </Row>

                  <Row>
                    <h4 className="font3">{d.heading}</h4>
                  </Row>
                  <Row>
                    <h6 className="font4">{d.lorem}</h6>
                  </Row>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      <Container fluid className="about-bt">
        <Row>
          <Col>
            <Card style={{ background: "orange", border: "none" }}>
              <Card.Header
                as="h5"
                style={{
                  border: "none",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                ABOUT US
              </Card.Header>
              <Card.Body
                style={{
                  border: "none",
                  textAlign: "center",
                  marginTop: "70px",
                }}
              >
                <Card.Title>
                  Simplicity and durability are our guiding principles. We
                  combine our innovative design and handcrafted construction
                  with high-quality materials. This results in heavy-duty bed
                  frames with a massive weight capacity. We guarantee the safety
                  of adults of all shapes and sizes.
                </Card.Title>

                <Button
                  variant="primary"
                  style={{
                    border: "none",
                    textAlign: "center",
                    marginTop: "90px",
                  }}
                >
                  READ MORE
                </Button>
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
            return <p className="para">{d.head}</p>;
          })}
        </Row>
        <Row className="aboutrow2">
          {who.map(function (d) {
            return <>{d.inno}</>;
          })}
        </Row>
        <Row className="aboutrow3">
          {lorem1.map(function (d) {
            return <>{d.lorem}</>;
          })}
        </Row>
      </Container>
    </div>
  );
}
export default Home;
