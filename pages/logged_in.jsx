import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';

import {Container, Row, Col, Button} from 'reactstrap';

const LoggedIn = () => {
  const { authUser, loading, signOut, fbToken } = useAuth();
  const router = useRouter();
  
  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading])

  return (
    
    <div className='login-form'>
    <Container>
      <Row style={{ padding: '20px 110px'}}> 
        <Col >
        <a className="logo" href="./" alt="Profane MMORPG">Logo</a>
        </Col>
      </Row>

      <Row style={{ padding: '20px 0px'}}></Row>

        {
          loading ?
            <Row>
              <Col>Loading....</Col>
            </Row> :
            <>
              <Row>
                <Col className="form-label">
                  { authUser && <div>Congratulations {authUser?.email}! You are logged in. Your UID is: {authUser?.uid} and Token is: {fbToken}</div> }
                </Col>
              </Row>
<Row>
<a href="./profile" alt="Profile">Profile</a>

</Row>
              <Row style={{ padding: '20px 0px'}}></Row>

              <Row>
                <Col>
                  <Button onClick={signOut} className="button"><span>Sign out</span></Button>
                </Col>
              </Row>
            </>
        }

      <Row style={{ padding: '60px 0px'}}></Row>

    </Container>
    </div>
    
  )
}

export default LoggedIn;
