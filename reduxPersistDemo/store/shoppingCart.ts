import store, { RootState } from ".";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "./hooks";
import { Product } from "./product";

export interface CartProductInfo {
    pid: number
    count: number
    price: number
    total: number
};

export interface CartInfo {
    cartTotal: number
    productInfo: CartProductInfo[]
}


export const cartInitialState: CartInfo = {
    cartTotal: 0,
    productInfo: []
}
const cartSlice = createSlice({
    name: 'shoppingCart',
    initialState: cartInitialState,
    reducers: {
        // 总价计算
        calcTotalPrice: (state) => {
            state.cartTotal = state.productInfo
                .reduce((total, pInfo) => (total += pInfo.total), 0)
        },
        // 添加评论 传入pid
        addToCart: (state, action: PayloadAction<Product>) => {
            const product = action.payload;
            const productCartInfo = state.productInfo.find(cartData => cartData.pid === product.id);
            if (!productCartInfo) {
                state.productInfo = [{
                    pid: product.id,
                    count: 1,
                    price: product.price,
                    total: product.price
                }, ...state.productInfo];
            } 
        },
        cartProductAdd: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            const productCartInfo = state.productInfo.find(cartData => cartData.pid === productId);
            if (!productCartInfo) { return; };
            productCartInfo.count += 1;
            productCartInfo.total = productCartInfo.price * productCartInfo.count;
        },
        cartProductMinus: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            const productCartInfoIndex = state.productInfo.findIndex(cartData => cartData.pid === productId);
            if (productCartInfoIndex > -1) {
                const productCartInfo = state.productInfo[productCartInfoIndex];
                if (
                    productCartInfo.count === 1
                ) {
                    state.productInfo = state.productInfo.filter(d => d.pid !== productId);
                } else {
                    state.productInfo[productCartInfoIndex].count -= 1;
                    state.productInfo[productCartInfoIndex].total = productCartInfo.price * productCartInfo.count;
                }
            }
        }
    },
})

export const getShopingCart = (state: RootState) => state.shoppingCart;

export const getShopingCartCount = (state: RootState) => state.shoppingCart.productInfo.length;

export const { addToCart, cartProductAdd, cartProductMinus, calcTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
