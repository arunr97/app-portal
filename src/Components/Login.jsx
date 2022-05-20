import { Row,Col,Container,Button,Image,Stack} from "react-bootstrap";
import logo from "../images/Godrej-logo.png"
import login from "../images/Login.jfif"

export default function Login({callLogin}) {

    return (
        <Container className="login-container">
            <Row>
                <Col lg={9}><Image className="login-image" src={login}/> </Col>
                <Col>
                <Container className="login">
            <Row>
                <Col>
            <Image className="login-Logo" src={logo}/>   
            <br></br>
            <br></br>
            <h1>Customer Request Application</h1>
            </Col>
            </Row>
            <br></br>
                <br></br>
                <Row >
                    <Col>
                        <Button className="login-btn" onClick={()=> callLogin()}>Login</Button>
                    </Col>
                </Row>
            </Container>
                </Col>
            </Row>
            </Container>
            )
}