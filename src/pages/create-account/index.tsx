import React from 'react'
import { Container } from '../../components/layout/Container'
import { Spacing } from '../../components/Spacing'
import { FoodField } from './components/FoodField'
import { NameField } from './components/NameField'
import { SkinField } from './components/SkinField'
import { useCreateAccountForm } from './hooks/useCreateAccountForm'
import Square from '/public/icons/square-three.svg'

export const CreateAccount = React.memo(() => {
  const form = useCreateAccountForm()

  return (
    <Container>
      <section>
        <p className="text-20 leading-28 mt-18 mb-20 text-center">
          This address is the first time to log in to metacraft.
        </p>
        <div className="shadow w-full bg-fff">
          <div className="w-full bg-1b2533 py-24 px-40 flex justify-between items-center text-fff text-24 leading-32">
            Become a member of Metacraft
            <Square />
          </div>
          <div className="px-32 py-24">
            <NameField
              id="name"
              name="name"
              value={form.values.name}
              onChange={(name: string) => form.setFieldValue('name', name)}
            />
            <Spacing y={32} />
            <FoodField
              id="food"
              name="food"
              value={form.values.food}
              onChange={(name: string) => form.setFieldValue('food', name)}
            />
            <Spacing y={32} />
            <SkinField />
          </div>
        </div>
      </section>
    </Container>
  )
})
