import React, { useState } from 'react'
import { Input } from '../../../components/Input'

export const NameInputField = React.memo(() => {
  const [error, setError] = useState<string>('')
  const [name, setName] = useState<string>('')

  return (
    <div>
      <p className="text-14 leading-20 text-1a1b20 mb-12">Nickname</p>
      <Input
        className="w-[400px] mb-32"
        placeholder="Nickname"
        value={name}
        onUserInput={setName}
        pattern='^[^\.]{0,10}$'
      />
      <p className="text-14 leading-20 text-1a1b20 mb-12">ENS</p>
    </div>
  )
})
