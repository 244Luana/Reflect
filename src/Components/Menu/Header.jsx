import React from 'react';
import { MenuTitle, MenuSelection } from '../Utils/MenuTitle';
import { Button } from '../Utils/Button';
import { Outlet, Link } from "react-router-dom";
//import Home from '../Home/Index';

const Header = () => {
  return (
    <div className="MenuHome">
      <nav>
        <MenuSelection>
          <MenuTitle> REFLECT </MenuTitle>
          {/* <Button href="#home"> Home </Button>
          <Button href="#about"> About Me </Button>
          <Button href="#projects"> My Projects </Button>
          <Button href="#skills"> My Skills </Button>
          <Button href="#reflections"> Reflections </Button> */}
          <Button>
            <Link to="/"> Home </Link>
          </Button>
          <Button>
            <Link to="/aboutMe"> About Me </Link>
          </Button>
          <Button>
            <Link to="/myProjects"> My Projects </Link>
          </Button>
          <Button>
            <Link to="/mySkills"> My Skills </Link>
          </Button>
          <Button>
            <Link to="/reflections"> Reflections </Link>
          </Button>
        </MenuSelection>
      </nav>

      <Outlet />
    </div>
  );
}

export default Header;
