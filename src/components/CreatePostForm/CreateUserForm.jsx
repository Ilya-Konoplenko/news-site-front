import React, { useState, memo } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import {
  FormControl,
  Button,
  TextField,
} from '@mui/material';

import { getCreateNewsRequest } from '../../redux/actions/news';

import newsFormValidationSchema from './constants';

import './createUserForm.css';

function CreateUserForm() {
  const currentFields = ['title', 'description', 'tags'];
  const [selectedImage, setSelectedImage] = useState();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      tags: '',
    },
    validationSchema: (
      newsFormValidationSchema
    ),
    onSubmit: (output) => {
      dispatch(getCreateNewsRequest({ output, selectedImage }));
    },
  });

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Create new post</h2>
      <FormControl key="image">
        <input
          id="image"
          name="image"
          accept="image/*"
          type="file"
          onChange={imageChange}
        />
      </FormControl>

      {selectedImage && (
      <div className="image-section">
        <img
          src={URL.createObjectURL(selectedImage)}
          alt="Thumb"
        />
        <Button onClick={removeSelectedImage}>
          Remove This Image
        </Button>
      </div>
      )}
      {currentFields.map((field) => (
        <FormControl key={field}>
          <TextField
            id={field}
            name={field}
            type="text"
            label={field}
            value={formik.values[field]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            maxRows={4}
            multiline
            error={formik.touched[field] && Boolean(formik.errors[field])}
          />
          {formik.touched[field] && formik.errors[field] && (
            <div className="error">{formik.errors[field]}</div>
          )}
        </FormControl>
      ))}
      <Button
        type="submit"
        id="submit-button"
        variant="outlined"
        sx={{ mb: 10 }}
      >
        Сonfirm
      </Button>
    </form>
  );
}

export default memo(CreateUserForm);
