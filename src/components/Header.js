import React from 'react';
import {Link} from 'react-router-dom';

import GoogleAuth from './GoogleAuth'
import '../styles/Header.css'

const Header = () => {

    return (

        <div className='nav-container'>
            <nav>
                <Link to='/' id='navbar-logo'  >
                Streamer
                </Link>
                <div className='menu-toggle' id='mobile-menu' onClick={() => {
                    document.querySelector('#mobile-menu').classList.toggle('is-active');
                    document.querySelector('.nav-menu').classList.toggle('active');
                }}>
                    <span className='bar'/>
                    <span className='bar'/>
                    <span className='bar'/>


                </div>

                <ul className='nav-menu'>
                    <li>
                        <Link to="/streams/new">Create Stream</Link>
                    </li>


                    <li className='right' >
                        <GoogleAuth/>
                    </li>


                </ul>


            </nav>


        </div>


    );

}
export default Header;