import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';
import { firestore } from '../app/Firebase'
import moment from 'moment'

export type Reading = {
  type: string,
  date: number,
  value: number,
}

interface ReadingsState {
  addDialogvisible: boolean,
  powerList: Reading[],
  gasList: Reading[],
}

const initialState: ReadingsState = {
  addDialogvisible: false,
  powerList: [],
  gasList: [],
};

export const readingsSlice = createSlice({
  name: 'readings',
  initialState,
  reducers: {
    openAddDialog: state => {
      state.addDialogvisible = true;
    },
    closeAddDialog: state => {
      state.addDialogvisible = false;
    },
    addReading: (state, action: PayloadAction<Reading>) => {
      var collection = action.payload.type;
      firestore.collection(collection).add({
        date: moment(action.payload.date).format('yyyy-MM-DD'),
        timestamp: action.payload.date,
        value: action.payload.value
      });
    },
  },
});

export const { openAddDialog, closeAddDialog, addReading } = readingsSlice.actions;

export const isAddDialogVisible = (state: RootState) => state.readings.addDialogvisible;

export const addReadingAsync = (reading: Reading): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(addReading(reading));
  }, 1000);
};

export default readingsSlice.reducer;
