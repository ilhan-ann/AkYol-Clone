import { useMutation } from "@tanstack/react-query"
import { login, register } from "../api/user"
import type { UserLoginDataT } from "../types/User"
import type { AxiosResponse } from "axios"
import toast from "react-hot-toast"

export const useRegister = ()=>{
  return useMutation({
    mutationFn:register,
    onSuccess:()=>{
      alert("Siz ustunlikli registrasiya boldunyz")
    },
    onError:()=>{
      alert("Hello yalnyshlyk")
    }
  })
}
export const useLogin = ()=>{
  return useMutation({
    mutationFn:login,
    onSuccess:(data:AxiosResponse<UserLoginDataT[]> | undefined)=>{
      if(data){
        toast.success("Siz ustinlikli iceri girdiniz!")
        localStorage.setItem("user",JSON.stringify(data.data[0]))
        localStorage.setItem("token",data.data[0].token!)
      }
    },
    onError:()=>{
      alert("Hello yalnyshlyk")
    }
  })
}