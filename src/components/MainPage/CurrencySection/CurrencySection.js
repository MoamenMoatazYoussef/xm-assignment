import { faCircleChevronDown, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Container, Card } from "react-bootstrap";

const CurrencySection = ({ currencyRates }) => {
    return (
        <Container className="d-flex justify-content-center py-3">
            <Row className="w-100 justify-content-center" sm={1} md={3} lg={5}>
                {currencyRates ? currencyRates.map(currencyRate =>
                    <Card className="card-border-rounded currency-card-border-gray bg-opacity-25 m-1 p-4" bg="dark">
                        <Card.Title>
                            <span className="text-white">{currencyRate.symbol}</span>
                            <span className="m-1 px-1 div-border-rounded text-uppercase background-color-beige text-font-small">
                                {currencyRate.name}
                            </span>
                        </Card.Title>
                        <hr className="text-white"></hr>
                        <Card.Body className="p-0">
                            <div className="text-white">${currencyRate.price_usd}</div>
                            {parseFloat(currencyRate.percent_change_24h) > 0
                                ? <span className="currency-percentage-green">
                                    <FontAwesomeIcon icon={faCircleChevronUp} />
                                    <span> {Math.abs(parseFloat(currencyRate.percent_change_24h))}</span>
                                </span>
                                : <span className="currency-percentage-red">
                                    <FontAwesomeIcon icon={faCircleChevronDown} />
                                    <span> {Math.abs(parseFloat(currencyRate.percent_change_24h))}</span>
                                </span>
                            }
                        </Card.Body>
                    </Card>
                ) : <></>}
            </Row>
        </Container>
    );
}

export default CurrencySection;