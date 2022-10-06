import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  Alert,
  Stack,
} from '@mui/material';

function AlertForm({ alert, option }) {
  return (
    <Stack
      sx={{
        marginTop: '20%',
        width: '100%',
        alignItems: 'center',
      }}
      spacing={2}
    >
      <Alert variant="filled" severity={option}>
        { alert }
      </Alert>
    </Stack>
  );
}

AlertForm.propTypes = {
  alert: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
};

export default memo(AlertForm);
