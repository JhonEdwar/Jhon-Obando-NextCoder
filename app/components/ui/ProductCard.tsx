import React from 'react'
import { HeartIcon,ShoppingBagIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';

interface Props {
image:string;
category:string;
title:string;
price:string;
}

const ProductCard = ({image,category,title,price}:Props) => {
  return (
    <div className="w-[100%] h-[200px]">
  <Image
    src={`${image}`}
    alt={`${title}`}
    width={350}
    height={200}
    className="w-[100%] h-[90%] object-cover md:w-[90%] md:h-[90%]"
  />
  <div className="mt-[1rem] w-[100%] md:w-[90%]">
    <div className="flex items-center justify-between">
      <p className="text-[14px] text-white opacity-70">{category}</p>
      <HeartIcon className="w-[1rem] h-[1rem] text-gray-500" />
    </div>
    <div className="mt-[0.3rem] flex items-center justify-between">
  <div className="flex items-center space-x-2">
    <p className="text-[16px] text-white opacity-75">
      ${price}
    </p>
  </div>
  <ShoppingBagIcon className="w-[1.2rem] h-[1.2rem] text-orange-400" />
</div>
  </div>
</div>
  )
}

export default ProductCard