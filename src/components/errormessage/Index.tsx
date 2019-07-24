import React from "react";

import { Message } from "./Styles";

export function ErrorMessage({ message }: any): any {
  return <Message>{message}</Message>;
}
