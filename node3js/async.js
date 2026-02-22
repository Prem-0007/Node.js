console.log('Starting')
// Wait 2 seconds before running the function
setTimeout(() => {
 console.log('2 Second Timer')
}, 2000)
console.log('Stopping')

console.log(setTimeout(() => {
  console.log(5+2)  ;
}, 5000));