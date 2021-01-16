import React from 'react'

// import MenItem from '../ProductDetail/MenProduct'
import {Row,Col,Image, Container} from 'react-bootstrap'

export const New = () => {

    const MenItem = [
        {
            id :1,
            description: "Black Parachute Jacket With Hood & Contrast Rib",
            price : "5,593",
            thumb: "/Image/Men/mp1.png"
            
        },
        {
            id :2,
            description: "Brown Parachute Jacket With Hood ",
            price : "5,593",
            thumb: "/Image/Men/mp2.png"
            
        },
        {
            id :3,
            description: "Brown Faux Leather Jacket With Detachable Sherpa Collars",
            price : "5,593",
            thumb: "/Image/Men/mp3.png"
            
        },
        {
            id :4,
            description: "Black Parachute Jacket With Hood & Contrast Rib",
            price : "5,593",
            thumb: "/Image/Men/mp1.png"
            
        },
        {
            id :5,
            description: "Brown Parachute Jacket With Hood ",
            price : "5,593",
            thumb: "/Image/Men/mp2.png"
            
        },
        {
            id :6,
            description: "Brown Faux Leather Jacket With Detachable Sherpa Collars",
            price : "5,593",
            thumb: "/Image/Men/mp3.png"
            
        }

 ]

const listItem = MenItem.map((items) => 

<Container key={items.id}>

<Row >

    <Col xs={6} md={4} >
    <Image src="/Images/Men/mp20.png" />
    <h5>{items.description}</h5>
            <h4>{items.price}</h4>
            <div className="btn">Add to Cart</div>
    </Col>
    
</Row>

  
            
</Container>
            
         

);

    return (
        <div>
           <h3>Men</h3>
            {listItem}
        </div>
    )
}

{/* <div className="Card" key={items.id}>

    <div className="image">
            <img src={items.thumb} />
    </div>

    <div className="desc" >
            <h3>{items.description}</h3>
            <h4>{items.price}</h4>
            <div className="btn">Add to Cart</div>
    </div>

</div> */}