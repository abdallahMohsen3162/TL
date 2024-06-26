// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import Levels from './slice';
import Blocks from './block';

export const store = configureStore({
  reducer: {
    Levels: Levels,
    Blocks: Blocks
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
