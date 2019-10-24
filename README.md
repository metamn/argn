# argn

## The challenge

DESCRIPTION

- [x] Build a small app to explore the latest blocks on Ethereum. The goal of the app is to provide a way to glance at the recent Ether transfers happening on the blockchain.

REQUIREMENTS

- [ ] Display at least the ten latest blocks.
- [ ] Allow the user to see the transactions from a block. Only the transactions sending Ether should be displayed.
- [ ] Allow the user to see some details about a transaction.
- [ ] Bonus: any extra feature you find relevant, useful or interesting.

NOTES

- [x] You can use any library you feel comfortable with.
- [x] The app will be loaded in a browser with MetaMask.
- [ ] Feel free to interpret the requirements in any way that you think could be interesting.
- [ ] The app doesn’t need to follow the Aragon visual identity but you can use the aragonUI.
- [ ] Don’t hesitate to ask any question to the team :-)

THE SUBMISSION WILL BE EVALUATED ON THE FOLLOWING POINTS:

- [ ] We'll pay special attention to the visual and UI choices and implementation.
- [ ] Code quality / readability / testability.
- [ ] Perceived performance.
- [ ] Accessibility.
- [ ] We expect the implementation to be pretty straight forward, so definitely surprise us with any extra!
- [ ] Send us the Github repo and live demo link once completed.

## Implementation notes

- The [web3-react](https://github.com/NoahZinsmeister/web3-react) library is used to connect to the Ethereum blockchain through MetaMask. This library the most used and modern (with hooks) however it doesn't works perfectly. Lots of trials and errors to make it work.
