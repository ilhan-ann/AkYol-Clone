import { create } from "zustand";
import type { UserLoginDataT } from "../types/User";

type UserStoreT = {
  user: UserLoginDataT | null;
  token: string;
  setUser: (user: UserLoginDataT |null) => void;
  setToken: (token: string) => void;
}

export const useUserStore = create<UserStoreT>((set) => ({
  user: {
    phone: "",
    fullname: "",
    email: "",
    password: ""
  },
  token: "",
  setUser: (user: UserLoginDataT | null) =>
    set({
      user,
    }),
  setToken: (token: string) => {
    set({
      token
    })
  }
}));
