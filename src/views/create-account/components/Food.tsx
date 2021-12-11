import React, { FC } from 'react';
import Image from 'next/image';
import { upperFirst } from 'lodash';

type FoodsType = 'apple' | 'patato' | 'bread' | 'cake' | 'carrot' | 'fish' | 'cookie' | 'melon' | 'pie' | 'beef' | 'chicken' | 'porkchop'

function foodPath (food: string) {
  return '/foods/png_' + food + '.png';
}

const FOODS_PIC_MAP: Record<FoodsType, string> = {
  'apple': foodPath('apple'),
  'patato': foodPath('patato'),
  'bread': foodPath('bread'),
  'cake': foodPath('cake'),
  'carrot': foodPath('carrot'),
  'fish': foodPath('fish'),
  'cookie': foodPath('cookie'),
  'melon': foodPath('melon'),
  'pie': foodPath('pie'),
  'beef': foodPath('beef'),
  'chicken': foodPath('chicken'),
  'porkchop': foodPath('porkchop'),
}

interface FoodProps {
  type: FoodsType;
}


export const Food: FC<FoodProps> = React.memo(({ type }) => {
  return (
    <div className='bg-f7f8fc w-[136px] h-[140px] rounded-15 flex flex-col items-center pt-16'>
      <Image src={FOODS_PIC_MAP[type]} width={72} height={72} />
      <p className='mt-14 text-16 leading-24 text-1a1b20'>{upperFirst(type)}</p>
    </div>
  );
})