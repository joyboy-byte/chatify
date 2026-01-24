import { create } from "zustand";

export const useAuthStore = create((set) => ({
    authUser: {name: "yash", _id: 123, age: 22},
    isLoading: false,
    isLoggedIn: false,

    login: () => {
        console.log("We just logged in");
        set({isLoggedIn: true, isLoading: true});
    },
}))