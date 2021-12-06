import React from 'react';

export const Home = React.memo(() => {
  return (
    <div>
      <p className='text-20 leading-28 mt-18 mb-20 text-center'>This address is the first time to log in to metacraft.</p>
      <section className='shadow w-full bg-fff'>
        <div className='w-full bg-1b2533 py-24 px-40 flex justify-between text-fff text-24 leading-32'>Become a member of Metacraft</div>
      </section>
    </div>
  );
})