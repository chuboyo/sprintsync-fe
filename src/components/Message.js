import React from "react";
import { Alert } from "react-bootstrap";

function Message({ variant, children }) {
  return (
    <Alert
      variant={variant}
      style={{
        backgroundColor: "#F7F5FF",
        color: "#6941C6",
      }}
      dismissible
    >
      {children}
    </Alert>
  );
}

export default Message;
