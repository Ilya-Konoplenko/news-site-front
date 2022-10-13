import React, { useEffect, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ButtonGroup,
  Button,
} from '@mui/material';

import Modal from '../Modal/Modal';

import { getLogoutRequested } from '../../redux/actions/auth';

import './header.css';

function Header() {
  const dispatch = useDispatch();
  const [modalType, setModalType] = useState('');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const displayLogout = () => dispatch(getLogoutRequested());

  useEffect(() => {
    if (isLoggedIn) { setModalType(''); }
  }, [isLoggedIn]);

  return (
    <header className="header">
      <div className="header__info">
        <span className="header__news-title">ILYA JR. NEWS</span>
      </div>
      <ButtonGroup variant="contained" aria-label="outlined button group">
        {!isLoggedIn
          ? (
            <>
              <Button onClick={() => setModalType('Login')}>Login</Button>
              <Button onClick={() => setModalType('SignUp')}>SignUp</Button>
            </>
          )
          : (
            <Button onClick={displayLogout}>Logout</Button>
          )}
      </ButtonGroup>
      {modalType && <Modal activeModalType={modalType} setActiveModalType={setModalType} />}
    </header>
  );
}

export default memo(Header);
