import React from 'react';
import { Box, CircularProgress  } from '@material-ui/core';
import useStyles from './styles';

function Spinner() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CircularProgress size={100} />
    </Box>
  );
}
export default Spinner;