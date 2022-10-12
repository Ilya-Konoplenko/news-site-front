import React, { useEffect, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ButtonGroup,
  Button,
  Avatar,
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
  const pathUser = `/user/${localStorage.getItem('userURL')}`;

  return (
    <header className="header">
      <div className="header__info">
        <a href="/">
          <span className="header__news-title">
            ILYA JR. NEWS
          </span>
        </a>
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
              <a href={pathUser}><Avatar id="user-info__avatar">H</Avatar></a>
              <Button onClick={displayLogout}>Logout</Button>
            </>
          )}
      </ButtonGroup>
      {modalType && <Modal activeModalType={modalType} setActiveModalType={setModalType} />}
    </header>
  );
}

export default memo(Header);
