import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CounterState {
    name: string;
}

const initialState:CounterState = {
    name: 'zhangsan',
}
const counterSlice = createSlice({
    name:'initInfo',
    initialState,
    reducers: {
        inputInfo:(state,action:PayloadAction<string>) => {
            state.name = action.payload
        }
    }
})

export const {inputInfo} = counterSlice.actions

export const selectCount = (state: RootState) => state.input.name

export default counterSlice.reducer;