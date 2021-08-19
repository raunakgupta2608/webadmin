import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const Login = ({ setToken }) => {
    const style = { 
        backgroundColor: '#333', 
        borderColor: '#333',
        marginTop: '7%',
        marginLeft: '25%',
        width: '50%',
        height: '50%'
      };

    const [login, setLogin] = useState({username:"", password:""});
    const [disable, setDisable] = useState(false);
    const history = useHistory();

    const {username, password} = login;

    const updateField = (e) => {
        setLogin({...login, 
            [e.target.id] : e.target.value
        });
    };

    const Enter = (e) => {
        if(e.key === "Enter") document.getElementById("submitBtn").click();
    }

    const formData = (e) => {    
        if(username!== "" && password!=="") {
            setLogin({username:"", password:""});
            setToken(username);
            history.push('/home');
        }
    }


  return (
    <div>
        <Card body inverse style={style} >
            <CardBody>
                <CardTitle  style={{fontSize: "2rem"}}>Please Enter your Login Details</CardTitle>
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
                        onChange={updateField} onKeyPress={e => Enter(e)}
                        />
                        <FormText id="passwordError" className="alert-warning"></FormText>
                    </FormGroup>
                </Form>
                <Button type="submit" id="submitBtn" disabled={disable} style={{margin: "3% 0%"}} onClick={formData}>Submit</Button>
            </CardBody>
        </Card>
    </div>
  );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;