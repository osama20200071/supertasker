import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from '@reduxjs/toolkit';
import { removeUser, updateUser } from './users-slice';

export type TasksState = {
  entities: Task[];
  isLoading?: boolean;
};

type DraftTask = RequireOnly<Task, 'title'>;

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, thunkApi): Promise<Task[]> => {
    const response = await fetch('/api/tasks').then((res) => res.json());
    // thunkApi.
    return response.tasks;
  },
);

export const createTask = (draftTask: DraftTask): Task => {
  return { id: nanoid(), ...draftTask };
};

const initialState: TasksState = {
  entities: [],
  isLoading: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.entities.unshift(task);
    },
    removeTask: (state, action: PayloadAction<Task['id']>) => {
      const filteredTasks = state.entities.filter(
        (task) => task.id !== action.payload,
      );
      state.entities = [...filteredTasks];
      // const index = state.entities.findIndex(
      //   (task) => task.id === action.payload,
      // );
      // state.entities.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeUser, (state, action) => {
        const userId = action.payload;
        for (const task of state.entities) {
          task.user = task.user === userId ? undefined : task.user;
        }
      })
      .addCase(updateUser, (state, action) => {
        const user = action.payload;
        console.dir(user);
        for (const task of state.entities) {
          if (task.user === user.id) {
          }
        }
      });

    // for the async code
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTasks.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice;
