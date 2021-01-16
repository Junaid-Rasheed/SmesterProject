import React from 'react'
import {Container,Col,Row,Form,Button} from 'react-bootstrap'



export const Account = () => {
    return (
       <Container>
<Row>

{/* Login */}

<Col md={6} xs={12}>
<h5 style={{paddingBottom:"3%",paddingTop:"8%"}}>Login</h5>

<Form style={{paddingTop:"3%",paddingBottom:"3%"}}>
<Form.Label>Email</Form.Label>
<Form.Control type="email"/>  
<Form.Label>Password</Form.Label>
<Form.Control type="password"/>  
<a href="#"><p>Forgot your password?</p></a>
<Button variant="secondary" size="lg" block>Sign In</Button>
</Form>

</Col>


 {/* Create Account */}


<Col md={6} xs={12}>
<h5 style={{paddingBottom:"3%",paddingTop:"8%"}}>Create Account</h5>

<Form style={{paddingTop:"3%",paddingBottom:"3%"}}>
<Form.Label>First Name</Form.Label>
<Form.Control type="text"/>  
<Form.Label>Last Name</Form.Label>
<Form.Control type="text"/>  
<Form.Label>Email</Form.Label>
<Form.Control type="email"/>  
<Form.Label>Password</Form.Label>
<Form.Control type="password" />
<Button variant="secondary" size="lg" block>Create</Button>
</Form>

</Col>

</Row>


       </Container>
    )
}
