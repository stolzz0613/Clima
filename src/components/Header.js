import React from 'react';
import PropTypes from "prop-types";

const Header = ({ titulo }) => {
    return (

        <div className="center-align" style={{ marginTop: 20}}>
            <a href='#!' className="header brand-logo ">{titulo}</a>
        </div >

    );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
export default Header;