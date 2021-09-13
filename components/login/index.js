import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthUserContext"

import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();

  const onSubmit = event => {
    setError(null)
    signInWithEmailAndPassword(email, password)
    .then(authUser => {
      console.log("Usuário Logado com Sucesso !")
      router.push('/');
    })
    .catch(error => {
      setError(error.message)
    });
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

      <Row style={{maxWidth: '400px', margin: 'auto', padding: '1px'}}>
        <Col>
          <Form onSubmit={onSubmit}>

            <FormGroup row>
              <Label for="loginEmail" className="form-label" >Email</Label>
              <Col>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="loginEmail"
                  placeholder="Email" />
                </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="loginPassword" className="form-label" >Password</Label>
              <Col>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="loginPassword"
                  placeholder="Password" />
              </Col>
            </FormGroup>

            <Row style={{ padding: '10px 0px'}}></Row>
            
            <FormGroup row>
             <Col>
               <Button className="button"><span>Login</span></Button>
             </Col>
            </FormGroup>

            <Row style={{ padding: '5px 0px'}}></Row>

            <FormGroup row>
            <Col style={{ padding: '0px 110px'}}>
            <Link href="./resetpswform">Forgot your password?</Link><Label className="form-label"> No account? <Link href="../sign_up">Create one</Link></Label>
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
