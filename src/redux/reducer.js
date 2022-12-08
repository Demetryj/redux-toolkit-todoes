import { combineReducers } from 'redux';
import { statusFilters } from './constants';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Learn JavaScript', completed: true },
  { id: 2, text: 'Learn React', completed: false },
  { id: 3, text: 'Learn Redux', completed: false },
  { id: 4, text: 'Learn Node.js', completed: false },
  { id: 5, text: 'Build apps', completed: false },
];

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return [...state, action.payload];

    case 'task/deleteTask':
      return state.filter(task => task.id !== action.payload.id);

    case 'task/toggleCompleted':
      return state.map(task => {
        if (task.id !== action.payload.id) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });

    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, actoin) => {
  switch (actoin.type) {
    case 'filters/setFilter':
      return { ...state, status: actoin.payload.status };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
