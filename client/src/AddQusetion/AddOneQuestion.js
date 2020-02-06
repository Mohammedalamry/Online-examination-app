import React, { useState } from 'react'
import { InputGroup, FormControl, Row, Col, Form, Button, Alert } from 'react-bootstrap'
export const AddOneQuetion = ({ AddTheQuetstionFunc }) => {
    const [Qc, setQc] = useState({})
    const [alert, setAlert] = useState(false)
    const onChane = (e) => {

        setQc({ ...Qc, [e.target.name]: e.target.value })
        console.log(Object.keys(Qc).length)
    }
    return (

        <div className="QC">
            {alert && <Alert variant={"dark"}>You Need To fill all the Option!!! </Alert>}
            <Row className="justify-content-md-center qc">
                <Col md="4" >
                    <label htmlFor="basic-url">Your question</label>
                    <Form.Control onChange={onChane} name="theQuestion" type="name" placeholder="Your question" />
                </Col>
            </Row>
            <Row >
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox name="correct_answer" value={Qc.first_Option} aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>
                        <FormControl onChange={onChane} name="first_Option" placeholder="first Option" aria-label="Text input with checkbox" />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox onChange={onChane} name="correct_answer" value={Qc.sec_Option} aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>
                        <FormControl onChange={onChane} name="sec_Option" placeholder="second Option" aria-label="Text input with checkbox" />
                    </InputGroup>
                </Col>
            </Row>
            <Row >
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox onChange={onChane} value={Qc.thrid_Option} name="correct_answer" aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>
                        <FormControl onChange={onChane} name="thrid_Option" placeholder="thrid Option" aria-label="Text input with checkbox" />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox onChange={onChane} name="correct_answer" value={Qc.forth_Option} aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>
                        <FormControl onChange={onChane} name="forth_Option" placeholder="forth Option" aria-label="Text input with checkbox" />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Button style={{ margin: "3px" }} onClick={() => Object.keys(Qc).length == 6 ? AddTheQuetstionFunc(Qc) : setAlert(true)} >Submit </Button>
                    <Button variant="danger" style={{ margin: "3px" }} onClick={() => AddTheQuetstionFunc(false)} >Cancel </Button>

                </Col>
            </Row>
        </div>
    )
}
