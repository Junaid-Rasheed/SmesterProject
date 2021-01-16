import React from 'react'
import {Row,Col,Image, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export const Categries = () => {
  
  return(

  <Container fluid style={{paddingTop:"25px"}}>
  <Row>

    <Col 
        md={4} xs={12} >
          <Link to="/Men"><a><Image src="/Images/MEN.png" /></a></Link>
    </Col>
    <Col 
        md={4} xs={12}>
          <Link to="/Women"><a><Image src="/Images/WOMEN.png" /></a></Link>
    </Col>
    <Col 
        md={4} xs={12} >
          <Link to="/AccessoriesMen"><a><Image src="/Images/ACCESSORIES.png" /></a></Link>
    </Col>

  </Row>
  </Container>

  )
  
}



