import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { Exam } from "./Exam";
export const ShowOne = ({ match }) => {

    const [theQuestion , setTheQuestion] =useState([])
    const [isStart , SetIsStart] = useState(true)
  useEffect(() => {
    axios.get(`http://localhost:3001/exam/Exams/${match.params.id}`)
    .then(res => setTheQuestion(res.data.theQuestion))
    .catch(err => console.log(err))

    
  });

  return (
    <div>
      {isStart ?  <Container style={{ marginLeft: "500px ", marginTop: "200px" }}>
        <Row className="justify-content-md-center">
          <Col>
            <Card border="light" style={{ width: "18rem" }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Light Card Title</Card.Title>
                <Card.Text>
                  the exam about {""} and have a number of {""} question
                </Card.Text>
                <Button onClick = {()=> SetIsStart(false)}>Start the Exam</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  </Container> : <Exam theQuestion= {theQuestion} />  }

     
    </div>
  );
};
