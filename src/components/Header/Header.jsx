import React, { useEffect, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ButtonGroup,
  Button,
  Avatar,
} from '@mui/material';

import Modal from '../Modal/Modal';
import { getLogoutRequested, verifyUserByToken } from '../../redux/actions/auth';

import './header.css';

function Header() {
  const dispatch = useDispatch();
  const [modalType, setModalType] = useState('');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.user.username);
  const myPageId = useSelector((state) => state.auth.user.id);
  const path = `/user/${myPageId}`;
  const displayLogout = () => dispatch(getLogoutRequested());

  useEffect(() => {
    if (isLoggedIn) {
      setModalType('');
      dispatch(verifyUserByToken());
    }
  }, [isLoggedIn, dispatch]);

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
            <div className="header__logout">
              <span className="header__news-title">
                {username}
              </span>
              <Avatar><a href={path}>U</a></Avatar>
              <Button onClick={displayLogout}>Logout</Button>
            </div>
          )}
      </ButtonGroup>
      {modalType && <Modal activeModalType={modalType} setActiveModalType={setModalType} />}
    </header>
  );
}

export default memo(Header);
