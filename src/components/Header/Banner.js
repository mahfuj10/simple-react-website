import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './style.css'

const Banner = () => {

    return (

   <div className="header">
        <Row>
        <Col lg={6} className="header-title">
            <p>WOMAN BESTSELLER LIST</p>
             <h1>New Collection <br /> <span style={{marginLeft:"85px"}}>- New Design</span></h1>
              <Button  className="shop-btn">
            SHOP NOW
            </Button>
          
        </Col>

        <Col lg={6}>
       
            <img style={{height:"600px"}} src="https://freepngimg.com/thumb/man/22539-8-man-file.png" alt="" />
        </Col>

    </Row>
   </div>
    


    );
};

export default Banner;