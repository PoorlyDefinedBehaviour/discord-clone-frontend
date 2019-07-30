import React from "react";

import { Message } from "./Styles";

export const ErrorMessage = ({ message }: any): JSX.Element => (
  <Message>{message}</Message>
);
