import React, { FC, useState } from 'react'
import { Label } from '../../../components/form/Label'
import { Input } from '../../../components/Input'
import { TagGroup } from '../../../components/form/Tag'
import { Spacing } from '../../../components/Spacing'
import { Field } from './Field'
import { Food } from './Food'

interface FoodFieldProps {
  id: string
  name: string
  value: string
  onChange: (value: string) => void
}

export const FoodField: FC<FoodFieldProps> = React.memo(
  ({ id, name, value, onChange, ...rest }) => {
    return (
      <Field title="What is your favorite food?" name={name}>
        <Label>Food</Label>
        <Input
          className="w-[400px]"
          placeholder="Your favorite food"
          value={value}
          onUserInput={onChange}
          pattern="^.{0,30}$"
          id={id}
          name={name}
          {...rest}
        />
        <Spacing y={32} />
        <TagGroup
          forceClassName="grid gap-16 grid-cols-6"
          value={value}
          onChange={onChange}
        >
          <Food value="Apple" />
          <Food value="Potato" />
          <Food value="Bread" />
          <Food value="Cake" />
          <Food value="Carrot" />
          <Food value="Fish" />
          <Food value="Cookie" />
          <Food value="Melon" />
          <Food value="Pie" />
          <Food value="Beef" />
          <Food value="Chicken" />
          <Food value="Porkchop" />
        </TagGroup>
      </Field>
    )
  }
)
