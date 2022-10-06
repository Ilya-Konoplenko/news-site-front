import React, { memo, useState } from 'react';

import {
  ButtonGroup,
  Button,
} from '@mui/material';

import './header.css';
import Modal from '../Modal/Modal';

function Header() {
  const [modalType, setModalType] = useState('');

  return (
    <header className="header">
      <div className="header__info">
        <span className="header__news-title">ILYA JR. NEWS</span>
      </div>
      <ButtonGroup variant="contained" aria-label="outlined button group">
        <Button onClick={() => setModalType('Login')}>Login</Button>
        <Button onClick={() => setModalType('SignUp')}>SignUp</Button>
      </ButtonGroup>
      {modalType && <Modal active={modalType} setActive={setModalType} />}
    </header>
  );
}

export default memo(Header);
