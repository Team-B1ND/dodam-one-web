import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import PageTemplate from "../Common/PageTemplate";
import HomePage from "src/pages/Home/homepage";
import AuthPage from "src/pages/Auth/authPage";
import { NightStudyPage } from "src/pages/pages";
import PersonalInformationPage from "src/pages/Term/PersonalInformationPage";
import ServicePolicyPage from "src/pages/Term/ServicePolicy";

const Routes = () => {

  return (
    <Switch>
      <Route path="/sign" element={<AuthPage />} />

      <Route path="/" element={<PageTemplate />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/nightstudy" element={<NightStudyPage/>}/>
      </Route>
      <Route
        path="/detailed-information/personal-information"
        element={<PersonalInformationPage />}
      />
      <Route
        path="/detailed-information/service-policy"
        element={<ServicePolicyPage />}
      />
    </Switch>
  );
};

export default Routes;