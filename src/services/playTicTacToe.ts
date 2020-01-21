export default const TicTacToe = (event, context, callback) => {
    // we don't need to deserialize the body ourself as a middleware will be used to do that
    const { creditCardNumber, expiryMonth, expiryYear, cvc, nameOnCard, amount } = event.body
  
    // do stuff with this data
    // ...
  
    return callback(null, { result: 'success', message: 'payment processed correctly'})
}