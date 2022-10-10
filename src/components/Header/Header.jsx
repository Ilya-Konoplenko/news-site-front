import React, { useEffect, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ButtonGroup,
  Button,
} from '@mui/material';

import './header.css';
import Modal from '../Modal/Modal';
import { getLogoutRequested } from '../../redux/actions/auth';

function Header() {
  const dispatch = useDispatch();

  const [modalType, setModalType] = useState('');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.user.username);
  useEffect(() => {
    if (isLoggedIn) { setModalType(false); }
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
            <>
              <div className="header__news-title">{username}</div>
              <Button onClick={() => dispatch(getLogoutRequested())}>Logout</Button>
            </>
          )}
      </ButtonGroup>
      {modalType && <Modal active={modalType} setActive={setModalType} />}
    </header>
  );
}

export default memo(Header);
