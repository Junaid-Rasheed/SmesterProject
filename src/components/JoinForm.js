import React from 'react'
import { Container,Button ,FormControl,Form} from 'react-bootstrap'
import { FaFacebookF ,FaInstagram,FaTwitter,FaYoutube } from 'react-icons/fa';

import {Link} from 'react-router-dom'

export const JoinForm = () => {
    
    return (
<Container fluid style={{backgroundColor:"#f7f7f7",textAlign:"center"}}>

        <h5 className="news">Newsletter</h5>
        <h6 >Subscribe to our newsletter and be the first to receive the latest fashion news,
        promotions and more!</h6>
    

    <Form inline className="JoinFun">
        <FormControl type="text" placeholder="Enter Email Adress" className=" mr-sm-2" />
        <Button type="submit" variant="dark">Join</Button>
    </Form>



 <ul inline className="joinPart">
 <Link to="/Facebook">
           <a ><li><FaFacebookF/></li></a>
           </Link>

           <Link to="/Instagram">
           <a ><li><FaInstagram/></li></a>
           </Link>

            <Link to="/Twitter">
           <a><li><FaTwitter/></li></a>
           </Link>

           <Link to="/Youtube">
           <a><li><FaYoutube/></li></a>
           </Link>
        </ul>
<hr style={{paddingTop:"0"}}/>
</Container>
    )
}
