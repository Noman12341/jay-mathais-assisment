import React, { useState } from 'react';
import { Paper, Box, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyle from './styles';

interface IEvent {
  name?: string | undefined;
  value: unknown;
}
const citiesArr: string[] = ['Tokyo', 'Delhi', 'Shanghai', 'Sao Paulo', 'Mexico City'];
// Root layout component
function Layout() {
  const classes = useStyle();
  const [city, setCity] = useState<string>('Tokyo');

  return (
    <Paper className={classes.root}>
      <Box className={classes.searchBtnBox}>
        <FormControl className={classes.formControl}>
          <InputLabel id="CountryInput">Select City</InputLabel>
          <Select labelId="cityLable" id="city" value={city} onChange={(e: React.ChangeEvent<IEvent>): void => setCity(e.target.value as string)}>
            {citiesArr.map((item: string) => (
              <MenuItem value={item} key={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
}

export default Layout;
