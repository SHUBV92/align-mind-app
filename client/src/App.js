// packages
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
// components
import Login from "./containers/LoginPage/LoginPage";
import Entrance from "./containers/Entrance";
// redux
import { setCurrentUser } from "./redux/actions";
// styles
import { Container } from "./App.styles";

const App = ({ setUser, currentuser }) => {
  useEffect(() => {
    setUser({ name: "Rakhi" });
  }, []);

  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Entrance />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <div>Signup</div>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

const mapStateToProps = (state) => ({ currentuser: state.currentUser });

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => {
    dispatch(setCurrentUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
