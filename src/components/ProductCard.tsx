import { product1 } from '../assets/images'
import { useTranslation } from 'react-i18next'
import type { ProductCardProps } from '../types/Product'
import { BiBasket } from 'react-icons/bi'
import { BsLightningFill } from 'react-icons/bs'

function ProductCard({ data }: { data: ProductCardProps }) {
  const { t } = useTranslation()

  const discountedPrice = data.price - (data.price * data.discount / 100)

  return (
    <div className={'bg-white relative mb-5 p-5 flex flex-col shadow-lg justify-between'}>
      {data.discount > 0 && (
        <div className='flex'>
          <div className="absolute z-10 bg-red-600 text-white font-semibold mt-3 top-0 left-0 px-4">
            {t("discount")}
          </div>
            <div className='absolute z-10 border text-red-600 border-red-600 font-semibold mt-3 top-0 right-3 px-4'>
             <del>{data.price}</del>
            </div>
        </div>

      )}
      <div className='flex justify-center relative my-3'>
        <img src={product1} alt={data.name} className={`${!data.inStock ? 'opacity-50' : ''}`} />

      </div>
      <div className='py-2 text-lg font-semibold'>{data.name}</div>
      {data.inStock ? (
        <div className='text-sm'>
          <span className='bg-green-600 p-1 text-white font-bold'>
            {t("inStock")}
          </span>
        </div>
      ) : <div className='text-sm'>
        <span className='bg-red-600 p-1 text-white font-bold'>
          {t("outOfStock")}
        </span>
      </div>}
      <hr className='mt-4 opacity-20' />
      <div className='flex items-center justify-between mt-2'>
        <div className="flex items-end py-1">
          <div className='text-lg text-custom-green font-bold underline'>{discountedPrice.toFixed(2)} m</div>

        </div>
        <div className='flex items-center'>
          <button
            className="bg-orange-400 p-2 rounded-full">
            <BiBasket size={26} className='text-white font-bold' />
          </button>
          <button
            className="bg-orange-400 p-2 rounded-full ml-2">
            <BsLightningFill size={26} className='text-white font-bold' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
