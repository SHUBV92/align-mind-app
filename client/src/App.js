import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import { setCurrentUser } from "./redux/actions";
import Login from "./container/LoginPage/LoginPage";

const App = ({ setUser, currentuser }) => {
  useEffect(() => {
    setUser({ name: "Rakhi" });
  }, []);

  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Switch>
        <Route path="/" exact>
          <div>
            <h1>Align Mind</h1>
            <p>User: {currentuser.name}</p>
            <Login />
          </div>
        </Route>
        <Route path="/login" exact>
          <div>Login</div>
        </Route>
        <Route path="/signup" exact>
          <div>Signup</div>
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({ currentuser: state.currentUser });

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => {
    dispatch(setCurrentUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
