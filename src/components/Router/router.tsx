import { Route, Routes as Switch } from "react-router-dom";
import PageTemplate from "../Common/PageTemplate";
import HomePage from "pages/Home/homepage";
import AuthPage from "pages/Auth/authPage";
import { NightStudyPage } from "pages/pages";
import PersonalInformationPage from "pages/Term/PersonalInformationPage";
import ServicePolicyPage from "pages/Term/ServicePolicy";

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
      <Route
        path="/detailed-information/personal-information-copy"
        element={<PersonalInformationPage />}
      />
      <Route
        path="/detailed-information/service-policy-copy"
        element={<ServicePolicyPage />}
      />
    </Switch>
  );
};

export default Routes;