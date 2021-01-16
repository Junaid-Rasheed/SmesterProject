import React from 'react'
import {Row,Col,Image, Container} from 'react-bootstrap'

export const TopSeller = () => {
    return (
<div>
        <hr />
            <h5 style={{textAlign:"center"}}>Top Sellers</h5>
        <hr />

    <Container fluid>
        <Row style={{justifyContent:"space-around"}}>
      
            <Col 
                md={2} xs={6} ><a href="https://www.cougar.com.pk/">
                <Image src="/Images/t1.png" /></a>
                <p style={{textAlign:"center"}}>Rs.3,990.00</p>
            </Col>
            <Col 
                md={2} xs={6}><a href="https://www.cougar.com.pk/">
                <Image src="/Images/t2.png" /></a>
                <p style={{textAlign:"center"}}>Rs.7,900.00</p>
            </Col>
            <Col 
                md={2} xs={6} ><a href="https://www.cougar.com.pk/">
                <Image src="/Images/t3.png"  className="t3"/></a>
                <p style={{textAlign:"center"}}>Rs.7,900.00</p>
            </Col>
            <Col 
                md={2} xs={6} ><a href="https://www.cougar.com.pk/">
                <Image src="/Images/t4.png" /></a>
                <p style={{textAlign:"center"}}>Rs.3,490.00</p>
            </Col>
            <Col 
                md={2} xs={6} ><a href="https://www.cougar.com.pk/">
                <Image src="/Images/t5.png" /></a>
                <p style={{textAlign:"center"}}>Rs.9,990.00</p>
            </Col>
      
        </Row>
    </Container>
</div>
    )
}

