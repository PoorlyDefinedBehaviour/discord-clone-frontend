import React, { PropsWithChildren } from "react";

import { P } from "./Styles";

export const Label = ({
  children,
  ...props
}: PropsWithChildren<any>): JSX.Element => <P {...props}>{children}</P>;
