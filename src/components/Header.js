import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    fontSize: 14,
    fontFamily: 'Roboto',
  },
  totalIncome: {
    float: 'right',
    width: '150px',
    marginRight: '5em',
    height: '24px',
    textAlign: 'center',
    fontSize: '18px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  }
}));

function Header({totalIncome}) {

  const classes = useStyles(); 

  return (
    <header className={classes.root}>
      <h1>Income Tracker</h1>
      <div className={classes.totalIncome}>£{totalIncome}</div>
    </header>
  );
}

export default Header;