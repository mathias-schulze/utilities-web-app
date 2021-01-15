import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';
import { POWER, GAS } from '../App'

export type Reading = {
  id: string,
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
      action.payload.id = action.payload.type + "-" + action.payload.date;
      if (action.payload.type === POWER) {
        state.powerList = [...state.powerList, action.payload];
      } else if (action.payload.type === GAS) {
        state.gasList = [...state.gasList, action.payload];
      }
    },
  },
});

export const { openAddDialog, closeAddDialog, addReading } = readingsSlice.actions;

export const isAddDialogVisible = (state: RootState) => state.readings.addDialogvisible;

export const getPowerList = (state: RootState) => state.readings.powerList;
export const getGasList = (state: RootState) => state.readings.gasList;

export const addReadingAsync = (reading: Reading): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(addReading(reading));
  }, 1000);
};

export default readingsSlice.reducer;
