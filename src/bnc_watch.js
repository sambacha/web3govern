// get the current accounts list of the user via web3.js
const accounts = await web3.eth.getAccounts()

// grab the primary account
const address = accounts[0]

// call with the address of the account that you would like to receive status updates for
const {
  emitter, // emitter object to listen for status updates
  details // initial account details which are useful for internal tracking: address
} = blocknative.account(address)
