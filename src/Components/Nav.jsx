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
            url: "#Portfolio",
            cName: "nav-links"
        },
        {
            title: "About",
            url: "#about",
            cName: "nav-links"
        },
        {
            title: "Skills",
            url: "#skills",
            cName: "nav-links"
        }, {
            title: "Project",
            url: "#projects",
            cName: "nav-links"
        },
        {
            title: "Education",
            url: "#education",
            cName: "nav-links"
        }, {
            title: "Contact",
            url: "#contact",
            cName: "nav-links"
        },
        // {
        //     title: "Sign up",
        //     url: "#",
        //     cName: "nav-links-mobile"
        // }
    ];
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (<>
        <nav className="navbar">
            <h1 className="navbar-logo">
                PORTFOLIO <i className="fab fa-react"></i>
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
            {/* <Buttons>Contact Me</Buttons> */}
        </nav>
    </>)
}