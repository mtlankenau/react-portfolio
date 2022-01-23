import React from 'react';

const Header = () => {
  return (
    <header className='flex-row px-1'>
      <h1>
        <a data-testid="link" href="https://github.com/mtlankenau" target="_blank">
          Michael Lankenau
        </a>
      </h1>
    </header>
  );
}

export default Header;