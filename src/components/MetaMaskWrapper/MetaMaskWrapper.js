import React, { useEffect } from "react";
import { useWeb3Context, Connectors } from "web3-react";
import Blocks from "../Blocks";

/**
 * Makes MetaMask / the blockchain available for the app
 *
 * @see https://github.com/NoahZinsmeister/web3-react/issues/19
 */
const MetaMaskWrapper = props => {
  const context = useWeb3Context();
  const { InjectedConnector } = Connectors;

  useEffect(() => {
    if (!context.active) {
      if (!context.connector) context.setConnector("MetaMask");
      else if (
        context.error.code === InjectedConnector.errorCodes.UNLOCK_REQUIRED
      )
        context.unsetConnector("MetaMask");
    }
  });

  if (!context.active && !context.error) {
    return <div>Loading...</div>;
  }

  if (context.error) {
    console.error("MetaMaskWrapper error:", context.error);
    if (context.error.code === InjectedConnector.errorCodes.UNLOCK_REQUIRED) {
      return "MetaMask account unavailable";
    } else {
      return "Web3 is unavailable";
    }
  }

  return <Blocks />;
};

export default MetaMaskWrapper;
