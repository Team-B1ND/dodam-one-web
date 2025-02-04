import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import PageTemplate from "../Common/PageTemplate";
import HomePage from "src/pages/Home/homepage";
import AuthPage from "src/pages/Auth/authPage";
import { NightStudyPage } from "src/pages/pages";
const Routes = () => {

  return (
    <Switch>
      <Route path="/sign" element={<AuthPage />} />

      <Route path="/" element={<PageTemplate />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/nightstudy" element={<NightStudyPage/>}/>
      </Route>
      
    </Switch>
  );
};

export default Routes;