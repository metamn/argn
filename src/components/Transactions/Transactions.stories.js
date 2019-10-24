import React from "react";
import { storiesOf } from "@storybook/react";

import Transactions from "./Transactions";
import description from "./Transactions.md";

storiesOf("Transactions", module).add("Overview", () => <Transactions />, {
  notes: { markdown: description }
});
