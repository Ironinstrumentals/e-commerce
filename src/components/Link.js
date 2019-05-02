import React from 'react';
import PropTypes from 'prop-types';
const Link = ({ to, children }, { history }) => {
    let classes = 'nav-link';
    if (history.location.pathname === to) {
        classes += 'header';
    }
    return (
        <a className={classes}
           onClick={(e)  =>  {
               e.preventDefault();
               history.push(to);
           }} href={to}>
            {children}
        </a>
    )
};

Link.contextTypes = {
    history: PropTypes.object
};

export default Link;