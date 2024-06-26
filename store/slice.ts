// store/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface State {
  arr: Level[];
}

const initialState: State = {
  arr: [],
};

export const Levels = createSlice({
  name: 'personsArray',
  initialState,
  reducers: {
    addlevel: (state, action: PayloadAction<Level>) => {
      state.arr.push({
        name: action.payload.name,
        value: action.payload.value,
        url: action.payload.url
      }) 
    },

    removelevel:(state, action: PayloadAction<Level>) => {
      for(let i = 0; i < state.arr.length; i++){
        if(state.arr[i].name == action.payload.name && state.arr[i].value == action.payload.value){
          state.arr.splice(i, 1);
        }
      }
    }
    
  },
});

export const { addlevel , removelevel} = Levels.actions;
export default Levels.reducer;
