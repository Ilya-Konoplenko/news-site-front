import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Box, Avatar, Button,
} from '@mui/material';

import Modal from '../Modal/Modal';

import './userInfo.css';

function UserInfo({ userData, isOwner }) {
  const [modalType, setModalType] = useState('');
  return (
    <Box className="box">
      <Avatar id="user-info__avatar">H</Avatar>
      <p className="user-info__title">
        Username
        <p className="user-info__text">{userData.username}</p>
      </p>
      <p className="user-info__title">
        Email
        <p className="user-info__text">{userData.email}</p>
      </p>
      {isOwner
        && (
        <>
          <Button
            id="user-info__create-post-bnt"
            variant="contained"
            size="large"
          >
            CHANGE INFO
          </Button>
          <Button
            onClick={() => setModalType('newsForm')}
            id="user-info__create-post-bnt"
            variant="contained"
            size="large"
          >
            CREATE NEW POST
          </Button>
          {modalType && <Modal activeModalType={modalType} setActiveModalType={setModalType} />}
        </>
        )}
    </Box>
  );
}

UserInfo.propTypes = {
  isOwner: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
export default memo(UserInfo);
