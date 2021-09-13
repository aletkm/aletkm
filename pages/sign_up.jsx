import { useState } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '../context/AuthUserContext';

import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  //Optional error handling
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = event => {
    setError(null)
    if(passwordOne === passwordTwo)
      createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log("Success. The user is created in firebase")
        router.push("/logged_in");
      })
      .catch(error => {
        setError(error.message)
      });
    else
      setError("Password do not match")
    event.preventDefault();
  };

  return (
    <div className="fundo">
    <div className='login-form'>
    <Container>
      <Row style={{ padding: '10px 110px'}}> 
        <Col >
        <a className="logo" href="./" alt="Profane MMORPG">Logo</a>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form style={{maxWidth: '400px', margin: 'auto'}} onSubmit={onSubmit}>
          
            <FormGroup row>
              <Label for="signUpEmail" className="form-label">Email</Label>
              <Col>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="signUpEmail"
                  placeholder="Email" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword" className="form-label">Password</Label>
              <Col>
                <Input
                  type="password"
                  name="passwordOne"
                  value={passwordOne}
                  onChange={(event) => setPasswordOne(event.target.value)}
                  id="signUpPassword"
                  placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword2" className="form-label">Confirm Password</Label>
              <Col>
                <Input
                  type="password"
                  name="password"
                  value={passwordTwo}
                  onChange={(event) => setPasswordTwo(event.target.value)}
                  id="signUpPassword2"
                  placeholder="Password" />
              </Col>
            </FormGroup>

            <Row style={{ padding: '10px 0px'}}></Row>

            <FormGroup row>
             <Col>
               <Button className="button"><span>Sign Up</span></Button>
             </Col>
             <Col>
               <Button className="button" onClick={event =>  window.location.href='./'}><span>Cancel</span></Button>
             </Col>
           </FormGroup>
          </Form>
        </Col>
      </Row>

      <Row>
        { error && <Alert color="danger">{error}</Alert>}
      </Row>
    </Container>
    
    </div>
    </div>
  )
}

export default SignUp;
