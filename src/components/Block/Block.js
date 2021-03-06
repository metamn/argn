import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Card, Text } from "@aragon/ui";

import Transactions from "../Transactions";

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
const Block = props => {
  const { number, transactions } = props;

  //console.log("Block:", props);

  return (
    <Card className="Block">
      <Text size="large">Block #{number}</Text>
      <Transactions transactions={transactions} />
    </Card>
  );
};

Block.propTypes = propTypes;
Block.defaultProps = defaultProps;

export default Block;
export { propTypes as BlockPropTypes, defaultProps as BlockDefaultProps };
