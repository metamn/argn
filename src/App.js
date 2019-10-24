import React from "react";
import MetaMaskWrapper from "./components/MetaMaskWrapper";

/**
 * Connects to the Ethereum blockchain via web3
 *
 * @see https://noahzinsmeister.gitbook.io/web3-react/
 * @see https://github.com/NoahZinsmeister/web3-react/issues/19
 *
 * There is a bug when the first link is followed
 * The second link is fixing the bug
 */
import { Connectors } from "web3-react";

/**
 * Provides a web3 context for the app
 */
import Web3Provider from "web3-react";

/**
 * Connects to the Ethereum blockchain via injected web3 providers ....
 */
const { InjectedConnector } = Connectors;

/**
 * ... such as MetaMask
 */
const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] });

/**
 * Defines the connectors
 */
const connectors = { MetaMask };

const App = () => {
  return (
    <Web3Provider connectors={connectors} libraryName="ethers.js">
      <MetaMaskWrapper />
    </Web3Provider>
  );
};

export default App;
