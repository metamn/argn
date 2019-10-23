import React, { useState } from "react";
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
 * @see https://github.com/jinserk/web3-react-dapp/blob/master/src/NetworkInfo.js
 */
const Blocks = props => {
  const context = useWeb3Context();
  const provider = context.library;

  const [blockNumber, setBlockNumber] = useState(0);
  const [gasPrice, setGasPrice] = useState("0");

  async function fetch() {
    setBlockNumber(await provider.getBlockNumber());
    setGasPrice(utils.formatUnits(await provider.getGasPrice(), 9));
  }
  fetch();

  return (
    <div className="App-table">
      <table width="500">
        <caption>Network Info</caption>
        <thead>
          <tr>
            <th>Item</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Network ID</td>
            <td>{context.networkId}</td>
          </tr>
          <tr>
            <td>Block Number</td>
            <td>{blockNumber}</td>
          </tr>
          <tr>
            <td>Gas Price</td>
            <td>{gasPrice} gwei</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Blocks.propTypes = propTypes;
Blocks.defaultProps = defaultProps;

export default Blocks;
export { propTypes as BlocksPropTypes, defaultProps as BlocksDefaultProps };
