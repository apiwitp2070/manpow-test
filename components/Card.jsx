import Image from "next/image";
import { ChevronRightIcon as RightArrow } from "@heroicons/react/solid";
import furniture from '../public/img/furniture.png'

const Card = ({
  image,
  name,
  description,
  price,
  discount
}) => {
    return (
      <div className="bg-white p-2">
        <div className='relative'>
          <Image
            src={furniture}
          />
          <div className={discount > 0 ? 'absolute bottom-0 left-0 py-2 text-white text-sm bg-orange-500 ' : 'hidden'}>
            ส่วนลด {discount} บาท
          </div>
        </div>
        <div className="mt-2 font-semibold text-xl">
          {name}
        </div>
        <div className="text-sm opacity-80 line-clamp-2">
          {description}
        </div>
        <p className="mt-4 font-semibold text-xs text-orange-500">เริ่มต้นเพียง</p>
        <div className="flex justify-between items-center">
          <span className="flex space-x-2 items-baseline">
            <p className="font-semibold text-orange-500">{price-discount}</p>
            <p className="text-sm line-through opacity-60">{price}</p>
          </span>
          <RightArrow className="text-gray-600 mr-4 w-8 h-8"/>
        </div>
      </div>
  )
}

export default Card;