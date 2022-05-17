import Image from 'next/image'
import { ChevronRightIcon as RightArrow } from '@heroicons/react/solid'
import furniture from '../public/img/furniture.png'

const Card = ({ name, description, price, discount }) => {
  return (
    <div className="bg-white p-2 hover:-translate-y-4 transition duration-300">
      <div className="relative">
        <Image src={furniture} />
        {discount > 0 && (
          <div className="h-7 flex absolute bottom-1.5 left-0">
            <div className="px-1 pt-1 text-white text-xs bg-orange-500">
              ส่วนลด {discount} บาท
            </div>
            <div className="triangle"></div>
          </div>
        )}
      </div>
      <div className="mt-2 font-semibold text-xl">{name}</div>
      <div className="text-sm opacity-80 line-clamp-2">{description}</div>
      <p className="mt-4 font-semibold text-xs text-orange-500">
        เริ่มต้นเพียง
      </p>
      <div className="flex justify-between items-center">
        <span className="flex space-x-2 items-baseline">
          <p className="font-semibold text-orange-500">{price - discount}</p>
          {discount > 0 && (
            <p className="text-sm line-through opacity-60">{price}</p>
          )}
        </span>
        <RightArrow className="text-gray-600 mr-4 w-8 h-8" />
      </div>
    </div>
  )
}

export default Card
