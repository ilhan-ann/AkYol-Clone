import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import categories from "../../data/category.json"
import type { CategoryType } from '../../types/Category';
import { useGetAllBrands } from '../../queries/brands';
import type { categoryBrandType } from '../../api/brands';
import { useGetAllProducts } from '../../queries/products';
import ProductCard from '../../components/ProductCard';
import nProgress from 'nprogress';
import { useTranslation } from 'react-i18next';


function index() {
  const { t } = useTranslation();
  const {id} = useParams()
  const [ category, setCategory ] = useState<CategoryType | undefined>(undefined)
  const [ data, setData ] = useState<{order:string,brands:string[]}>({
    order:"",
    brands:[]
  })
  
  const brands = useGetAllBrands(id)
  const products = useGetAllProducts(id,data.order,data.brands)

  const selectBrands = (data:categoryBrandType[] | undefined)=>{
    if (!data) return []
    const collectBrands = []
    for(let i = 0; i<data.length; i++){
      for(let j = 0; j<data[i].brands.length; j++){
        collectBrands.push(data[i].brands[j])
      }
    }
    return collectBrands
  }

  useEffect(()=>{
    if (brands.isLoading || products.isLoading){
      nProgress.start()
    }else{
      nProgress.done()
    }
  },[brands.isLoading,products.isLoading])
  
  useEffect(()=>{
    const findCategory = (categories:CategoryType[],id:number):CategoryType | undefined=>{
      for(const category of categories){
        if (category.id === id){
          return category
        }
        if (category.subcategories) {
          const found = findCategory(category.subcategories,id)
          if (found) return found
        }
      }
      return undefined
    }

    setCategory(findCategory(categories,Number(id)))
  },[id])
  
  return (
    <div className='container mx-auto px-3 my-5'>
      <h1 className='text-3xl font-bold'> {category?.name}</h1>
      <div className='text-gray-500 mb-5'>Jemi: <span className='font-medium'>{products.data?.length}</span> haryt</div>
      
      <div className='flex gap-3'>
        <div className='w-3/4 grid grid-cols-4 gap-3 h-fit'>
          {
            products.data && products.data.map((product)=>(
              <ProductCard key={"category-page-products-"+product.id} data={product}/>
            )) 
          }
        </div>
      </div>
    </div>
  )
}

export default index