import React from "react";
import { storiesOf } from "@storybook/react";

import MetaMaskWrapper from "./MetaMaskWrapper";
import description from "./MetaMaskWrapper.md";

storiesOf("MetaMaskWrapper", module).add(
  "Overview",
  () => <MetaMaskWrapper />,
  {
    notes: { markdown: description }
  }
);
