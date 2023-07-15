import React from "react";
import { Outlet, Link } from "react-router-dom";
import Home from '../Components/Home/Index';
import Header from "../Components/Menu/Header";

const Index = () => {
  return (
    <>
      {/* <nav>
        <div className="Menu">
            <Home />
            <Link to="/">Home</Link>
            <Link to="/aboutMe">About Me</Link>
            <Link to="/myProjects">My Projects</Link>
            <Link to="/mySkills">My Skills</Link>
            <Link to="/reflections">Reflections</Link>
        </div>
      </nav>

      <Outlet /> */}
      <Header />
      <Home />
    </>
  );
}

export default Index;
