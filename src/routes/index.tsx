import Repos from "pages/Repos";
import * as React from "react";
import constants from "../constants";
import { Route, Routes, Navigate, BrowserRouter as Router } from "react-router-dom";
const Loading = () => <div>Loading ...</div>;

const AppRoutes = () => (
  <React.Suspense fallback={<Loading />}>
    <Router>

    <Routes>
      <Route
        path="/"
        element={<Navigate to={`${constants.routes.GITHUB_REPOS}`} replace />}
      />
      <Route path={constants.routes.GITHUB_REPOS} element={<Repos />} />
   
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </Router>
  </React.Suspense>
);

export default AppRoutes;
