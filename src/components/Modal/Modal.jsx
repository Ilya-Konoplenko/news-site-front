import React from 'react';
import { Card, Container } from '@mui/material';
import PropTypes from 'prop-types';

import AuthForm from '../AuthForm/AuthForm';

import './modal.css';

export default function Modal({ activeModalType, setActiveModalType }) {
  return (
    <Container onClick={() => setActiveModalType('')} className="auth-form">
      <Card onClick={(e) => e.stopPropagation()} className="auth-form-content">
        <AuthForm activeModalType={activeModalType} />
      </Card>
    </Container>
  );
}

Modal.propTypes = {
  activeModalType: PropTypes.string.isRequired,
  setActiveModalType: PropTypes.string.isRequired,
};
