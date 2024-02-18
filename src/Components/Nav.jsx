import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import "./main.scss"
import { Buttons } from './Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export const Navbars = () => {

    const menuItems = [
        {
            title: "Home",
            url: "#",
            cName: "nav-links"
        },
        {
            title: "Services",
            url: "#",
            cName: "nav-links"
        },
        {
            title: "Products",
            url: "#",
            cName: "nav-links"
        },
        {
            title: "Contact",
            url: "#",
            cName: "nav-links"
        },
        {
            title: "Sign up",
            url: "#",
            cName: "nav-links-mobile"
        }
    ];
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (<>
        <nav className="navbar">
            <h1 className="navbar-logo">
                React <i className="fab fa-react"></i>
            </h1>
            <div className="menu-icon" onClick={handleClick}>
                {active ? <CloseIcon /> : <MenuIcon />}
            </div>
            <ul className={active ? "nav-menu active" : "nav-menu"}>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.url} className={item.cName}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <Buttons>SIGN UP</Buttons>
        </nav>
    </>)
}