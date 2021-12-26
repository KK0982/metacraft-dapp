import React, { FC, useCallback } from 'react'
import Image from 'next/image'
import SelectedIcon from '/public/views/auth/food-selected.svg'

function foodPath(food: string) {
  return '/foods/png_' + food + '.png'
}

const FOODS_PIC_MAP: Record<string, string> = {
  apple: foodPath('apple'),
  patato: foodPath('patato'),
  bread: foodPath('bread'),
  cake: foodPath('cake'),
  carrot: foodPath('carrot'),
  fish: foodPath('fish'),
  cookie: foodPath('cookie'),
  melon: foodPath('melon'),
  pie: foodPath('pie'),
  beef: foodPath('beef'),
  chicken: foodPath('chicken'),
  porkchop: foodPath('porkchop'),
}

interface FoodProps {
  value?: string
  selected?: boolean
  onChange?: (value: string) => void
}

export const Food: FC<FoodProps> = React.memo(
  ({ selected, value, onChange }) => {
    const handleClick = useCallback(() => {
      onChange && onChange(value)
    }, [value, onChange])

    return (
      <div
        className="relative bg-f7f8fc w-[136px] h-[140px] rounded-15 flex flex-col items-center pt-16 cursor-pointer"
        onClick={handleClick}
      >
        {selected ? (
          <div className="absolute top-0 right-0">
            <SelectedIcon />
          </div>
        ) : null}
        <Image
          src={FOODS_PIC_MAP[value.toLowerCase()]}
          width={72}
          height={72}
        />
        <p className="mt-14 text-16 leading-24 text-1a1b20">{value}</p>
      </div>
    )
  }
)
