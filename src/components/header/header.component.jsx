import React from 'react';
import './header.component.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg.svg';
export default function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
            </div>
            <div className='options'>
                <Link className='option' to='/shop'>CONTACT</Link>
            </div>
        </div>
    )
}