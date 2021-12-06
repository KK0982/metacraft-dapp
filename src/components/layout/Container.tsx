import React from 'react';

export const Container = React.memo(({ children }) => {
  return (
    <div className='container'>{children}</div>
  );
})