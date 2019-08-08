import React from 'react';
import './Header.scss';

function Header(props) {
  return <header>This is the Header ({props.color || 'Red'})</header>;
}

export default Header;
