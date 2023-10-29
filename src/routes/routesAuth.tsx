import { Navigate, Route, Routes as Switch } from "react-router-dom";

import { Cadastro, Login, RecuperarSenha } from "../pages";
import Configurações from "../pages/configurações/Configurações";

export const RoutesAuth = () => {
  return (
    <Switch>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/recuperar-senha" element={<RecuperarSenha />} />
      <Route path="/configuracoes" element={<Configurações />} />

      <Route path="*" element={<Navigate to="/cadastro" />} />
    </Switch>
  );
};
