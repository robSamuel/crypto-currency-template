import React from 'react';
import PropTypes from 'prop-types';

const Icons = ({ classes, iconName }) => {
    const getIcon = () => {
        let iconType = '';

        switch(iconName) {
            case 'anchor':
                iconType = 'fas fa-anchor';
                break;

            case 'award':
                iconType = 'fas fa-award';
                break;

            case 'credit-card':
                iconType = 'far fa-credit-card';
                break;

            case 'invoice':
                iconType = 'fas fa-file-invoice-dollar';
                break;

            case 'lock':
                iconType = 'fas fa-lock';
                break;

            case 'mail-bulk':
                iconType = 'fas fa-mail-bulk';
                break;

            case 'mobile':
                iconType = 'fas fa-mobile-alt';
                break;

            case 'monero':
                iconType = 'fab fa-monero';
                break;

            case 'passport':
                iconType = 'fas fa-passport';
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

            case 'shield':
                iconType = 'fas fa-shield-alt';
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
        'anchor',
        'award',
        'credit-card',
        'invoice',
        'lock',
        'mail-bulk',
        'mobile',
        'monero',
        'passport',
        'profit',
        'registered',
        'reload',
        'shield',
        'world'
    ])
};

export default Icons;
