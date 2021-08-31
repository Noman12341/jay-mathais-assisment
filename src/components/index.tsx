import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Paper, Box, FormControl, Switch, Typography, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyle from './styles';
import MainCard from './MainCard/MainCard';

interface IEvent {
  name?: string | undefined;
  value: unknown;
}
const citiesArr: string[] = ['Tokyo', 'Delhi', 'Shanghai', 'Sao Paulo', 'Mexico City'];
// Root layout component
function Layout() {
  const classes = useStyle();
  const [city, setCity] = useState<string>('Tokyo');

  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const theme = createTheme({
    palette: {
      type: darkTheme ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Box textAlign='right' p={3}>
          <Typography style={{ transform: 'translateX(-12px)' }}>{darkTheme ? 'Light Theme' : 'Dark Theme'}</Typography>
          <Switch onChange={() => setDarkTheme(!darkTheme)} />
        </Box>
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
        <Box display="flex" justifyContent="center" pt={4}>
          <MainCard cityName={city} />
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default Layout;
