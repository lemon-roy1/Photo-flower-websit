import React from 'react';
import'./Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className='header'>
            <h2 className='header-title'> <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>  Photo flower websit</h2>
            <h4>Select today’s photo</h4>
        </div>
    );
};

export default Header;