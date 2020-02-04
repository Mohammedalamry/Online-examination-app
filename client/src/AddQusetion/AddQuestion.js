import React, { useState, useEffect } from 'react'
import { InputGroup, FormControl, Container, Row, Col, Button } from 'react-bootstrap'
import { AddOneQuetion } from './AddOneQuestion'
import axios from 'axios'
export const AddQuetion = () => {
    const [qc, setQc] = useState([])
    const [title, setTitle] = useState("z")
    const [open, setOpen] = useState(false)

    const AddTheQuetstionFunc = (data) => {

        setOpen(!open)
        if (data) {
            var seta = qc
            seta.push(data)
            setQc(seta)
            console.log(qc)
        }
    }
    useEffect(() => {
        
        console.log(title)
    });

    const onSubmit = () => {
        axios.post("http://localhost:3001/exam/api/exams", { title: title, theQuestion: qc })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <Container className="Exam">
                <Row >
                    <Col md={{ span: 4, offset: 4 }} >
                        <InputGroup.Text id="inputGroup-sizing-sm">Name Of Your Exam</InputGroup.Text>
                    </Col>
                    <Col md={{ span: 4, offset: 0 }}>
                        <h5>Number of Your Question {qc.length}</h5>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={4} >
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <br />
                            </InputGroup.Prepend>
                            <FormControl onChange={e => setTitle(e.target.value)} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                    </Col>
                </Row>
                {open && <AddOneQuetion AddTheQuetstionFunc={AddTheQuetstionFunc} />}
                <Row className="justify-content-md-right" >
                    <Col md={{ span: 2, offset: 10 }}> <Button onClick={() => setOpen(!open)}>Add Question</Button></Col>
                </Row>
                <Button variant="success" onClick={onSubmit}>Submit !!</Button>
            </Container>

        </div >
    )
}
