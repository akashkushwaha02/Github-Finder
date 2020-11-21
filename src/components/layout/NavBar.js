import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const NavBar =({icon,tittle}) =>  {
   
        return (
            <nav className='navbar bg-primary' >
                <h2>
                    <i className={icon}/>    {tittle}
                </h2>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        )   
}

NavBar.defaultProps = {
    tittle: 'Github-Finder',
    icon: 'fab fab-github'
};

NavBar.propTypes = {
    tittle: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired

};


export default NavBar
