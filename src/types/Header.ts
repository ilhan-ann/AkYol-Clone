import type { ReactNode } from "react";

export type TopType = {
    image: string;
    name: 'top'
}

export type PopupProps = {
  open:boolean;
  title:string;
  setOpen:(open:boolean)=>void;
  children:ReactNode;
  active:"phone" | "email";
  setActive:(active:"phone" | "email")=>void;
  sendData:()=>void;
}

export type InputProp = {
  label:string;
  type:string;
  defaultValue?:string;
  name:string;
  onChange:(e:any)=>void;
  value:string;
  regex?:RegExp;
}