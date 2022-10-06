import React, { memo } from 'react';

import {
  ButtonGroup,
  Button,
} from '@mui/material';

import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__info">
        <span className="header__news-title">ILYA JR. NEWS</span>
      </div>
      <ButtonGroup variant="contained" aria-label="outlined button group">
        <Button>Login</Button>
        <Button>SignUp</Button>
      </ButtonGroup>
    </header>
  );
}

export default memo(Header);
