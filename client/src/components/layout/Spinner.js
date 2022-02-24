import React, { Fragment } from "react";
import Book from "./Book.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={Book}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="loading"
      />
    </Fragment>
  );
};

export default Spinner;
