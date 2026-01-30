export type CategoryType = {
  id:number;
  name:string;
  subcategories?:CategoryType[]
}