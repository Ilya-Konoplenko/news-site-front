/* eslint-disable react/prop-types */
import { Card } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

import AuthForm from '../AuthForm/AuthForm';
import './auth.css';

export default function Modal({ active, setActive }) {
  return (
    <Container onClick={() => setActive('')} className="auth-form">
      <Card onClick={(e) => e.stopPropagation()} className="auth-form-content">
        <AuthForm status={active} />
      </Card>
    </Container>
  );
}
