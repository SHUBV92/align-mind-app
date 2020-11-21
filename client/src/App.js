import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions";

const App = ({ setUser, currentuser }) => {
  useEffect(() => {
    setUser({ name: "Rakhi Bitchingssss" });
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
    dispatch(setCurrentUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
