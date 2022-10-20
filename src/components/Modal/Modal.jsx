import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Card, Container } from '@mui/material';

import AuthForm from '../AuthForm/AuthForm';
import CreateUserForm from '../CreatePostForm/CreateUserForm';

import './modal.css';

function Modal({ activeModalType, setActiveModalType }) {
  return (
    <Container onClick={() => setActiveModalType('')} className="auth-form">
      <Card onClick={(e) => e.stopPropagation()} className="auth-form-content">
        {activeModalType === 'newsForm' ? <CreateUserForm /> : <AuthForm activeModalType={activeModalType} /> }
      </Card>
    </Container>
  );
}

Modal.propTypes = {
  activeModalType: PropTypes.string.isRequired,
  setActiveModalType: PropTypes.func.isRequired,
};
export default memo(Modal);
