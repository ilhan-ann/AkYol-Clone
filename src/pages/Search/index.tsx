import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllBrandsByKeyword } from '../../queries/brands'
import { useGetAllProductsByKeyword } from '../../queries/products'
import ProductCard from '../../components/ProductCard'

function index() {
  const { keyword } = useParams()
  const [data, setData] = useState<{ order: string, brands: string[] }>({
    order: "",
    brands: []
  })

  const brands = useGetAllBrandsByKeyword(keyword)
  console.log(brands.data)
  const products = useGetAllProductsByKeyword(keyword,data.order,data.brands)

  return (
    <div className='container mx-auto px-3 my-5'>
      <h1 className='text-3xl font-bold'>Gözleg netijesi</h1>
      {/* <div className='text-gray-500 mb-5'>Jemi: <span className='font-medium'>{products.data?.length}</span> haryt</div> */}

      <div className='flex gap-3'>
        <div className='w-3/4 grid grid-cols-4 gap-3 h-fit'>
          {
            products.data && products.data.map((product) => (
              <ProductCard key={"category-page-products-" + product.id} data={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default index