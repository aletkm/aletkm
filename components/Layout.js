import React from 'react';
import { Container } from 'reactstrap';
import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => (
  
  <>
    <Head>

    <meta charset="utf-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
    <meta name="theme-color" content="#000000"></meta>

      <title>Profane Profile Management</title>
      
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    
    </Head>
        
    <main id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container fluid={true}>{children}</Container>
      <div className="fixed-bottom"><Footer /></div>
    </main>
    
  </>
);

export default Layout;