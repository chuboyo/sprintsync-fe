import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <Spinner
      animation="grow"
      size="sm"
      role="status"
      className="mt-2"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loading;