import React, { useState, useEffect } from "react";
import { useWeb3Context } from "web3-react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { GU } from "@aragon/ui";

import { Section as _Section } from "../SemanticHTML";
import Block from "../Block";

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
const Section = styled(_Section)(props => ({
  display: "flex",
  flexWrap: "wrap",

  "& .Block": {
    marginBottom: `${GU * 3}px`,
    marginRight: "1em"
  }
}));

/**
 * Displays the blocks
 *
 */
const Blocks = props => {
  const { active, library } = useWeb3Context();

  /**
   * Loads the latest block number
   *
   * - The other block numbers will be obtained using this block number
   */
  const [latestBlockNumber, setLatestBlockNumber] = useState(0);

  useEffect(() => {
    if (active) {
      /**
       * The usage of this `web3-react` library is cumbersome
       * - The async / await construct doesn't really works
       * - This working approach used below comes from the author itself: https://github.com/NoahZinsmeister/web3-react/issues/12, https://github.com/jinserk/web3-react-dapp/pull/1/commits/3573b64d9d2028d6921c02b748c5749222cd2d99
       */
      library
        .getBlockNumber()
        .then(value => {
          setLatestBlockNumber(value);
        })
        .catch(err => {
          console.log("getBlockNumber error:", err);
        });
    }
  }, [active, library]);

  /**
   * Loads the latest 10 blocks
   *
   */
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    if (active && latestBlockNumber) {
      /**
       * NOTICE: It seems `BatchRequest` is not working in this library: https://github.com/NoahZinsmeister/web3-react/issues/34
       * - A best practice would be using it: https://ethereum.stackexchange.com/questions/1587/how-can-i-get-the-data-of-the-latest-10-blocks-via-web3-js
       * - But now it is skipped until the bug is fixed
       */
      for (var i = 0; i < 10; i++) {
        library
          .getBlock(latestBlockNumber - i)
          .then(value => {
            setBlocks(blocks => [...blocks, value]);
          })
          .catch(err => {
            console.log("getBlock error:", err);
          });
      }
    }
  }, [active, latestBlockNumber, library]);

  return (
    <Section className="Blocks" title="Blocks">
      {blocks && blocks.map((block, index) => <Block key={index} {...block} />)}
    </Section>
  );
};

Blocks.propTypes = propTypes;
Blocks.defaultProps = defaultProps;

export default Blocks;
export { propTypes as BlocksPropTypes, defaultProps as BlocksDefaultProps };
