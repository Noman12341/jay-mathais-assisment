import React, { useState } from 'react';
import { Paper, Box, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyle from './styles';

// Root layout component
function Layout() {
  const classes = useStyle();
  const [city, setCity] = useState<string>('Tokyo');

  return (
    <Paper className={classes.root}>
      <Box className={classes.searchBtnBox}>
        <FormControl className={classes.formControl}>
          <InputLabel id="CountryInput">Select City</InputLabel>
          <Select labelId="cityLable" id="city" value={city} onChange={(e: any) => setCity(e.target.value)}>
            <MenuItem value="Tokyo">Tokyo</MenuItem>
            <MenuItem value="Delhi">Delhi</MenuItem>
            <MenuItem value="Shanghai">Shanghai</MenuItem>
            <MenuItem value="Sao Paulo">Sao Paulo</MenuItem>
            <MenuItem value="Mexico City">Mexico City</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
}

export default Layout;
