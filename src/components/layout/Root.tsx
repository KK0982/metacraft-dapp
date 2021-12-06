import React from 'react';

export const Root = React.memo(({ children }) => {
  return (
    <div className='w-screen h-screen flex flex-col bg-f7f8fc'>
      {children}
    </div>
  );
});