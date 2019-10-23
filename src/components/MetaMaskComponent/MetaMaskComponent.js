import React, {useEffect} from "react";
import { useWeb3Context, Connectors } from 'web3-react'
import Blocks from '../Blocks'



/**
 * Displays the component
 */
const MetaMaskComponent = props => {
  const context = useWeb3Context();
  const { InjectedConnector } = Connectors

  //console.log(context);

  useEffect(() => {
    if (!context.active) {
      if (!context.connector)
        context.setConnector('MetaMask');
      else if (context.error.code === InjectedConnector.errorCodes.UNLOCK_REQUIRED)
        context.unsetConnector('MetaMask');
    }
  });

  if (!context.active && !context.error) {
    return (
      <div>Loading...</div>
    );
  }

  if (context.error) {
    console.error(context.error);
    if (context.error.code === InjectedConnector.errorCodes.UNLOCK_REQUIRED) {
      return 'MetaMask account unavailable';
    } else {
      return 'Web3 is unavailable';
    }
  }

  return <Blocks />;
};


export default MetaMaskComponent;
