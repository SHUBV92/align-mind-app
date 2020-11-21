import React, { useEffect } from "react";
import { connect } from "react-redux";

const App = ({ setUser, currentuser }) => {
  useEffect(() => {
    setUser({ name: "Rakhi Betch" });
  }, []);

  return (
    <div>
      <h1>Align Mind</h1>
      <p>User: {currentuser.name}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({ currentuser: state.currentUser });

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => {
    dispatch({ type: "SET_USER", payload: user });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
