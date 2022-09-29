import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import './Spinner.css';

export default function Spinner() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress sx={{
        width: '100px',
        height: '100px',
      }}
      />
    </Box>
  );
}
