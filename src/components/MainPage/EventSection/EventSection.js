import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row, } from "react-bootstrap";
import { faClock, faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const EventSection = () => {
    return (
        <Container>
            <Row className="justify-content-center my-5">
                <Col className="text-center">
                    <h1 className="text-white mb-3">- Register Here -</h1>
                    <span className="text-white">Join us to celebrate our biggest night of the year.</span>
                </Col>
            </Row>
            <Container className="text-white">
                <Row xs={1} md={3} className="text-center">
                    <Col className="border-bottom p-2">
                        <FontAwesomeIcon icon={faCalendar} />
                        <h2 className="text-uppercase">05 November 2022</h2>
                    </Col>
                    <Col className="border-bottom p-2">
                        <FontAwesomeIcon icon={faClock} />
                        <h2 className="text-uppercase">16:00-23:00</h2>
                    </Col>
                    <Col className="border-bottom p-2">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <h2>Centara Grand & Bangkok Convention Centre, Bangkok</h2>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default EventSection;