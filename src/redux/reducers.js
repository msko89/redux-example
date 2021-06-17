import { ADD_TODO } from './actions';

const initialState = [];

function todoApp(previousState = initialState, action) {
  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }

  return previousState;
}
