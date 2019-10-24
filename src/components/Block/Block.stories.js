import React from "react";
import { storiesOf } from "@storybook/react";

import Block from "./Block";
import description from "./Block.md";

storiesOf("Block", module).add("Overview", () => <Block />, {
  notes: { markdown: description }
});
