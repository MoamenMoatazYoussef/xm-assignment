import { Navbar, Row, Col, Image } from 'react-bootstrap';
import logo from '../../../assets/logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="black" className="p-3">
            <Row className="w-100 justify-content-center justify-content-lg-between">
                <Col className="d-flex justify-content-center justify-content-lg-start">
                    <Image src={logo} />
                </Col>
                <Col className="d-none d-lg-block">
                    <Row className='d-flex justify-content-end mt-2'>
                        <Col lg={3}>
                            <p className="text-white m-0">XM Homepage</p>
                        </Col>
                        <Col lg={3}>
                            <p className="text-white m-0">Support</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
       </Navbar>
    );
}

export default Header;