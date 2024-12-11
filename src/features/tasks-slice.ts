import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export type TasksState = {
  entities: Task[];
};

const initialState: TasksState = {
  entities: [],
};

// type DraftTask2 = Pick<Task, 'title'>; // as we need to make sure we have the title
// type DraftTask = Omit<Task, 'id'> & { id?: string };

type DraftTask = RequireOnly<Task, 'title'>;

const createTask = (draftTask: DraftTask): Task => {
  return { ...draftTask, id: nanoid() };
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      state.entities.unshift(createTask(action.payload));
    },
    removeTask: (state, action: PayloadAction<Task['id']>) => {
      const filteredTasks = state.entities.filter(
        (task) => task.id !== action.payload,
      );
      state.entities = filteredTasks;

      // const taskIndex = state.entities.findIndex(
      //   (task) => task.id === action.payload,
      // );
      // state.entities.splice(taskIndex, 1);
    },
  },
});

export const { addTask, removeTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
