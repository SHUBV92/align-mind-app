// packages
import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
// components
import Login from "./containers/LoginPage/LoginPage";
import Entrance from "./containers/Entrance";
// redux
import { setCurrentUser } from "./redux/actions";
// styles
import { Container, Layout, Test } from "./App.styles";
import { ThemeContext } from "./global-styles/Theme";

const App = ({ setUser, currentuser }) => {
  const { theme, switchTheme } = useContext(ThemeContext);

  useEffect(() => {
    setUser({ name: "Rakhi" });
  }, []);

  const checkTheme = theme === "dark" ? "light" : "dark";

  return (
    <Container>
      <header>Align Mind</header>
      <button onClick={() => switchTheme(checkTheme)}>Switch Theme</button>
      <Layout>
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
      </Layout>
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
