import { Routes, Route } from "react-router-dom";
import { routes } from "./RoutesConfig";
import Main from "../main";

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route: any, main: number) => (
        <Route key={main} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
