import { useState, useEffect } from "react";
import { Col, Container, ProgressBar, Row, Button, Form, ControlLabel } from "react-bootstrap";

const RegistrationForm = () => {
    const [currentProgress, setCurrentProgress] = useState(0);
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    useEffect(() => {
        if (email.length)
            setCurrentProgress(1.5);
        else if (name.length)
            setCurrentProgress(0.5);
    }, [name, dob, email, pass]);

    return (
        <Container>
            <Row xs={1} md={2}>
                <Col className={currentProgress >= 1 ? "d-none d-md-block" : ""}>
                    <Row className={`py-1`}>
                        <Col xs={1}>
                            <div className="h-100 text-center step-number-border-rounded step-number-background-green step-number-width text-white">1</div>
                        </Col>
                        <Col className="p-md-0">
                            <div className="text-white">Step 1</div>
                        </Col>
                    </Row>
                    <ProgressBar variant="success" now={currentProgress * 100} />
                </Col>
                <Col className={currentProgress < 1 ? "d-none d-md-block" : ""}>
                    <Row className={`py-1`}>
                        <Col xs={1}>
                            <div className={`text-center step-number-border-rounded step-number-width ${currentProgress >= 1 ? "step-number-background-green text-white" : "bg-white text-black"}`}>2</div>
                        </Col>
                        <Col className="p-md-0">
                            <div className="text-white">Step 2</div>
                        </Col>
                    </Row>
                    <ProgressBar variant="success" now={(currentProgress - 1) * 100} />
                </Col>
            </Row>

            <Row xs={1} md={2}>
                <Col>
                    <div className={currentProgress >= 1 ? "d-none" : "d-block"}>
                        <div className="text-white">Full Name:</div>
                        <Form.Control
                            type="text"
                            placeholder="John Doe Doe"
                            aria-label="Full Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className={currentProgress < 1 ? "d-none" : "d-block"}>
                        <div className="text-white">Email:</div>
                        <Form.Control
                            type="text"
                            placeholder="email@email.com"
                            aria-label="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </Col>
                <Col>
                    <div className={currentProgress >= 1 ? "d-none" : "d-block"}>
                        <div className="text-white">Date of Birth:</div>
                        <Form.Control
                            type="date"
                            placeholder="Date of birth"
                            aria-label="Date of birth"
                            onChange={(e) => setDob(e.target.value)}
                        />
                    </div>

                    <div className={currentProgress < 1 ? "d-none" : "d-block"}>
                        <div className="text-white">Password:</div>
                        <Form.Control
                            type="text"
                            placeholder=""
                            aria-label=""
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="text-center p-2 mt-3 m-lg-3">
                <Button
                    disabled={currentProgress === 0.5 || (currentProgress === 1.5 && pass.length) ? false : true}
                    onClick={(e) => currentProgress < 1 ? setCurrentProgress(1) : setCurrentProgress(2)}
                    className="button-background-color-green button-sharp-corners button-font text-uppercase">
                    {currentProgress >= 1 ? "Register Now" : "Continue"}
                </Button>
            </Row>
            <Row className="text-center text-white">
                <span>Don't have an account<u><a className="text-color-red">Create one here</a></u> and register for the event</span>
            </Row>
            <Row className="text-center text-white">
                <span>
                    Terms and conditions apply
                    <span className="text-color-red">*</span>.
                    To read the full T&Cs, <u className="text-color-red"><a>click here</a></u>
                </span>
            </Row>
        </Container>
    );
}

export default RegistrationForm;