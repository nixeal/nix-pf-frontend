import React, { useState, useEffect, useReducer, useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { FaEnvelope } from 'react-icons/fa';
import { FormControl, FormGroup, Card, Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const { theme } = useContext(ThemeContext)
  let initalState = { email: "", message: "", validated: false }
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validated, setValidated] = useState(false);
  const contactReducer = (state = initalState, action) => {
    switch (action.type) {
      case "SET_EMAIL":
        return { ...state, email: action.payload };
      case "SET_MESSAGE":
        return { ...state, message: action.payload };
      case "SET_VALIDATION":
        return { ...state, validated: action.payload };
      default:
        break;
    }
  }
  const [state, dispatch] = useReducer(contactReducer, initalState);


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // send email here
    }
    dispatch({ type: "SET_VALIDATION", payload: true });
  };

  useEffect(() => {
    if (validated) {
      setEmail('');
      setMessage('');
      setValidated(false);
    }
  }, [validated]);

  return (
    <Container className='vh-100' style={theme}>
      <div className='row flex-lg-row-reverse text-secondary align-items-center g-5 mt-5 py-4 ' style={theme} >
        <div className='g-row'>
              <Card className='w-50 h-50'>
                <Card.Header className='fs-3'> You can always contact me with your queries or information</Card.Header>
                <Card.Body>
                <Form>
                  <FormGroup className='m-1 p-1'>
                    <FormControl type='email' placeholder='please enter your email'className='m-2 p-1' >

                    </FormControl>
                    <FormControl type='text-area' placeholder='enter your query or comments' className='m-2 p-1'>

                    </FormControl>
                    <Button className='m-2 p-1'>Send</Button>
                  </FormGroup>
                </Form>
                </Card.Body>
              </Card>
        </div>
        </div>
    </Container>
  );
};

export default Contact;
