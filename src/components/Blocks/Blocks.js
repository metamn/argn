import React, { useState, useEffect } from "react";
import { useWeb3Context } from "web3-react";
import { utils } from "ethers";
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
 * Displays the blocks
 *
 * @see https://ethereum.stackexchange.com/questions/1587/how-can-i-get-the-data-of-the-latest-10-blocks-via-web3-js
 *
 * @see https://github.com/NoahZinsmeister/web3-react/issues/12
 * @see https://github.com/jinserk/web3-react-dapp/pull/1/commits/3573b64d9d2028d6921c02b748c5749222cd2d99
 */
const Blocks = props => {
  const { active, library } = useWeb3Context();

  /**
   * Loads the latest block number
   */
  const [latestBlockNumber, setLatestBlockNumber] = useState(0);

  useEffect(() => {
    if (active) {
      library
        .getBlockNumber()
        .then(value => {
          setLatestBlockNumber(value);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [active]);

  /**
   * Loads the latest 10 blocks
   */

  return <div className="Blocks">Latest: {latestBlockNumber}</div>;
};

Blocks.propTypes = propTypes;
Blocks.defaultProps = defaultProps;

export default Blocks;
export { propTypes as BlocksPropTypes, defaultProps as BlocksDefaultProps };
