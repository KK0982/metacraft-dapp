import React, { useState } from 'react'
import { Label } from '../../../components/form/Label'
import { Input } from '../../../components/Input'
import { Tag, TagGroup } from '../../../components/form/Tag'
import { useENS } from '../../../hooks/useENS'
import { Spacing } from '../../../components/Spacing'
import { Field } from './Field'
import { Food } from './Food'

export const FoodField = React.memo(() => {
  const [error, setError] = useState<string>('')
  const [name, setName] = useState<string>('')
  // const ensNames = useENS();

  return (
    <Field title='What is your favorite food?'>
      <Label>Food</Label>
      <Input
        className="w-[400px]"
        placeholder="Your favorite food"
        value={name}
        onUserInput={setName}
        pattern='^.{0,30}$'
      />
      <Spacing y={32}/>
      <div className='grid gap-16 grid-cols-6'>
        <Food type='apple' />
        <Food type='patato' />
        <Food type='bread' />
        <Food type='cake' />
        <Food type='carrot' />
        <Food type='fish' />
        <Food type='cookie' />
        <Food type='melon' />
        <Food type='pie' />
        <Food type='beef' />
        <Food type='chicken' />
        <Food type='porkchop' />
      </div>
    </Field>
  )
})
