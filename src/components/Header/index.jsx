import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Header({ title, subtitle, children }) {
    return (
        <header className="app-header">
            <div className="app-header-inner">
                <h1 className="app-title">{title}</h1>
                {subtitle && <p className="app-subtitle">{subtitle}</p>}
            </div>
            {children && <div className="app-header-actions">{children}</div>}
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node,
};

Header.defaultProps = {
    title: 'Tic Tac Toe',
    subtitle: '',
    children: null,
};

export default Header;