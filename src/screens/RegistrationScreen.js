import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { register } from "../actions/userActions";


function RegistrationScreen(){
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = "/login"

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    useEffect(() => {
        if(userInfo){
            navigate(login);
        } else if (error){
            console.log(error)
        }

    }, [userInfo, error, navigate])

    const submitHandler = (e) => {
        e.preventDefault();
    
        if (!username || !email) {
          setMessage("username and email are required.");
          return;
        }
    
        if (password.length < 8) {
          setMessage(
            "Password must contain at least 8 characters."
          );
          return;
        }
        dispatch(register(username, email, password));
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
              <Card style={{ width: '22rem', padding: '1.5rem', borderRadius: '1rem' }}>
                <Card.Body>
                  <Card.Title className="text-center mb-4">Sign Up</Card.Title>
                  {message && <Message variant="primary">{message}</Message>}
                  {loading && <Loading/>}
                  <Form onSubmit={(e) => submitHandler(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
        
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="username" placeholder="Enter username" required onChange={(e) => setUsername(e.target.value)}/>
                    </Form.Group>
        
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
        
                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Sign up
                      </Button>
                    </div>
                  </Form>
                  <Link
                  to="/login"
                >
                 Log In
                </Link>
                </Card.Body>
              </Card>
            </div>
    )
}

export default RegistrationScreen;

