import { RootState } from ".";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const productsInitialState = [
    {
        id: 1,
        shop: 'huawei 官方旗舰店',
        prodName: 'Mate60 Pro',
        params: {
            cpu: '麒麟9000',
            os: 'Harmony',
            memory: '12g',
            screenSize: 6.2
        },
        price: 7999,
        sales: 99,
    },
    {
        id: 2,
        shop: 'xiaomi 官方旗舰店',
        prodName: 'xiaomi 13 Pro',
        params: {
            cpu: '8 gen2',
            os: 'Android',
            memory: '12g',
            screenSize: 6.1
        },
        price: 5999,
        sales: 108,
    },
    {
        id: 3,
        shop: 'iphone 官方旗舰店',
        prodName: 'iphone 14 Pro',
        params: {
            cpu: 'A15',
            os: 'Ios',
            memory: '6g',
            screenSize: 6.8
        },
        price: 6099,
        sales: 89,
    },
]

export type Product = typeof productsInitialState[0]

const productsSlice = createSlice({
    name: 'products',
    initialState: productsInitialState,
    reducers: {},
})

export const getProducts = (state: RootState) => state.products;

// 详情页数据
export const getProductDetail = (state: RootState) => state.products.find(p => p.id === state.uiControl.currentProductId);
export const getProductComments = (state: RootState) => state.comments.find(p => p.pid === state.uiControl.currentProductId)?.comments;

export default productsSlice.reducer;
