import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from './hooks';

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        exact
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
        exact
      >
        <Signup />
      </IsUserRedirect>
      <IsUserRedirect
        exact
        loggedInPath={ROUTES.BROWSE}
        user={user}
      >
        <Home />
      </IsUserRedirect>
      <ProtectedRoute exact path={ROUTES.BROWSE} user={user}>
        <Browse />
      </ProtectedRoute>
    </Router>
  );
}

export default App;
