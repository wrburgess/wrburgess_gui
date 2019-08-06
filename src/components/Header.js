import React from 'react';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header>
        This is the Header
        <div className="foo">FOO BAR</div>
      </header>
    );
  }
}

export default Header;
