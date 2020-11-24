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
import { Container } from "./App.styles";
// import Theme from "./Theme";
import { ThemeContext } from "./redux/store";

const App = ({ setUser, currentuser }) => {
  const { theme, switchTheme } = useContext(ThemeContext);
  console.log("APPtheme:", theme);
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
      {theme === "dark" ? (
        <button size={32} onClick={() => switchTheme("light")}>
          Switch Theme
        </button>
      ) : (
        <button size={32} onClick={() => switchTheme("dark")}>
          Switch Theme
        </button>
      )}
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
