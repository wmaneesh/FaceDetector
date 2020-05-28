import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          style={{ color: "white" }}
          onClick={() => onRouteChange("signout")}
          className="b f3 link dim black pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          style={{ color: "white" }}
          onClick={() => onRouteChange("sign")}
          className="b f3 link dim black pa3 pointer"
        >
          Sign In
        </p>
        <p
          style={{ color: "white" }}
          onClick={() => onRouteChange("register")}
          className="b f3 link dim black pa3 pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
