import React, { memo } from 'react';

import {
  Box,
  CircularProgress,
} from '@mui/material';


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
