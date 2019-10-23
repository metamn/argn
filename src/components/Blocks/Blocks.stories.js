import React from "react";
import { storiesOf } from "@storybook/react";

import Blocks from "./Blocks";
import description from "./Blocks.md";

storiesOf("Blocks", module).add("Overview", () => <Blocks />, {
  notes: { markdown: description }
});
