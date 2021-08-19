import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import CreateGroup from './CreateGroup';
import groupArrays  from '../Arrays';
import ListOfGroups from './ListOfGroups';
import { useHistory } from 'react-router';

const Home = (props) => {

  const styleForm = { 
    borderColor: 'rgb(51, 51, 51)',
    margin: '2% 10% 0 10%',
    width: "80%",
    height: "50%",
    color: '#fff',
    background: '#333',
    padding: '2%'
  };

  const [create, setCreate] = useState(false);

  const history = useHistory();

  const computePathname = (e)=> {
    // history.location.pathname('/creategroup');
    console.log(e.view.location.href);
    // e.view.location.href = e.view.location.href + "/creatgroup";
    setCreate(!create);
  };

  return (
    <>
    <Container style={styleForm}>
        <Row>
          <Col md={4}>
            <Button color="success" onClick={(e) => computePathname(e)}>Create Group</Button>
          </Col>
          <Col md={4}>
            <Button color="success" >List of Group</Button>
          </Col>
          <Col md={4}>
            <Button color="success">Find Group</Button>
          </Col>
        </Row>
    </Container>
    {
      create ? <CreateGroup/> : <ListOfGroups array={groupArrays}/>
    }
    </>
  );
}

export default Home;