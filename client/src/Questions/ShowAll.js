import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Row  , Col} from "react-bootstrap";
import {Link } from 'react-router-dom'
export const ShowAll = () => {
  const [exams, setExam] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/exam/api/exams")
      .then(res => console.log(setExam(res.data)))
      .catch(err => console.log(err));
  });
  const allExam = exams.map(ele => {
    return (
        <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{ele.title}</Card.Title>

        <Link to = {`/Exams/${ele._id}`}> <Button variant="primary">Go to the Exam</Button></Link> 
         
        </Card.Body>
      </Card>
      </Col>
    );
  });
  return (
    <div>
      <Container>
        <Row>{allExam}</Row>
      </Container>
    </div>
  );
};
