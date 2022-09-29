import React, { memo } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import './spinner.css';

function Spinner() {
  return (
    <Box>
      <CircularProgress sx={{
        width: '100px',
        height: '100px',
      }}
      />
    </Box>
  );
}

export default memo(Spinner);
