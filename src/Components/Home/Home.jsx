import React from "react";
import Header from '../Menu/Header';
import { PageTitle } from '../Utils/MenuTitle';

function Home() {
  return (
    <div className="Home">
        <Header />
        <body>
            <PageTitle> 
                THIS IS REFLECT
            </PageTitle>
            <p> 
                When Will My Reflection Show Who I Am Inside?
            </p> 
        </body>
    </div>
  );
}

export default Home;
