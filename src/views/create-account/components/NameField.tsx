import React, { useState } from 'react'
import { Label } from '../../../components/form/Label'
import { Input } from '../../../components/Input'
import { Tag, TagGroup } from '../../../components/form/Tag'
import { useENS } from '../../../hooks/useENS'
import { Spacing } from '../../../components/Spacing'
import { Field } from './Field'

export const NameField = React.memo(() => {
  const [error, setError] = useState<string>('')
  const [name, setName] = useState<string>('')
  // const ensNames = useENS();

  return (
    <Field title='What do you want people to call you?'>
      <Label required>Nickname</Label>
      <Input
        className="w-[400px]"
        placeholder="Nickname"
        value={name}
        onUserInput={setName}
        pattern='^[^\.]{0,10}$'
      />
      <Spacing y={32}/>
      <Label>Server Name</Label>
      <TagGroup>
        <Tag color='blue'>HELLO</Tag>
        <Tag color='blue' active>WORLD</Tag>
      </TagGroup>
      <Spacing y={32}/>
      <Label>Traditional name</Label>
      <TagGroup>
        <Tag color='yellow'>Adam</Tag>
        <Tag color='yellow' active>Bob</Tag>
        <Tag color='yellow' >Eric</Tag>
        <Tag color='yellow' >Kevin</Tag>
        <Tag color='yellow' >Oscar</Tag>
      </TagGroup>
      <Spacing y={16}/>
      <TagGroup>
        <Tag color='blue'>Adam</Tag>
        <Tag color='blue'>Bob</Tag>
        <Tag color='blue'>Eric</Tag>
        <Tag color='blue'>Kevin</Tag>
        <Tag color='blue'>Oscar</Tag>
      </TagGroup>
    </Field>
  )
})
