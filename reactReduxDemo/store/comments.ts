import { RootState } from ".";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommentInfo {
    id: number,
    text: string;
    rating: number; 
    user: string;
};

type AddCommentInfoAction = Omit<CommentInfo, 'id'> & { pid: number }

export const counterInitialState = [
    {
        pid: 1,
        comments: [
            { text: '非常流畅，很好用!', rating: 4.5, user: 'Alice Liu', id: 3 },
            { text: 'awesome!', rating: 2, user: 'Zorro' , id: 2},
            { text: 'harmony os 不错!', rating: 4.5, user: 'Louis' , id: 1},
        ]
    },
    {
        pid: 2,
        comments: [
            { text: '界面很漂亮!', rating: 4.5, user: 'Michael Wang', id: 1 }
        ]
    },
]

const commentsSlice = createSlice({
    name: 'comments',
    initialState: counterInitialState,
    reducers: {
        // 添加评论
        addComment: (state, action: PayloadAction<AddCommentInfoAction>) => {
            const {pid, text, rating, user } = action.payload;
            const comments = state.find(d => d.pid === pid)?.comments;
            if (comments && comments.length) {
                const nextId = comments[0].id + 1;
                comments.splice(0, 0, { text, rating, user, id: nextId })
            } else {
                state.push({
                    pid,
                    comments: [ { text, rating, user, id: 1 } ]
                })
            }
        },
    },
})

export const getProductComments = (state: RootState) => state.comments;

export const { addComment } = commentsSlice.actions;

export default commentsSlice.reducer;
