import { create } from 'zustand';
import {IUser} from "./models/IUser";

type StoreType = {
    userSlice: {
        allUsers: any[];
        loadUsers: (users: any[]) => void;
    };
    postSlice: {
        allPosts: any[];
        loadPosts: (posts: any[]) => void;
    };
    commentSlice: {
        allComments: any[];
        loadComments: (comments: any[]) => void;
    };
};
export const useStore = create<StoreType>()((set) => ({
    userSlice: {
        allUsers: [],
        loadUsers: (users) =>
            set((state) => ({
                ...state,
                userSlice: {
                    ...state.userSlice,
                    allUsers: users,
                },
            })),
    },
    postSlice: {
        allPosts: [],
        loadPosts: (posts) =>
            set((state) => ({
                ...state,
                postSlice: {
                    ...state.postSlice,
                    allPosts: posts,
                },
            })),
    },
    commentSlice: {
        allComments: [],
        loadComments: (comments) =>
            set((state) => ({
                ...state,
                commentSlice: {
                    ...state.commentSlice,
                    allComments: comments,
                },
            })),
    },
}));