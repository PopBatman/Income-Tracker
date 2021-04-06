import React, {useRef} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  buttons: {
    display: 'flex',
  }
}));

function IncomeForm({ income, setIncome }) {

  const classes = useStyles();

  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);

  const AddIncome = e => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1] - 1, d[2]);
    
    setIncome([...income, {
      "desc": desc.current.value,
      "price": price.current.value,
      "date": newD.getTime()
    }]);

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
  }

  return (
    
    <form className={classes.root} onSubmit={AddIncome}>
      <div>
        <TextField type="text" name="desc" id="desc" label="Description" placeholder="Description de la dépense" inputRef={desc} />
        <TextField type="number" name="price" id="price" label="Prix" placeholder="Prix de la dépense" inputRef={price} />
        <TextField type="date" name="date" id="date" label="Date" inputRef={date} />
        <Button type="submit" className={classes.buttons} variant="contained" color="primary">
          Ajouter
        </Button>
      </div>
    </form>
  )
}

export default IncomeForm;