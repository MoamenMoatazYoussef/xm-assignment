import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import logo from "../../../assets/logo.png";


const EventGallerySection = ({ items }) => {
    return (
        <Container className="text-black pb-3 background-color-light-gray">
            <Row>
                <Col className="d-flex justify-content-center py-4">
                    <h1>Event Gallery</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel className="w-100" indicators={false} variant="dark">
                        {items.map(item =>
                            <Carousel.Item className="0">
                                <Container>
                                    <Row>
                                        <Col className=" d-flex justify-content-center">
                                            <Image src={item.img} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className=" d-flex justify-content-center">
                                            <span>{item.caption}</span>
                                        </Col>
                                    </Row>
                                </Container>
                            </Carousel.Item>
                        )}
                    </Carousel >
                </Col>
            </Row>
        </Container >
    );
}

export default EventGallerySection;