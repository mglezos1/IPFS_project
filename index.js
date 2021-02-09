//I learned how to do it from this tutorial: https://medium.com/better-programming/how-to-get-started-with-ipfs-and-node-fa04baec6b3a
const IPFS = require('ipfs')

async function main () {
  const node = await IPFS.create()
}

main()