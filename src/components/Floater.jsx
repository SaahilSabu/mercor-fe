import React from 'react';

const Floater = () => {
  return (
    <>
      <div className='absolute top-1/10 left-1/6 sm:top-1/5 sm:left-1/5 md:left-1/4 md:top-1/4 lg:top-1/3 lg:left-1/3'>
        <img src='/assets/intro-cube 1.png' className='' alt='Cube 1' />
      </div>
      <div className='absolute bottom-1/10 left-1/4 sm:bottom-1/5 sm:left-1/3 md:left-1/4 lg:left-1/3'>
        <img src='/assets/intro-cubes 1.png' className='' alt='Cubes 1' />
      </div>
      <div className='absolute bottom-0 right-1/6 sm:bottom-1/10 sm:right-1/5 md:right-1/4 lg:right-1/3'>
        <img src='/assets/intro-pillar 1.png' className='' alt='Pillar 1' />
      </div>
      <div className='absolute top-1/8 right-1/4 sm:top-1/6 sm:right-1/3 md:right-1/4 lg:right-1/3'>
        <img src='/assets/intro-stairs 1.png' className='' alt='Stairs 1' />
      </div>
    </>
  );
}

export default Floater;
