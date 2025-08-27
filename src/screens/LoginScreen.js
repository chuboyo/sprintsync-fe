import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { login } from "../actions/userActions";


function LoginScreen(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if(userInfo){
            console.log("successful")
        } else if (error){
            console.log(error)
        }

    }, [userInfo, error, navigate])

    const submitHandler = (e) => {
        e.preventDefault();
    
        if (!username) {
          setMessage("username and email are required.");
          return;
        }
    
        if (password.length < 8) {
          setMessage(
            "Password must contain at least 8 characters."
          );
          return;
        }
        dispatch(login(username, password));
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
              <Card style={{ width: '22rem', padding: '1.5rem', borderRadius: '1rem' }}>
                <Card.Body>
                  <Card.Title className="text-center mb-4">Login</Card.Title>
                  {message && <Message variant="primary">{message}</Message>}
                  {loading && <Loading/>}
                  <Form onSubmit={(e) => submitHandler(e)}>
        
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
                        Login
                      </Button>
                    </div>
                  </Form>
                  <Link
                  to="/"
                >
                 Register
                </Link>
                </Card.Body>
              </Card>
            </div>
    )
}

export default LoginScreen;