import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import HomePage from "@src/pages/Home/homepage";
import AuthPage from "@src/pages/Auth/authPage";
const Routes = () => {

  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign" element={<AuthPage />} />
    </Switch>
  );
};

export default Routes;