
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle } from 'reactstrap';
import {groups, } from '../App.css';

const CreateGroup = (props) => {
    const style = { 
        borderColor: 'rgb(51, 51, 51)',
        margin: '2% 12% 5% 12%',
        width: "76%",
        height: "50%",
        color: '#fff',
        background: '#333',
        padding: '2%'
    };

  return (
    <>
    <div>
      <Card style={style, {margin:"0% 12%", textAlign: "center"}}>
        <CardBody>
          <CardTitle tag="h3">Create a Group</CardTitle>
        </CardBody>
      </Card>
    </div>

    <Form className="groups" style={style}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="groupName">Group Name</Label>
            <Input type="text" name="groupNmae" id="groupName" placeholder="Group Name" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="project">Project Name</Label>
            <Input type="text" name="project" id="project" placeholder="Project Name" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="department">Department Name</Label>
            <Input type="text" name="department" id="department" placeholder="Department Name" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
            <FormGroup>
                <Label for="admin">Admin</Label>
                <Input type="text" name="admin" id="admin" placeholder="Admin"/>
            </FormGroup>
        </Col>
        <Col md={6}>
            <FormGroup>
                <Label for="listofusers">Add Users</Label>
                <Input type="text" name="listofusers" id="listofusers" placeholder="Add Users"/>
            </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </>
  );
}

export default CreateGroup;