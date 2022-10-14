import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import {
  FormControl,
  InputLabel,
  Input,
  Button,
} from '@mui/material';

import { getLoginRequest, getSignupRequest } from '../../redux/actions/auth';

import { TEXT_LOGIN, TEXT_SIGNUP } from './messages';
import {
  loginValidationSchema,
  signUpValidationSchema,
  loginFields,
  signupFields,
} from './constants';

import './authForm.css';

function AuthForm({ activeModalType }) {
  const dispatch = useDispatch();
  const isLogin = activeModalType === 'Login';
  const currentFields = isLogin ? loginFields : signupFields;
  const error = useSelector((state) => state.auth.error);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    validationSchema: (
      isLogin ? loginValidationSchema : signUpValidationSchema
    ),
    onSubmit: (payload) => {
      const currentRequest = isLogin
        ? getLoginRequest
        : getSignupRequest;
      dispatch(currentRequest(payload));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>{isLogin ? TEXT_LOGIN : TEXT_SIGNUP}</h2>
      {currentFields.map((field) => (
        <FormControl key={field}>
          <InputLabel htmlFor="my-input">{field}</InputLabel>
          <Input
            id={field}
            name={field}
            type="text"
            label={field}
            value={formik.values[field]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-describedby="my-helper-text"
            error={formik.touched[field] && Boolean(formik.errors[field])}
          />
          {formik.touched[field] && formik.errors[field] && (
            <div className="error">{formik.errors[field]}</div>
          )}
        </FormControl>
      ))}
      {error && <div className="error">{error}</div>}
      <Button
        id="submit-button"
        variant="outlined"
        sx={{ mb: 10 }}
        type="submit"
      >
        Сonfirm
      </Button>
    </form>
  );
}

AuthForm.propTypes = {
  activeModalType: PropTypes.string.isRequired,
};
export default memo(AuthForm);
