import React from 'react';
import PropTypes from 'prop-types';
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
            <div className="Header-logo">

            </div>
            <ul className="Header-menu">
                {renderMenuItems()}
            </ul>
        </header>
    );
};

Header.propTypes = {

};

export default Header;
