import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./RoutesConfig"; // Asegúrate de que este import esté correctamente configurado
import Main from "../main"; // Asegúrate de que este import esté correctamente configurado

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
