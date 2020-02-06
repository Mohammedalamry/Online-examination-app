import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


export const Question = () => {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2"><h5>the Question</h5></Col>

                </Row >
                <Row className="justify-content-md-center">
                    <Col xs lg="2"><h5>the Question</h5></Col>
                    <Col xs lg="2"><h5>the Question</h5></Col>
                </Row>

            </Container>

        </div>
    )
}
