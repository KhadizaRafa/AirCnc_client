import React, { useRef, useState } from 'react';
import { Container, Form, Card, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {useAuth} from '../Contexts/AuthContext'

const ForgotPassword = () => {
    const emailRef = useRef();
    const {resetPassword} = useAuth();
    const [error,setError] = useState('');
    const [success,setSuccessMessage] = useState('');
    const [loading,setLoading] = useState(false); //used to disable submit button so that multiple account not created for user


async function handleSubmit(e) {
    e.preventDefault();
    try{
        setSuccessMessage('')
        setError('')
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setSuccessMessage('Password reset successfully.Please check your email for further instructions')
    }catch(error){
        let errorMessage = error.message;
        setError('Failed to reset password. '+ errorMessage)
    }
    setLoading(false)
    
}

    return (
        <Container className="d-flex align-items-center justify-content-center mt-5">
            <div className="w-100" style={{maxWidth: '400px'}}>
            <Card>
                <Card.Body>
                    <Card.Title>Password Reset</Card.Title>
                    { error && <Alert variant="danger">{error}</Alert>}
                    { success && <Alert variant="success">{success}</Alert>}
                    
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
                        </Form.Group>

                        <Button disabled={loading} className="w-100" variant="primary" type="submit">Reset Password</Button>
                    </Form>
                
                <Link to="/login">Login</Link>
                </Card.Body>
                <p className="w-100 text-center mt-2">Don't have an account? 
                <Link to="/signUp"> Sign Up</Link></p>
            </Card>
            </div>
        </Container>
    );
};

export default ForgotPassword;