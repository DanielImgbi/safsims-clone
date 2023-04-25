import React from 'react';
import './Landing.css'
import { Row, Col, Container, } from 'react-bootstrap';
import { MyButton } from '../Button/Button';
import { MyCarousel } from '../MySlide/MyCarousel';


const Landing = () => {
  return (
    <Container>
          <Row xs={1} md={1}  xl={2} className='pt-4 mt-4'>
              <Col>
                  <h1 className='heading'>
                      A stress-free Way to <br/>Manage Your School
                  </h1>

                  <p className='parragraphs'>
                    Our state-of-the-art school management software is specifically designed for the unique needs of schools. 
                  </p>

                  <p className='parragraphs'>
                    Managing primary and secondary schools has never been easier! With SAFSIMS,
                    you can now confidently focus on what truly matters while relieving yourself of the workload
                    of day-to-day administrative tasks
                  </p>

                  <MyButton name={ 'Get started fro free'} />

              </Col>

              <Col > 
                  
                  <img src="public/safsims-imagery/Hero-1024x1021.png" alt="hero" className='img-fluid' />
              </Col>
          </Row>
          
          <Row xs={1} md={1}  xl={2}>
             <Col>
                <MyCarousel/>
             </Col>
          </Row>
    </Container>
  )
}

export default Landing