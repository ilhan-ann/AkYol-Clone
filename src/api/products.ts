import axios from "axios";
import type { ProductCardProps } from "../types/Product";

export const getAllProducts = async(id:string|undefined,order:string,brands:string[])=>{
  let newOrder = ""
  if (order == 'asc'){
    newOrder = "-price"
  }else if(order == 'desc'){
    newOrder = "price"
  }
  const {data} = await axios.get<ProductCardProps[]>(`http://localhost:5000/products?categoryId=${id}&_sort=${newOrder}`)
  return data
}

export const getAllProductsByKeyword = async(keyword:string|undefined,order:string,brands:string[])=>{
  let newOrder = ""
  if (order == 'asc'){
    newOrder = "-price"
  }else if(order == 'desc'){
    newOrder = "price"
  }
  const {data} = await axios.get<ProductCardProps[]>(`http://localhost:5000/products?name=${keyword}&_sort=${newOrder}`)
  return data
}

// _sort=price , _sort=-price