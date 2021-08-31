import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  root:{
    minHeight: '100vh',
  }, searchBtnBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4, 0)
  }, formControl: {
    minWidth: theme.spacing(40),
  }
}));