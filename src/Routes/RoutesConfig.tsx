// RoutesConfig.tsx
import React from "react";
import Acerca from "../views/about/acerca"; // Asegúrate de que estos imports estén configurados correctamente
import Contacto from "../views/contact/contacto";
import Inicio from "../views/pages/inicio";

export const routes = [
  {
    path: "/about",
    element: <Acerca /> // Componente para la ruta "/about"
  },
  {
    path: "/contact",
    element: <Contacto /> // Componente para la ruta "/contact"
  },
  {
    path: "/pages",
    element: <Inicio /> // Componente para la ruta "/pages"
  }
];
