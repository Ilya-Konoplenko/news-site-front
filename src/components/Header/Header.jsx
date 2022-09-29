import React, { memo } from 'react';

import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__info">
        <span className="header__news-title">ILYA JR. NEWS</span>
      </div>
      <div className="header__button-section">
        <button type="button" className="header__button header__button--signup">SIGN UP</button>
        <button type="button" className="header__button header__button--login">LOGIN</button>
      </div>
    </header>
  );
}

export default memo(Header);
