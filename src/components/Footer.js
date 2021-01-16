import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

export const Footer = () => {
    
return (
    
        <Container>
                <Row  className="Foot">
                    <Col>
                    <h6>EXPLORE</h6>
                    
                    <a href="#"><li>Shipping Policy</li></a>
                    <a href="#"><li>Terms & Conditions</li></a>
                    <a href="#"><li>Return & Exchange Policy</li></a>
                    
                    </Col>
                    
                    <Col>
                    <h6 >CUSTOMER CARE</h6>
                    <a href="#"><li>About Cougar</li></a>
                    <a href="#"><li>Contact Us</li></a>
                    <a href="#"><li>FAQ's</li></a>
                  
                    </Col>
                    
                    <Col>
                    <h6>CONTACT INFORMATION</h6>
                    <li><h6>Phone:</h6></li>
                    <a href="#"><li>0335-1116664</li></a>
                    <li><h6>Email:</h6></li>
                    <a href="#"><li>info@cougar.com.pk</li></a>


                    </Col>
                </Row>
            <hr />       
        </Container>
       
        
    
    )
}
