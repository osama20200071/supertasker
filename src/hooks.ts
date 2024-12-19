import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { ApplicationDispatch, ApplicationState } from './store';
import { useMemo } from 'react';

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;

export const useAppDispatch: () => ApplicationDispatch = useDispatch;

export const useTasks = () => {
  const tasks = useAppSelector((state) => state.tasks.entities);
  const isLoading = useAppSelector((state) => !!state.tasks.isLoading);
  return useMemo(() => [tasks, isLoading] as const, [tasks, isLoading]);
};
