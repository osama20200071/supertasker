import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from './store';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

// useAppDispatch is a function that returns the app dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppDispatch2;

// that is only available with react-redux > 9.1
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
