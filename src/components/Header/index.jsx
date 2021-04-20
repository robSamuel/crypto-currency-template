import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

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
    const renderMenuItems = () => {
        return MENU_ITEMS.map(item => {
            return (
                <li
                    className="Header-menuitem"
                    key={uuidv4()}
                >
                    <Link
                        className="Header-menulink"
                        to={item.link}
                    >
                        {item.title}
                    </Link>
                </li>
            );
        });
    };

    return (
        <header className="Header">
            <div className="container">
                <Link
                    className="Header-logo"
                    to="/"
                >
                    Nafi
                </Link>
                <div className="Header-content">
                    <ul className="Header-menu">
                        {renderMenuItems()}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
