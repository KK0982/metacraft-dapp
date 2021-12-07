import React from 'react';
import { NameInputField } from './components/NameInputField';
import { Title } from './components/Title';
import Square from '/public/icons/square-three.svg';

export const CreateAccount = React.memo(() => {
  return (
    <div>
      <p className='text-20 leading-28 mt-18 mb-20 text-center'>This address is the first time to log in to metacraft.</p>
      <section className='shadow w-full bg-fff'>
        <div className='w-full bg-1b2533 py-24 px-40 flex justify-between items-center text-fff text-24 leading-32'>
          Become a member of Metacraft
          <Square />
        </div>
        <div className='px-32 py-24'>
          <Title className='mb-24'>What do you want people to call you?</Title>
          <NameInputField />
        </div>

      </section>
    </div>
  );
})