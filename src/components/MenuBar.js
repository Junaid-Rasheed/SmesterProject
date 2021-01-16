import React from 'react'
import { Container,Navbar,NavDropdown,Row,Col,Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export const MenuBar = () => {

return (
   
<Navbar variant="dark" bg="dark" >

<Container  className="contact-content"  >

  <NavDropdown title="NEW ARRIVALS">
  
    <Row className="coll" >
    
        
   
       
                    {/* MEN */}
        <Col  md={4} xs={12} >
              
               <Link to="/Men"><h5>MEN</h5></Link>
              <NavDropdown.Divider />
              <Link to="/Men"><NavDropdown.Item>Jackets</NavDropdown.Item></Link>
              <NavDropdown.Item href="#">Sweatshirts</NavDropdown.Item>
              <NavDropdown.Item href="#">Hoodies</NavDropdown.Item>
              <NavDropdown.Item href="#">Sweaters</NavDropdown.Item>
              <NavDropdown.Item href="#">Casual Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#">Polos</NavDropdown.Item>
              <NavDropdown.Item href="#">T-Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="#">Trousers</NavDropdown.Item>
              <NavDropdown.Item href="#">Chinos</NavDropdown.Item>
          

             

        </Col>

        
  
            {/* WoMEN */}
  
        <Col  md={4} xs={12}>


          <Link to="/Women"><h5>WOMEN</h5></Link>
              <NavDropdown.Divider />
             
              <NavDropdown.Item href="#">Jackets</NavDropdown.Item>
              <NavDropdown.Item href="#">Hoodies</NavDropdown.Item>
              <NavDropdown.Item href="#">Sweaters</NavDropdown.Item>
              <NavDropdown.Item href="#">Coats</NavDropdown.Item>
              <NavDropdown.Item href="#">Sweatshirts</NavDropdown.Item>
              <NavDropdown.Item href="#">Casual Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#">Cape Shawl</NavDropdown.Item>
              <NavDropdown.Item href="#">T-Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="#">Trousers</NavDropdown.Item>


            
        </Col>


            {/* ACCESSORIES */}

        <Col md={4} xs={12}>

            <Link to="/AccessoriesMen"><h5> ACCESSORIES</h5></Link>
            <NavDropdown.Divider />
        
            <NavDropdown.Item href="#">Shoes</NavDropdown.Item>
            <NavDropdown.Item href="#">Belts</NavDropdown.Item>
            <NavDropdown.Item href="#">Scarves</NavDropdown.Item>
            <NavDropdown.Item href="#">Sunglasses</NavDropdown.Item>
            <NavDropdown.Item href="#">Beanies</NavDropdown.Item>
            <NavDropdown.Item href="#">Canvas Bags</NavDropdown.Item>
     

        </Col>

    </Row>

</NavDropdown>

{/* Second Drop Down */}
{/* Second Drop Down */}
{/* Second Drop Down */}

<NavDropdown  title="MEN" >

<Row className="coll" >

{/* CLOTHING */}
<Col  md={6} xs={12} >
              
              <Link to="/Men"><h5>MEN</h5></Link>
              <NavDropdown.Divider />
             
              <NavDropdown.Item href="#">Jackets</NavDropdown.Item>
              <NavDropdown.Item href="#">Sweatshirts</NavDropdown.Item>
              <NavDropdown.Item href="#">Hoodies</NavDropdown.Item>
              <NavDropdown.Item href="#">Sweaters</NavDropdown.Item>
              <NavDropdown.Item href="#">Casual Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#">Polos</NavDropdown.Item>
              <NavDropdown.Item href="#">T-Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="#">Trousers</NavDropdown.Item>
              <NavDropdown.Item href="#">Chinos</NavDropdown.Item>


             

    </Col>

        <Col md={6} xs={12}>

            <Link to="/AccessoriesMen"><h5> ACCESSORIES</h5></Link>
            <NavDropdown.Divider />
        
            <NavDropdown.Item href="#">Shoes</NavDropdown.Item>
            <NavDropdown.Item href="#">Belts</NavDropdown.Item>
            <NavDropdown.Item href="#">Scarves</NavDropdown.Item>
            <NavDropdown.Item href="#">Sunglasses</NavDropdown.Item>
            <NavDropdown.Item href="#">Beanies</NavDropdown.Item>
            <NavDropdown.Item href="#">Canvas Bags</NavDropdown.Item>
     

        </Col>

</Row>
</NavDropdown>
{/* THIRD DROPDOWN */}
{/* THIRD DROPDOWN */}
{/* THIRD DROPDOWN */}

<NavDropdown  title="WOMEN" >

<Row className="coll">
<Col  md={6} xs={12}>


<Link to="/Women"><h5>WOMEN</h5></Link>
    <NavDropdown.Divider />
   
    <NavDropdown.Item href="#">Jackets</NavDropdown.Item>
    <NavDropdown.Item href="#">Hoodies</NavDropdown.Item>
    <NavDropdown.Item href="#">Sweaters</NavDropdown.Item>
    <NavDropdown.Item href="#">Coats</NavDropdown.Item>
    <NavDropdown.Item href="#">Sweatshirts</NavDropdown.Item>
    <NavDropdown.Item href="#">Casual Shirts</NavDropdown.Item>
    <NavDropdown.Item href="#">Cape Shawl</NavDropdown.Item>
    <NavDropdown.Item href="#">T-Shirts</NavDropdown.Item>
    <NavDropdown.Item href="#">Jeans</NavDropdown.Item>
    <NavDropdown.Item href="#">Trousers</NavDropdown.Item>


  
</Col>

<Col md={6} xs={12}>

            <Link to="/AccessoriesWomen"><h5> ACCESSORIES</h5></Link>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Scarves</NavDropdown.Item>
            <NavDropdown.Item href="#">Sunglasses</NavDropdown.Item>
            
     

        </Col>

</Row>
</NavDropdown>



        <a href="#" ><text>KURTI</text></a>

</Container>

</Navbar>   
 
    )
}
