import React from 'react'
import {Col, Button, Form, Row} from 'react-bootstrap';


export default function ProjectForm() {
    return (
        <>
            <div className='container-box  shadow-lg p-3 mb-3'>
                <h2 className='text-start'>Create Project</h2>
                <Form>
                    <Form.Group as={Row}
                        className="mb-3"
                        controlId="form-email">
                        <Form.Label column
                            sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}
                        className="mb-3"
                        controlId="form-password">
                        <Form.Label column
                            sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="password"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}
                        className="mb-3">
                        <Col sm={10}>
                            <Button className='btn btn-lg btn-secondary' type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </>
    );
}

