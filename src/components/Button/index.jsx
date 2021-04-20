import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ classes, text }) => {
    const customClasses = `Button ${classes}`;

    return (
        <button className={customClasses}>
            {text}
        </button>
    );
};

Button.defaultProps = {
    classes: '',
    disabled: PropTypes.bool,
    text: '',
};

Button.propTypes = {
    classes: PropTypes.string,
    disabled: PropTypes.bool,
    text: PropTypes.string,
};

export default Button;
