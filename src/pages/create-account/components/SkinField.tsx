import React, { useState } from 'react'
import { Label } from '../../../components/form/Label'
import { Input } from '../../../components/Input'
import { Tag, TagGroup } from '../../../components/form/Tag'
import { useENS } from '../../../hooks/useENS'
import { Spacing } from '../../../components/Spacing'
import { Field } from './Field'
import { SkinPerview } from '../../../components/SkinPerview'

const ItemTitle = React.memo(({ children }) => {
  return (
    <p className='text-16 leading-24 text-1b2533 mb-12 text-center'>{children}</p>
  );
});

export const SkinField = React.memo(() => {
  const [error, setError] = useState<string>('')
  const [name, setName] = useState<string>('')
  // const ensNames = useENS();

  return (
    <Field title='What do you want to look like?'>
      <div className='flex gap-x-16'>
        <div>
          <ItemTitle>Preview skin</ItemTitle>
          <SkinPerview

          />
        </div>
        <div className='flex-1'>
          <ItemTitle>Your wardrobe</ItemTitle>
        </div>
      </div>
    </Field>
  )
})
