import React from 'react'
import ProductCard from './ProductCard'

const FeaturedProduct = () => {
  return (
    <div className="pt-[6rem] pb-[3rem] bg-gray-900">
        <div className="w-[80%] mx-auto flex items-center justify-between">

            <h1 className="md:text-[28px] text-[22px] 1g:text-[34px] text-white">
            Productos destacados
            </h1>

            <button className="uppercase text-[13px] md:text-[15px] text-yellow-300">
            Ver todos los productos
            </button>
        </div>
                
        <div className="grid mt-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-[80%] mx-auto">
           <ProductCard image="/images/g1.jpg" category="shooting" title="call of duty" price="$49.00" />
           <ProductCard image="/images/g1.jpg" category="shooting" title="call of duty" price="$49.00" />
           <ProductCard image="/images/g1.jpg" category="shooting" title="call of duty" price="$49.00" />
           <ProductCard image="/images/g1.jpg" category="shooting" title="call of duty" price="$49.00" />
           <ProductCard image="/images/g1.jpg" category="shooting" title="call of duty" price="$49.00" />
        </div>
    </div>
            
  )
}

export default FeaturedProduct