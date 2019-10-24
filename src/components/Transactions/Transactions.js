import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Text, Button, GU, Modal } from "@aragon/ui";

import TransactionList from "../TransactionList";

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
 * - The modal is taken out of context, ie injected somewhere else in the DOM
 * - So it has to be styled individually, outside of its container
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

  /**
   * Defines the content of the Modal
   *
   * - It is the list of transactions
   * - Sometimes this list can contain hundreds of transactions
   * - Therefore they are loaded only when the user clicks the `Browse` button
   */
  const [modalContent, setModalContent] = useState("");

  /**
   * Handles the click on Modal
   */
  const handleModalClick = () => {
    setOpened(true);
    setModalContent(<TransactionList transactions={transactions} />);
  };

  return (
    <Container className="Transactions">
      <Text>Transactions: {count}</Text>

      <Button className="Button" onClick={() => handleModalClick()}>
        Browse
      </Button>

      <Modal
        className="Modal"
        style={modalStyle}
        visible={opened}
        onClose={() => setOpened(false)}
      >
        {modalContent}
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
