import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const Button = props => {
    const { classes, icon, text } = props;
    const customClasses = `Button ${classes}`;

    const renderIcon = () => {
        return icon
            ? (
                <Icon
                    classes="margin-left-10"
                    iconName={icon}
                />
            )
            : <Fragment/>
    }

    return (
        <button className={customClasses}>
            {text}
            {renderIcon()}
        </button>
    );
};

Button.defaultProps = {
    classes: '',
    disabled: PropTypes.bool,
    icon: '',
    text: '',
};

Button.propTypes = {
    classes: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    text: PropTypes.string,
};

export default Button;
