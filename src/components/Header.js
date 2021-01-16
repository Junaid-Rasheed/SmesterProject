import React from 'react'
import { FaFacebookF ,FaInstagram,FaTwitter,FaYoutube } from 'react-icons/fa';
import { FaDollyFlatbed,FaSearch} from 'react-icons/fa';
import { BsHouseFill,BsFillPersonFill} from "react-icons/bs";
import {Link} from 'react-router-dom'




export const Header = () => {
    return (
        
<ul className="header">
    <header className="inner-header">

        <ul className="left-header">
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

        <ul className="right-header">
            <a href="/"><li><FaSearch/></li></a>
           <Link to="/"> <a ><li><BsHouseFill/></li></a> </Link>
            <Link to="/Account"><a><li><BsFillPersonFill/></li></a></Link>   
            <Link to="/Cart"><a> MY CART </a></Link>
            <Link to="/Cart"><a><li><FaDollyFlatbed/></li></a></Link>
            
           
        </ul>
 
       
       
       
       </header>
        </ul>
    )
}
