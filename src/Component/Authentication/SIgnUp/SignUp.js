import React, { useRef, useState } from 'react';
import { Container, Form, Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../Contexts/AuthContext';
import { connect } from 'react-redux';

const SignUp = (props) => {
    const travelInfo = props.travelInfo.travelInfo[0]
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth();
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false); //used to disable submit button so that multiple account not created for user
    const history = useHistory();

async function handleSubmit(e) {
    e.preventDefault();
    if(passwordRef.current.value !== passwordConfirmRef.current.value)
        return setError('Passwords do not match')
    try{
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        travelInfo ? history.push('/user-profile') : history.push('/')
    }catch(error){
        let errorMessage = error.message;
        setError('Failed to create an account '+errorMessage)
    }
    setLoading(false)
    
}

    return (
        <Container className="d-flex align-items-center justify-content-center mt-5">
            <div className="w-100" style={{maxWidth: '400px'}}>
            <Card>
                <Card.Body>
                    <Card.Title>Sign Up</Card.Title>
                    { error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="confirm-password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} placeholder="Confirm Password" />
                        </Form.Group>

                        <Button disabled={loading} className="w-100" variant="primary" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
                <p className="w-100 text-center mt-2">Already have an account?
                 <Link to="/login"> Login</Link></p>
            </Card>
            </div>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        travelInfo: state.travelInfo
    }
}
export default connect(
    mapStateToProps
)(SignUp);