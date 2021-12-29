import React from 'react';
import './Navber.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons';

const Navber = () => {
    return (
      
        
        <div className='navber col-md-12'>
          <div className='row'>
       <div className='col-md-3 left'>
         <div className='logo'> <p><span>Medipharma</span>online medical store</p>
             <div className='col-md-6 center'>
             <div className='searchBar'><FontAwesomeIcon icon={ faSearch} />
               <input type='text' placeholder='search'/>
              <ul>
                  <li><a href='#'>Home+</a></li>
                  <li><a href='#'>About+</a></li>
                  <li><a href='#'>contact+ </a></li>
                  <li><a href='#'>login+</a></li>
                </ul>
                <div className='col-md-3 right'>
                 <p>Sign in/Sign up</p>
                 <p><FontAwesomeIcon icon={ faShoppingCart} /></p>
                 <p><FontAwesomeIcon icon={ faCoins} /></p>
                 <p>$0.00</p>
                 </div>
               </div>
             </div>
           </div>
           </div>
           </div>
           </div>
          
          
        
    );
};

export default Navber;