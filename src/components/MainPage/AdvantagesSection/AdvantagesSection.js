import { Container, Row, Col, Card } from "react-bootstrap";

const AdvantagesSection = () => {
    return (
        <Container className="px-5">
            <Container className="pt-5 p-3 text-white">
                <Row className="text-center text-uppercase"><h1>Why <b>Trade</b> with XM?</h1></Row>
                <Container className="d-flex justify-content-center">
                    <hr className="horizontal-line-width horizontal-line-green horizontal-line-border-width horizontal-line-border-color" />
                </Container>
                <Row className="text-center p-4">
                    <span>
                        We have been providing traders around the world
                        with the same <b>premium experience</b> for over a decade. As an <b>industry-leader,</b> we know what the modern trader needs to be successful in the markets.
                    </span>
                </Row>
            </Container>
            <Container className="pt-5 p-1">
                <Row xs={1} lg={2} className="justify-content-center">
                    <Col className="px-1 mb-2 d-flex align-items-stretch justify-content-center" lg={3}>
                        <Card className="card-border-rounded w-100 p-3 advantage-card-background-color-navy">
                            <Card.Title className="text-white">Superior Trade Execution</Card.Title>
                            <hr className="horizontal-line-width horizontal-line-green horizontal-line-border-width horizontal-line-border-color" />
                            <Card.Body className="text-white">
                                99% of trades are executed in less than a second, with no requotes or rejections.
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="px-1">
                        <Row>
                            <Col className="mb-2 d-flex justify-content-sm-center">
                                <Card className="card-border-rounded w-100 p-3 advantage-card-background-color-navy">
                                    <Card.Title className="text-white">Competitive Pricing</Card.Title>
                                    <hr className="horizontal-line-width horizontal-line-green horizontal-line-border-width horizontal-line-border-color" />
                                    <Card.Body className="text-white">
                                    We offer some of the lowest spreads and we don’t charge commissions.
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row xs={1} lg={2}>
                            <Col className="mb-2 d-flex justify-content-sm-center">
                                <Card className="card-border-rounded w-100 p-3 advantage-card-background-color-navy">
                                    <Card.Title className="text-white">Advanced Technology</Card.Title>
                                    <hr className="horizontal-line-width horizontal-line-green horizontal-line-border-width horizontal-line-border-color" />
                                    <Card.Body className="text-white">
                                    Trade on MT4 or MT5, with expert tools, across desktop, web and mobile.
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="mb-2 d-flex justify-content-sm-center">
                                <Card className="card-border-rounded w-100 p-3 advantage-card-background-color-navy">
                                    <Card.Title className="text-white">Start with $5</Card.Title>
                                    <hr className="horizontal-line-width horizontal-line-green horizontal-line-border-width horizontal-line-border-color" />
                                    <Card.Body className="text-white">
                                    Start trading your preferred instruments with as little as a $5 minimum deposit.
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default AdvantagesSection;