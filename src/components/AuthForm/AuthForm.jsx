/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  useFormik,
} from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
} from '@mui/material';

import './authform.css';

const signUpValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string().required('Password is required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string().required('Password is required'),
});

export default function AuthForm(active) {
  const fields = ['username', 'password'];
  const isLogin = active.status === 'Login' ? 'Login' : '';
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    validationSchema: (isLogin === 'Login' ? loginValidationSchema : signUpValidationSchema),
    onSubmit: () => {
      console.log('Req');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>{isLogin ? 'Login' : 'SignUp'}</h2>
      {fields.map((field) => (
        <FormControl key={field}>
          <InputLabel htmlFor="my-input">{field}</InputLabel>
          <Input
            id={field}
            name={field}
            type={field}
            label={field}
            value={formik.values[field]}
            onChange={formik.handleChange}
            aria-describedby="my-helper-text"
            error={formik.touched[field] && Boolean(formik.errors[field])}
          />
          {formik.touched[field] && formik.errors[field] && (
          <div className="error">{formik.errors[field]}</div>
          )}
        </FormControl>
      ))}
      {!isLogin && (
      <FormControl key="email">
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          id="email"
          email="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          aria-describedby="my-helper-text"
        />
        {formik.touched.email && Boolean(formik.errors.email) && (
          <div className="error">{formik.errors.email}</div>
        )}
      </FormControl>
      )}
      <Button variant="outlined" sx={{ mb: 10 }} type="submit">Сonfirm</Button>
    </form>
  );
}