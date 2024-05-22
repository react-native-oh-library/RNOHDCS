import { RootState } from ".";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 控制页面切换， 和保存详情页id

export enum UiControl {
    PRODUCT_LIST,
    PRODUCT_DETAIL,
    SHOPCART
}

export const pageInitialState = {
    currentPage: UiControl.PRODUCT_LIST, 
    currentProductId: 1
}; 

const switchUiSlice = createSlice({
    name: 'uiControl',
    initialState: pageInitialState,
    reducers: {
        switchUi: (state, action: PayloadAction<UiControl>) => {
            state.currentPage = action.payload;
            return;
        },
        saveProductId: (state, action: PayloadAction<number>) => {
            state.currentProductId = action.payload;
            return;
        }
    },
})

export const getCurrentPage = (state: RootState) => state.uiControl.currentPage;




export const { switchUi, saveProductId } = switchUiSlice.actions;

export default switchUiSlice.reducer;
