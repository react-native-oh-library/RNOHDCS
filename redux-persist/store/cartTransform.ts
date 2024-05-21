

import { createTransform } from 'redux-persist';


export const cartTransform = createTransform(
    (inComingState, key, allState) => {
        return inComingState;
    },
    // 持久化保存前
    (state) => {
        return state; 
    },
    { whitelist: ['cartTotal'] }
);
