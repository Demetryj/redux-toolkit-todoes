import { nanoid } from 'nanoid';

export const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      text,
      completed: false,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'task/deleteTask',
    payload: { id: taskId },
  };
};

export const toggleCompleted = taskId => {
  return {
    type: 'task/toggleCompleted',
    payload: { id: taskId },
  };
};

export const setFilter = value => {
  return {
    type: 'filters/setFilter',
    payload: { status: value },
  };
};
