import React from 'react'
import { Button, FormControl, FormGroup } from 'react-bootstrap'
import { Form } from 'react-router-dom'

export default function AdminLogin() {
    function handleClick(e){
        e.preventDefault();
        console.log('logging from admin component');
    }
    return (
        <div>
            <Form method='post' >
                <FormGroup>
                    <FormControl type='email'>
                    </FormControl>
                    <FormControl type='password'>
                    </FormControl>
                    <Button type='submit' onClick={(e)=>handleClick(e)}>
                        Submit
                    </Button>
                </FormGroup>
            </Form>
        </div>
    )
}
