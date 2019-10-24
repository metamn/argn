import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component container
 */
const Container = styled("div")(props => ({}));

/**
 * Displays the component
 */
const TransactionList = props => {
  const { transactions } = props;

  console.log("Transactions:", transactions);

  return (
    <Container className="TransactionList">
      <ul>
        {transactions &&
          transactions.map((id, index) => {
            return <li key={index}>{id}</li>;
          })}
      </ul>
    </Container>
  );
};

TransactionList.propTypes = propTypes;
TransactionList.defaultProps = defaultProps;

export default TransactionList;
export {
  propTypes as TransactionListPropTypes,
  defaultProps as TransactionListDefaultProps
};
