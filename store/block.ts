// store/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface State {
  arr: Block[];
}

const initialState: State = {
  arr: [],
};

export const Blocks = createSlice({
  name: 'BlocksArray',
  initialState,
  reducers: {
    addblock: (state, action: PayloadAction<Block>) => {
      state.arr.push({
        name: action.payload.name,
        level: action.payload.level,
      }) 
    },

    removeblokc:(state, action: PayloadAction<Block>) => {
      for(let i = 0; i < state.arr.length; i++){
        if(state.arr[i].name == action.payload.name && state.arr[i].level == action.payload.level){
          state.arr[i].level = -1;
        }
      }
    },
    merge:(state, action: PayloadAction<{name: string, level: number}>) => {
      for(let i = 0; i < state.arr.length; i++){
        if(state.arr[i].name == action.payload.name){
          state.arr[i].level = action.payload.level;
        }
      }
    }
  },
});

export const { addblock , removeblokc, merge} = Blocks.actions;
export default Blocks.reducer;
