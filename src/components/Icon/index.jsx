import React from 'react';
import PropTypes from 'prop-types';

const Icons = ({ classes, iconName }) => {
    const getIcon = () => {
        let iconType = '';

        switch(iconName) {
            case 'monero':
                iconType = 'fab fa-monero';
                break;

            case 'profit':
                iconType = 'fas fa-hand-holding-usd';
                break;

            case 'registered':
                iconType = 'fas fa-registered';
                break;

            case 'reload':
                iconType = 'fas fa-sync-alt';
                break;

            case 'world':
                iconType = 'fas fa-globe-asia';
                break;

            default:
                iconType = '';
                break;
        }

        return iconType;
    };

    return (
        <i className={`${getIcon()} ${classes}`} />
    );
};

Icons.defaultProps = {
    classes: ''
};

Icons.propTypes = {
    classes: PropTypes.string,
    iconName: PropTypes.oneOf([
        'monero',
        'profit',
        'registered',
        'reload',
        'world'
    ])
};

export default Icons;
