import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IncomeItem from './IncomeItem';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 14,
    fontFamily: 'Roboto',
    marginTop: '5.5em',    
  },
  
}));

function IncomeList({ income, setIncome }) {
  
  const classes = useStyles();

  const removeIncome = i => {
    let temp = income.filter((v, index) => index != i);
    setIncome(temp);
  }

  const sortByDate = (a, b) => {
    return a.date - b.date;
  }

  return (
    <div className={classes.root}>
      <h1>Liste des dépenses</h1>
      <div className="income-list">
        {
          income.sort(sortByDate).map((value, index) => (
            <IncomeItem 
              key={index} 
              income={value} 
              index={index} 
              removeIncome={removeIncome}
            />
          ))
        }
      </div>
    </div>
  )
}

export default IncomeList;