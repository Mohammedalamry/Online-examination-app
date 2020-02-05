import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// _id: "5e3abe4125eb26a0e28910ef"
// theQuestion: "4+4"
// first_Option: "4"
// thrid_Option: "5"
// sec_Option: "8"
// forth_Option: "2"
// correct_answer: "4"
export const Exam = ({ theQuestion }) => {
  const [justOn, setJostOn] = useState(theQuestion[0]);
  const [i, setI] = useState(0);
  const [scor, setScor] = useState(0);
  useEffect(() => {
    setJostOn(theQuestion[i]);
  });

  const ChanegtheQuestion = e => {
    setI(i + 1);
    var text = e.target;

    if (theQuestion[i].correct_answer == text.id) {
      setScor(scor + 1);
    }

    console.log(scor);
    setJostOn(theQuestion[i]);
  };
  return (
    <div>
      <Container className="Exam1">
        {justOn ? (
          <>
            <Row className="justify-content-md-center">
              <Col style={{ textAlign: "center" }} md={{ span: 6, offset: 0 }}>
                <h2>{justOn.theQuestion}</h2>
              </Col>
            </Row>
            <Row style={{ marginTop: "40px" }}>
              <Col
                id="5"
                name="ss"
                style={{ textAlign: "center" }}
                md={{ span: 3, offset: 1 }}
              >
                <h5 onClick={ChanegtheQuestion} id={justOn.first_Option}>
                  1-{justOn.first_Option}
                </h5>
              </Col>
              <Col style={{ textAlign: "center" }} md={{ span: 3, offset: 3 }}>
                <h5 id={justOn.sec_Option} onClick={ChanegtheQuestion}>
                  2-{justOn.sec_Option}
                </h5>
              </Col>
            </Row>
            <Row style={{ marginTop: "40px" }}>
              <Col style={{ textAlign: "center" }} md={{ span: 3, offset: 1 }}>
                <h5 onClick={ChanegtheQuestion} id={justOn.thrid_Option}>
                  3-{justOn.thrid_Option}
                </h5>
              </Col>
              <Col style={{ textAlign: "center" }} md={{ span: 3, offset: 3 }}>
                <h5 onClick={ChanegtheQuestion} id={justOn.forth_Option}>
                  4-{justOn.forth_Option}
                </h5>
              </Col>
            </Row>{" "}
          </>
        ) : (
          <h1>Finish your Exaam with scor {scor}</h1>
        )}
      </Container>
    </div>
  );
};
