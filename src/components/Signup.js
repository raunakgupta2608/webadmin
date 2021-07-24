import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardBody,
    CardTitle, Button, Form, FormGroup, Label, Input, FormText, CardText
  } from 'reactstrap';

const Signup = (props) => {
    const style = { 
        backgroundColor: '#333', 
        borderColor: '#333',
        marginTop: '7%',
        marginLeft: '25%',
        width: '50%',
        height: '50%'
    };

    const [signUp, setSignUp] = useState({username:"", password:"", repassword:""});
    const [disable, setDisable] = useState(false);
  
    const { username, password, repassword } = signUp;

    const Enter = (e) => {
        if(e.key === "Enter") document.getElementById("submitBtn").click();
    }

    const updateField = (e) => {
        setSignUp({...signUp, 
            [e.target.id]: e.target.value
        });
    }

    const formData = (e) => {
        // setDisable(!disable);
        console.log(signUp);
    }

    return (
        <>
        <Card body inverse className="card" style={style}>
            <CardBody>
              <CardTitle style={{fontSize: "2rem"}}>Create an Account!!</CardTitle>
                <Form>
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" value={username} id="username" placeholder="Please enter your Email"
                        onChange={updateField}
                    />
                    <FormText id="usernameError" className="alert-warning"></FormText>
                  </FormGroup>
                  <FormGroup style={{margin:"3% 0%"}}>
                    <Label for="password">Password</Label>
                    <Input type="password" value={password} id="password" placeholder="Please enter your Password"
                        onChange={updateField}
                    />
                    <FormText id="passwordError" className="alert-warning"></FormText>
                  </FormGroup>
                  <FormGroup style={{margin:"3% 0%"}}>
                    <Label for="repassword">Re-Enter Password</Label>
                    <Input type="password" value={repassword} id="repassword" placeholder="Please re-enter your Password"
                        onChange={updateField} onKeyPress={e => Enter(e)}
                    />
                    <FormText id="repasswordError" className="alert-warning"></FormText>
                  </FormGroup>
                </Form>
              <CardText>Already have an Account? <Link to="/login">Login</Link></CardText>
              <Button type="submit" id="submitBtn" disabled={disable} style={{margin: "3% 0%"}} onClick={formData} >Submit</Button>
            </CardBody>
        </Card>
        </>
    );
}

export default Signup;