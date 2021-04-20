import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CustomButton from '../Button';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap';

const MENU_ITEMS = [
    {
        link: "/",
        title: "Home"
    },
    {
        link: "/about",
        title: "About"
    },
    {
        link: "/feature",
        title: "Feature"
    },
    {
        link: "/cryptocurrency",
        title: "Cryptocurrency"
    },
    {
        link: "/team",
        title: "Team"
    },
    {
        link: "/blog",
        title: "Bog"
    },
    {
        link: "/client",
        title: "Client"
    },
    {
        link: "/contact",
        title: "Contact"
    },
];

const Header = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(prevIsOpen => {
            return !prevIsOpen;
        });
    };

    const renderMenuItems = () => {
        return MENU_ITEMS.map(item => {
            return (
                <NavItem
                    className="Header-menuitem"
                    key={uuidv4()}
                >
                    <NavLink
                        className="Header-menulink"
                        href={item.link}
                    >
                        {item.title}
                    </NavLink>
                </NavItem>
            );
        });
    };

    return (
        <header className="Header">
            <div className="container">
                <Navbar dark expand="lg">
                    <NavbarBrand>
                        <Link
                            className="Header-logo"
                            to="/"
                        >
                            Nafi
                        </Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} className="mr-2" />
                    <Collapse
                        className="justify-content-end"
                        isOpen={isOpen}
                        navbar
                    >
                        <Nav navbar>
                            {renderMenuItems()}
                            
                        </Nav>
                    </Collapse>
                    <CustomButton
                        classes="Header-token"
                        text="Buy Token"
                    />
                </Navbar>
            </div>
        </header>
    )
};

export default Header;
