import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Inicio from './views/contact/contacto'; // Importa el componente Inicio

const App = () => {
  const toPage = () => {
    // Lógica para navegar a la página de contacto
    // Puedes agregar aquí cualquier otra lógica que necesites
  };

  return (
    <BrowserRouter>
      <header>

        <Link to='/contact' onClick={toPage}>Contacto</Link>
      </header>
     
        <Route path="/inicio" Component={Inicio} />
      
    </BrowserRouter>
  );
};

export default App;
