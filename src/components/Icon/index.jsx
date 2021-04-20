import React from 'react';
import PropTypes from 'prop-types';

const Icons = ({ iconName }) => {
    const getIcon = () => {
        let iconType = '';

        switch(iconName) {
            case 'reload':
                iconType = 'fas fa-sync-alt';
                break;

            default:
                iconType = '';
                break;
        }

        return iconType;
    };

    return (
        <i className={getIcon()} />
    );
};

Icons.propTypes = {
    iconName: PropTypes.oneOf(['reload'])
};

export default Icons;
