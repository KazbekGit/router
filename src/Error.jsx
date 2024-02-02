import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px"
      }}
    >
      <div
        style={{
          width: "300px",
          minHeight: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "14px",
          color: "white",
          backgroundColor: "rgb(0,0,0,0.7)",
        }}
      >
        <p>{error.data}</p>
        <hr />
        <p>{error.status}</p>
        <hr />
        <p>{error.statusText}</p>
      </div>
      <Link to="/" style={{marginTop: "30px"}}>Go Home</Link>
    </div>
  );
};

export default Error;
