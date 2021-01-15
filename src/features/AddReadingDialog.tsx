import React, { useState } from 'react'
import { Dialog, DialogTitle, TextField, Button } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { isAddDialogVisible, closeAddDialog, addReading, Reading } from './readingsSlice';

interface AddReadingDialogProps {
  type: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

const AddReadingDialog = ({ type }: AddReadingDialogProps) => {

  const classes = useStyles();
  const visible = useSelector(isAddDialogVisible);
  const [newReading, setNewReading] = useState<Reading>({
      date: moment().valueOf(),
      value: 0,
  } as Reading);
  const dispatch = useDispatch();
  
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Dialog open={visible} onClose={e => dispatch(closeAddDialog())} maxWidth='lg'>
        <DialogTitle>Messung erfassen</DialogTitle>
        <form className={classes.root} onSubmit={(e) => {
          e.preventDefault()
          dispatch(addReading({...newReading, type: type}))
          setNewReading({
              date: moment().valueOf(),
              value: 0,
          } as Reading)
          dispatch(closeAddDialog())
        }}>
          <KeyboardDatePicker 
            label="Datum"
            variant="dialog"
            format="DD.MM.yyyy"
            value={moment(newReading.date).toDate()}
            onChange={newDate => setNewReading({...newReading, date: (newDate === null ? 0 : newDate.valueOf())})}/>
          <TextField required label="Zählerstand" type="number" variant="standard"
              value={newReading.value} onChange={e => setNewReading({...newReading, value: parseInt(e.target.value)})}/>
          <Button variant="contained" color="primary" type="submit">
              Hinzufügen
          </Button>
        </form>
      </Dialog>
    </MuiPickersUtilsProvider>
  )
}

export default AddReadingDialog
