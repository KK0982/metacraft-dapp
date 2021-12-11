import React from 'react'
import { Spacing } from '../../components/Spacing'
import { FoodField } from './components/FoodField'
import { NameField } from './components/NameField'
import { Title } from './components/Title'
import Square from '/public/icons/square-three.svg'

export const CreateAccount = React.memo(() => {
  return (
    <div>
      <p className="text-20 leading-28 mt-18 mb-20 text-center">
        This address is the first time to log in to metacraft.
      </p>
      <section className="shadow w-full bg-fff px-32">
        <div className="w-full bg-1b2533 py-24 px-40 flex justify-between items-center text-fff text-24 leading-32">
          Become a member of Metacraft
          <Square />
        </div>
        <NameField />
        <Spacing y={32}/>
        <FoodField />
      </section>
    </div>
  )
})
