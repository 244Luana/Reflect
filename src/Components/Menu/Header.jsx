import React from "react";
import { Title, MenuSelection } from '../Utils/MenuTitle';
import { Button } from '../Utils/Button';

function Header() {
  
  return (
    <div className="Home">
      <header>
        <Title> 
            THIS IS REFLECT
        </Title>
        <MenuSelection>
          <Button> HOME </Button>
          <Button> ABOUT ME </Button>
          <Button> NEWS </Button>
          <Button> MY PROJECTS </Button>
          <Button> REFLECTIONS </Button>
        </MenuSelection>
        <p> 
            When Will My Reflection Show Who I Am Inside?
        </p> 
      </header>
    </div>
  );
}

export default Header;
