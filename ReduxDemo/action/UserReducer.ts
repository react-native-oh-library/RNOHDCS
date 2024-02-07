import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CounterState {
    user: {};
}

const initialState:CounterState = {
    user: {  
    'name':'zhangsna',
    'date':'2000-9-30',
    'email':'130xxxxxxx@qq.com',
    'height':'180',
    'hobby':'study'
   },
}
const counterSlice = createSlice({
    name:'initInfo',
    initialState,
    reducers: {
        addUser:(state,action:PayloadAction<object>) => {
            state.user = action.payload
        }
    }
})

export const {addUser} = counterSlice.actions

export const selectCount = (state: RootState) => state.user.user

export default counterSlice.reducer;