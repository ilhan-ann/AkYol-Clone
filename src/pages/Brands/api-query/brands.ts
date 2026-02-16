import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetAllBrands = ()=>{
  return useQuery({
    queryKey: [`brands`],
    queryFn: async() => {
      console.log("Hello")
      const {data} = await axios("http://localhost:5000/brands"); 
      return data
    },
    staleTime: Infinity
    // staleTime:1000*20
    // placeholderData: keepPreviousData,
    // gcTime:1000*5
  });
} 