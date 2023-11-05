import { Container, Button, Row, Col } from "react-bootstrap";
import '../../../App.scss';


const IntroSection = () => {
    return (
        <Container className="pt-5 p-3 text-white">
            <Row md={2} className="justify-content-center">
                <Col>
                    <Row className="text-center text-uppercase"><span>trade with</span></Row>
                    <Row className="text-center p-4">
                        <h2><b>Zero Swaps</b> on All XM Ultra Low Accounts for more than 25 instruments!</h2>
                    </Row>
                    <Row className="text-center">
                        <span>Enjoy spreads <b>as low as / pips</b> amd <b>leverage up to 1000:1</b> on instruments like <b>EURUSD, USDJPY, EURJPY, GBPUSD,</b> and <b>Gold.</b></span>
                    </Row>
                    <Row className="text-center p-2 mt-3 m-lg-3">
                        <Button className="button-background-color-green button-sharp-corners button-font">OPEN ACCOUNT</Button>
                    </Row>
                    <Row className="text-center">
                        <span>New to trading? Try a <u><a>Demo account.</a></u></span>
                    </Row>
                    <Row className="text-center">
                        <span>
                            Terms and conditions apply
                            <span className="text-color-red">*</span>.
                            To read the full T&Cs, <u className="text-color-red"><a>click here</a></u>
                        </span>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default IntroSection;