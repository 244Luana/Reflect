import React from 'react';
import { MenuTitle, MenuSelection } from '../Utils/MenuTitle';
import { Button } from '../Utils/Button';

function Header() {
  return (
    <div className="MenuHome">
      <header>
        <MenuSelection>
          <MenuTitle> REFLECT </MenuTitle>
          <Button href="#home"> Home </Button>
          <Button href="#about"> About Me </Button>
          <Button href="#projects"> My Projects </Button>
          <Button href="#skills"> My Skills </Button>
          <Button href="#reflections"> Reflections </Button>
        </MenuSelection>
      </header>
    </div>
  );
}

export default Header;
