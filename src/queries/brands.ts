import { useQuery } from "@tanstack/react-query"
import { getAllBrands, getAllBrandsByKeyword } from "../api/brands";

export const useGetAllBrands = (id?:string)=>{
  return useQuery({
    queryKey: [`brands ${id}`],
    queryFn: () => {
      return getAllBrands(id)
    },
    staleTime: Infinity,
    // staleTime:1000*5,
    // gcTime:1000*10,
  });
}
export const useGetAllBrandsByKeyword = (keyword?:string)=>{
  return useQuery({
    queryKey: [`brands ${keyword}`],
    queryFn: () => {
      return getAllBrandsByKeyword(keyword)
    },
    staleTime: Infinity,
    // staleTime:1000*5,
    // gcTime:1000*10,
  });
}

