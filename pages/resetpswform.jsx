import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';
import Modal  from '../components/Modal'

const ResetPsw = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  //Optional error handling
  const [error, setError] = useState(null);

  const { sendPasswordResetEmail } = useAuth();

  const onSubmit = event => {
    setError(null)
    sendPasswordResetEmail(email)
      .then(authUser => {
        <Modal show={false} message={"Se este email estiver cadastrado, o mesmo receberá uma mensagem contendo um link com orientações para restaurar a Senha."} />
        console.log("Success. Email Sent !")
        router.push("./");
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

            <Row style={{ padding: '10px 0px'}}></Row>

            <FormGroup row>
             <Col>
               <Button className="button"><span>Enviar</span></Button>
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

export default ResetPsw;
