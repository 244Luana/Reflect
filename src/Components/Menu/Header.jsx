import React from "react";
import { MenuTitle, MenuSelection, PageTitle } from '../Utils/MenuTitle';
import { Button } from '../Utils/Button';

function Header() {
  
  return (
    <div className="Home">
      <header>
        <MenuSelection>
          <MenuTitle> REFLECT </MenuTitle>
          <Button> HOME </Button>
          <Button> ABOUT ME </Button>
          <Button> MY PROJECTS </Button>
          <Button> MY SKILLS </Button>
          <Button> REFLECTIONS </Button>
        </MenuSelection>
        <PageTitle> 
            THIS IS REFLECT
        </PageTitle>
        <p> 
            When Will My Reflection Show Who I Am Inside?
        </p> 
      </header>
    </div>
  );
}

export default Header;
