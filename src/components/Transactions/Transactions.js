import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Text, Button, GU, Modal } from "@aragon/ui";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component
 */
const Container = styled("div")(props => ({
  display: "flex",
  flexDirection: "column",

  "& .Button": {
    marginTop: `${GU * 3}px`
  }
}));

/**
 * Styles the modal
 *
 * - The modal is take out of context, ie injected somewhere else in the DOM
 * - So it has to be styled outside its container
 */
const modalStyle = { zIndex: "10" };

/**
 * Displays the component
 */
const Transactions = props => {
  const { transactions } = props;
  const count = transactions.length;

  /**
   * Defines state for the Modal box
   */
  const [opened, setOpened] = useState(false);

  return (
    <Container className="Transactions">
      <Text>Transactions: {count}</Text>

      <Button class="Button" onClick={() => setOpened(true)}>
        Browse
      </Button>

      <Modal
        class="Modal"
        style={modalStyle}
        visible={opened}
        onClose={() => setOpened(false)}
      >
        {/* content goes here */}
        <Button onClick={() => setOpened(false)}>Close</Button>
      </Modal>
    </Container>
  );
};

Transactions.propTypes = propTypes;
Transactions.defaultProps = defaultProps;

export default Transactions;
export {
  propTypes as TransactionsPropTypes,
  defaultProps as TransactionsDefaultProps
};
