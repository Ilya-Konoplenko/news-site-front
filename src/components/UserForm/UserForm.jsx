import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  Box, Avatar, Button,
} from '@mui/material';

import './userform.css';

function UserForm({ userData, isLogginedUser }) {
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
      {isLogginedUser && <Button id="user-info__create-post-bnt" variant="contained" size="large">CHANGE INFO</Button>}
    </Box>
  );
}

UserForm.propTypes = {
  isLogginedUser: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
export default memo(UserForm);
