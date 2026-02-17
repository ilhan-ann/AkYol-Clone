import axios from "axios";


export type brandType = {
  id:string;
  image:string;
  name:string;
}

export type categoryBrandType = {
  category:string;
  categoryId:number;
  brands:brandType[]
}

export const getAllBrands = async(id?:string)=>{
  const {data} = await axios.get<categoryBrandType[]>(`http://localhost:5000/brands?categoryId=${id||''}`)
  return data
}
export const getAllBrandsByKeyword = async(keyword?:string)=>{
  const {data} = await axios.get<brandType[]>(`http://localhost:5000/brandsByKeyword`) // ?keyword=keyword => hakyky backend catylanda sheyle ulanylyar
  return data
}