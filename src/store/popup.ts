import { create } from "zustand";

type PopupStoreT = {
  openInfo:boolean;
  setOpenInfo:(openInfo:boolean)=>void
}

export const usePopupStore = create<PopupStoreT>((set) => ({
  openInfo:false,
  setOpenInfo: (openInfo: boolean) => {
    set({
      openInfo //openInfo:openInfo
    })
  }
}));
