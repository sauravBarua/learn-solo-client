import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LeftSideNav from '../components/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
      <div>
        <Header></Header>
          <Container>
            <Row lg = "4">
              <Col>
              <LeftSideNav></LeftSideNav>
              </Col>
              <Col lg = "8">
              <Outlet></Outlet>
              </Col>
            </Row>
        </Container>
        <Footer></Footer>
      </div>
    );
};

export default Main;