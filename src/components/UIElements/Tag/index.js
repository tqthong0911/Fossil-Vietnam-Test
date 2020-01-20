import React from 'react';
import './styles.scss';

export default ({ name, className = '', ...rest }) => {
    return (
        <span className={`tag ${className}`} {...rest}>
            {name}
        </span>
    )
}
