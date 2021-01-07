import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { Todo, fakeFetchRemoteData } from '../api';

const initialState: Todo[] = [
  {
    id: 1,
    text: 'Chinese',
    completed: true
  },
  {
    id: 2,
    text: 'Math',
    completed: true
  }
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      const { id, text } = action.payload;
      state.push({ id, text, completed: false });
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;

export const getTodoList = (time: number) => {
  return async (dispatch: Dispatch) => {
    const response = await fakeFetchRemoteData(time);
    response.forEach(res => {
      dispatch(addTodo(res));
    });
  };
};
