import { addTask, createTask, removeTask, tasksReducer } from './tasks-slice';

describe('tasksSlice', () => {
  const initialState = {
    entities: [
      createTask({ title: 'first  task' }),
      createTask({ title: 'second  task' }),
    ],
  };

  // this will return the action name from the action creator
  it(`it should add task when ${addTask}`, () => {
    const task = createTask({ title: 'new task' });
    const action = addTask(task);
    const newState = tasksReducer(initialState, action);

    expect(newState.entities).toEqual([task, ...initialState.entities]);
  });
});
