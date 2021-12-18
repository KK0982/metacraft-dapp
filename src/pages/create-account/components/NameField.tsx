import React, { FC, useState } from 'react'
import { Label } from '../../../components/form/Label'
import { Input } from '../../../components/Input'
import { Tag, TagGroup } from '../../../components/form/Tag'
import { useENS } from '../../../hooks/useENS'
import { Spacing } from '../../../components/Spacing'
import { Field } from './Field'
import { useCreateAccountForm } from '../hooks/useCreateAccountForm'
import { FormError } from '../../../components/form/FormError'

interface NameFieldProps {
  error: string
  name: string
  id: string
  value: string
  onChange: (value: string) => void
}

export const NameField: FC<NameFieldProps> = React.memo(
  ({ error, id, name, value, onChange }) => {
    const ensNames = useENS()

    return (
      <Field title="What do you want people to call you?">
        <Label required>Nickname</Label>
        <Input
          className="w-[400px]"
          placeholder="Nickname"
          onUserInput={onChange}
          pattern="^[^\.]{0,10}$"
          id={id}
          name={name}
          value={value}
          error={error}
        />
        {error ? <FormError>{error}</FormError> : null}
        <Spacing y={32} />
        <Label>Server Name</Label>
        <TagGroup value={value} onChange={onChange}>
          <Tag color="blue">HELLO</Tag>
          <Tag color="blue" active>
            WORLD
          </Tag>
        </TagGroup>
        <Spacing y={32} />
        <Label>Traditional name</Label>
        <TagGroup value={value} onChange={onChange}>
          <Tag color="yellow" value="Adam">
            Adam
          </Tag>
          <Tag color="yellow" value="Bob">
            Bob
          </Tag>
          <Tag color="yellow" value="Eric">
            Eric
          </Tag>
          <Tag color="yellow" value="Kevin">
            Kevin
          </Tag>
          <Tag color="yellow" value="Oscar">
            Oscar
          </Tag>
        </TagGroup>
        <Spacing y={16} />
        <TagGroup value={value} onChange={onChange}>
          <Tag color="green" value="Daisy">
            Daisy
          </Tag>
          <Tag color="green" value="Alice">
            Alice
          </Tag>
          <Tag color="green" value="Vivian">
            Vivian
          </Tag>
          <Tag color="green" value="Grace">
            Grace
          </Tag>
          <Tag color="green" value="Hellen">
            Hellen
          </Tag>
        </TagGroup>
      </Field>
    )
  }
)
