import * as React from 'react';
import PropTypes from 'prop-types';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function AlertForm({ alert }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>

      <Alert variant="filled" severity="error">
        { alert }
      </Alert>
    </Stack>
  );
}

AlertForm.propTypes = {
  alert: PropTypes.string.isRequired,
};

export default AlertForm;
