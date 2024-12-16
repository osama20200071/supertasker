import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import data from '../api/data.json';

export type UsersSlice = {
  entities: User[];
};

const initialState: UsersSlice = {
  entities: data.users,
};

type DraftUser = RequireOnly<User, 'alterEgo' | 'realName'>;

const createUser = (user: DraftUser): User => {
  return { id: nanoid(), ...user, tasks: [] };
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftUser>) => {
      state.entities.unshift(createUser(action.payload));
    },
    removeUser: (state, action: PayloadAction<User['id']>) => {
      let index = state.entities.findIndex(
        (user) => user.id === action.payload,
      );
      state.entities.splice(index, 1);
    },
    updateUser: (state, action: PayloadAction<RequireOnly<User, 'id'>>) => {
      let index = state.entities.findIndex(
        (user) => user.id === action.payload.id,
      );
      let old = state.entities[index];
      state.entities[index] = { ...old, ...action.payload };
    },
  },
});

export const { addUser, removeUser, updateUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
