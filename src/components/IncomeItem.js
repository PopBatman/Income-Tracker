import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    marginTop: '1.5em',    
  },
  
}));


function IncomeItem({income, index, removeIncome}) {
  const classes = useStyles();

  let date = new Date(income.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = i => {
    removeIncome(i);
  }

  return (

    <div className={classes.root}>      
      <TextField
        id="filled-read-only-input"
        label="Description"
        defaultValue={income.desc}
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
      />

      <TextField
        id="filled-read-only-input"
        label="Prix"
        defaultValue={income.price}
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
      />

      <TextField
        id="filled-read-only-input"
        label="Date"
        defaultValue={day + "/" + month + "/" + year}
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
      />

      <DeleteRoundedIcon onClick={() => removeHandle(index)} />


    </div>
    


    // <div className={classes.root}>
    //   <button className="remove-item" onClick={() => removeHandle(index)}>x</button>
    //   <div className="desc">{income.desc}</div>
    //   <div className="price">£{income.price}</div>
    //   <div className="date">{day + "/" + month + "/" + year}</div>
    // </div>
  )
}

export default IncomeItem;