import React from "react";
import { useWeb3Context } from 'web3-react'
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};


/**
 * Displays the component
 */
const Blocks = props => {
  const context = useWeb3Context()

  console.log('Context', context);
  

  return <div>
    <p>Blocks!</p>
    <p>Check the logs ...</p>
  </div>
  
};

Blocks.propTypes = propTypes;
Blocks.defaultProps = defaultProps;

export default Blocks;
export { propTypes as BlocksPropTypes, defaultProps as BlocksDefaultProps };
