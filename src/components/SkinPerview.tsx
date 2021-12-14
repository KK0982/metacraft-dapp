import React, { FC } from 'react';

interface SkinPerviewProps {
  name?: string;
  skinImages?: string;
  width?: number;
  height?: number;
}

export const SkinPerview: FC<SkinPerviewProps> = ({ name }) => {
  return (
    <div className='flex flex-col rounded-15 bg-f7f8fc min-w-[288px] min-h-[322px] overflow-hidden'>
      <div className='flex-1'>

      </div>
      <div className='bg-1b2533 text-16 leading-24 text-fff h-48 w-full'>
        <p>{name}</p>
      </div>
    </div>
  );
}