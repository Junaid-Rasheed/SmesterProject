import React from 'react'

import {Row,Col,Image, Container} from 'react-bootstrap'


 
export const AccessoriesMen = () => {
    return (
<div>
    <h5 style={{textAlign:"center", paddingTop:"1%",paddingBottom:"2%"}}>Accessories</h5>
    
    
    <Container fluid>
            <Row style={{justifyContent:"space-around"}}>
          
                <Col 
                    md={3} xs={6} ><a href="/">
                    <Image src="/Images/MenAsse/mass1.png" /></a>
                    <p style={{textAlign:"center"}}>Rs.5,593.00</p>
                </Col>
                <Col 
                    md={3} xs={6}><a href="/">
                    <Image src="/Images/MenAsse/mass2.png" /></a>
                    <p style={{textAlign:"center"}}>Rs.5,593.00</p>
                </Col>
                <Col 
                    md={3} xs={6} ><a href="/">
                    <Image src="/Images/MenAsse/mass3.png"  className="t3"/></a>
                    <p style={{textAlign:"center"}}>Rs.5,593.00</p>
                </Col>
                <Col 
                    md={3} xs={6} ><a href="/">
                    <Image src="/Images/MenAsse/mass4.png" /></a>
                    <p style={{textAlign:"center"}}>Rs.5,593.00</p>
                </Col>
                
            </Row>
            
    {/* 2nd row */}
    
            <Row style={{justifyContent:"space-around"}}>
          
                <Col 
                    md={3} xs={6} ><a href="/">
                    <Image src="/Images/MenAsse/mass5.png" /></a>
                    <p style={{textAlign:"center"}}>Rs.5,593.00</p>
                </Col>
                <Col 
                    md={3} xs={6}><a href="/">
                    <Image src="/Images/MenAsse/mass6.png" /></a>
                    <p style={{textAlign:"center"}}>Rs.6,293.00</p>
                </Col>
                <Col 
                    md={3} xs={6} ><a href="/">
                    <Image src="/Images/MenAsse/mass7.png"  className="t3"/></a>
                    <p style={{textAlign:"center"}}>Rs.3,143.00 </p>
                </Col>
                <Col 
                    md={3} xs={6} ><a href="/">
                    <Image src="/Images/MenAsse/mass8.png" /></a>
                    <p style={{textAlign:"center"}}>Rs.6,293.00</p>
                </Col>
                
            </Row>
    
            {/* 3rd row */}
    
            <Row style={{justifyContent:"space-around"}}>
          
                <Col 
                    md={3} xs={6} ><a href="/">
                    <Image src="/Images/MenAsse/mass9.png" /></a>
                    <p style={{textAlign:"center"}}>Rs.5,593.00</p>
                </Col>
                <Col 
                    md={3} xs={6}><a href="/">
                    <Image src="/Images/MenAsse/mass10.png" /></a>
                    <p style={{textAlign:"center"}}>Rs.5,593.00 </p>
                </Col>
                <Col 
                    md={3} xs={6} ><a href="/">
                    <Image src="/Images/MenAsse/mass11.png"  className="t3"/></a>
                    <p style={{textAlign:"center"}}>Rs.5,943.00 </p>
                </Col>
                <Col 
                    md={3} xs={6} ><a href="/">
                    <Image src="/Images/MenAsse/mass12.png" /></a>
                    <p style={{textAlign:"center"}}>Rs.5,943.00</p>
                </Col>
                
            </Row>
    
    
    {/* 4th row */}
    
    <Row style={{justifyContent:"space-around"}}>
          
          <Col 
              md={3} xs={6} ><a href="/">
              <Image src="/Images/MenAsse/mass13.png" /></a>
              <p style={{textAlign:"center"}}>Rs.6,293.00</p>
          </Col>
          <Col 
              md={3} xs={6}><a href="/">
              <Image src="/Images/MenAsse/mass14.png" /></a>
              <p style={{textAlign:"center"}}>Rs.5,593.00</p>
          </Col>
          <Col 
              md={3} xs={6} ><a href="/">
              <Image src="/Images/MenAsse/mass15.png"  className="t3"/></a>
              <p style={{textAlign:"center"}}>Rs.5,943.00</p>
          </Col>
          <Col 
              md={3} xs={6} ><a href="/">
              <Image src="/Images/MenAsse/mass16.png" /></a>
              <p style={{textAlign:"center"}}>Rs.5,593.00</p>
          </Col>
          
      </Row>
      {/* 5th row */}
    
      <Row style={{justifyContent:"space-around"}}>
          
          <Col 
              md={3} xs={6} ><a href="/">
              <Image src="/Images/MenAsse/mass17.png" /></a>
              <p style={{textAlign:"center"}}>Rs.1,953.00</p>
          </Col>
          <Col 
              md={3} xs={6}><a href="/">
              <Image src="/Images/MenAsse/mass18.png" /></a>
              <p style={{textAlign:"center"}}>Rs.2,093.00</p>
          </Col>
          <Col 
              md={3} xs={6} ><a href="/">
              <Image src="/Images/MenAsse/mass19.png"  className="t3"/></a>
              <p style={{textAlign:"center"}}>Rs.2,093.00</p>
          </Col>
          <Col 
              md={3} xs={6} ><a href="/">
              <Image src="/Images/MenAsse/mass20.png" /></a>
              <p style={{textAlign:"center"}}>Rs.3,143.00</p>
          </Col>
          
      </Row>
        </Container>
    
       
    
    
    </div>
        )
}
