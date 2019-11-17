import React from "react";

import { Message } from "./Styles";

export default function ErrorMessage({ message, ...props }): JSX.Element {
  return <Message {...props}>{message}</Message>;
}
