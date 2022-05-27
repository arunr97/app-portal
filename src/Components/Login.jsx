import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Logo from "../images/Logo.svg";
import { Person, Lock, EyeSlash, Eye } from "react-bootstrap-icons";
import { useState } from "react";

export default function Login({ callLogin }) {
  const [typePassword, setTypePassword] = useState("password");

  const changeType = () => {
    if (typePassword === "password") {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
  };

  return (
    <Container
      style={{
        background:
          "linear-gradient(to right,  #0D9DD7 0%,#0D9DD7 60%,#FFFFFF 40%,#FFFFFF 100%)",
        height: "100vh",
        margin: 0,
        padding: 0,
        maxWidth: "100%",
      }}
    >
      <Row style={{ margin: 0, padding: 0 }}>
        <Col md={8} style={{ margin: 0, padding: 0 }}></Col>
        <Col md={4} style={{ margin: 0, padding: 0 }}>
          <br />
          <br />
          <Image src={Logo} style={{ width: "90px", height: "40px" }} />
          <br />
          <br />
          <h1 style={{ fontSize: "3.5rem" }}>Customer Request Application</h1>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "20px",
            }}
          >
            <div style={{ borderBottom: "1px solid #979797", width: "53%" }}>
              <Person />
              <input
                type="text"
                placeholder="User Name"
                style={{
                  border: 0,
                  outline: 0,
                  fontSize: "16px",
                  marginLeft: "10px",
                  fontWeight: "500",
                }}
              ></input>
            </div>

            <div
              style={{
                borderBottom: "1px solid #979797",
                width: "53%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Lock />
              <input
                type={typePassword}
                placeholder="Password"
                style={{
                  border: 0,
                  outline: 0,
                  fontSize: "16px",
                  marginLeft: "10px",
                  fontWeight: "500",
                }}
              ></input>
              {typePassword === "password" ? (
                <EyeSlash onClick={changeType} />
              ) : (
                <Eye onClick={changeType} />
              )}
            </div>
          </div>
          <br />
          <br />
          <Button className="login-btn" onClick={() => callLogin()}>
            Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
