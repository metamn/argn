import React from "react";
import { storiesOf } from "@storybook/react";

import TransactionList from "./TransactionList";
import description from "./TransactionList.md";

storiesOf("TransactionList", module).add(
  "Overview",
  () => <TransactionList />,
  {
    notes: { markdown: description }
  }
);
