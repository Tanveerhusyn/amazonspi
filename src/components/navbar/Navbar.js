import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {FaInstagramSquare} from 'react-icons/fa';
import {IoLogoFacebook} from 'react-icons/io';
import {ReactComponent as BrandIcon} from '../../assets/Logo.svg'

function Navbar() {
  return (
    <nav style={{width:'100vw',background:'white',padding:'10px 0px'}}>
        <div className='div-parent'>
           <div className='div-child'>
            <span>
              <FaInstagramSquare style={{width:'20px',height:'20px'}}/>
              <IoLogoFacebook style={{width:'20px',height:'20px',marginLeft:'10px'}}/>
            </span>
            
            <span>
          
          <ul>
            <li><Link to="/">Home



</Link></li>
            <li><Link to="page1">Page 1</Link></li>
            <li><Link to="page2">Page 2</Link></li>
            <li><Link to="page3">Page 3</Link></li>
            
          </ul>
            </span>
           </div>
            <span>
           Amazon SP-API
            </span>
        </div>
    </nav>
  )
}

export default Navbar