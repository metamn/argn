import React from "react";
import { storiesOf } from "@storybook/react";

import MetaMaskComponent from "./MetaMaskComponent";
import description from "./MetaMaskComponent.md";

storiesOf("MetaMaskComponent", module).add(
  "Overview",
  () => <MetaMaskComponent />,
  {
    notes: { markdown: description }
  }
);
