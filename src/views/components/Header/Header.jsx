import React from 'react';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="other-info">
        <span className="news-title">ILYA JR. NEWS</span>
      </div>
      <div className="header__button-section">
        <button type="button" className="header__button header__button--signup">SIGN UP</button>
        <button type="button" className="header__button header__button--login">LOGIN</button>
      </div>
    </header>
  );
}

export default Header;
