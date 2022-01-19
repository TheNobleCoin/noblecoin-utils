![image]("https://avatars.githubusercontent.com/u/96786263?s=96&amp;v=4")

# NobleCoin Utilities

[![NPM](https://nodeico.herokuapp.com/noblecoin-utils.svg)](https://npmjs.com/package/noblecoin-utils)

![Prerequisite](https://img.shields.io/badge/node-%3E%3D10-blue.svg) [![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://utils.turtlecoin.dev) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/turtlecoin/turtlecoin-utils/graphs/commit-activity) [![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-yellow.svg)](https://github.com/thenoblecoin/noblecoin-utils/blob/master/LICENSE)

#### Master Build Status
[![Build Status](https://github.com/thenoblecoin/noblecoin-utils/workflows/CI%20Build%20Tests/badge.svg?branch=master)](https://github.com/thenoblecoin/noblecoin-utils/actions)

#### Development Build Status
[![Build Status](https://github.com/thenoblecoin/noblecoin-utils/workflows/CI%20Build%20Tests/badge.svg?branch=development)](https://github.com/thenoblecoin/noblecoin-utils/actions)

## Overview
This package contains a number of different utility libraries that help with the following network and wallet based activities:

* Wallet (and Address) generation, verification, and encoding/decoding
* Block handling, construction, decoding, and ID and PoW hash calculation
* Block template handling
* Multisig operations including Multisig participant message exchanges
* RPC interations with TurtleCoind and Wallet-API
* Network P2P communication protocols (connect to the P2P network directly)
* Transaction construction facilities
* Ledger hardware wallet interaction for the [NobleCoin® Ledger Wallet Application](https://github.com/thenoblecoin/ledger-noblecoin-app)
* Transaction handling, construction, decoding, hash calculations, TX_EXTRA parsing, etc
* Deterministic subwallet generation
* And much, much, more...

If you experience any issues with this library, the best way to address such situations is to submit a Pull Request to resolve the issue you are running into.

## Installation

```bash
npm install noblecoin-utils
```

## Initialization

### TypeScript

```typescript
import {
    Address, 
    AddressPrefix, 
    Block, 
    BlockTemplate, 
    CryptoNote, 
    LevinPacket, 
    Transaction
} from 'noblecoin-utils'
const coinUtils = new CryptoNote()
```

### Javascript

```javascript
const NobleCoinUtils = require('noblecoin-utils')
const coinUtils = new NobleCoinUtils.CryptoNote()
```

### Browser Support

When packing for the browser with a tool like [webpack](https://webpack.js.org/) we advise that you use the ready `event` of the webpacked module to determine when the Cryptographic methods are available.

```html
<script src="NobleCoinUtils.js"></script>
<script>
  NobleCoinUtils.on('ready', () => {
    const coinUtils = new NobleCoinUtils.CryptoNote()
  })
</script>
```

### Documentation

You can find the full documentation for this library [here](https://utils.noblecoin.dev)

### Credits

Special thanks goes out to:

* Lucas Jones
* Paul Shapiro
* Luigi111
* [The MyMonero Project](https://github.com/mymonero/mymonero-app-js)
* The Masari Project: [gnock](https://github.com/gnock)
* The Plentum Project: [DaveLong](https://github.com/DaveLong)
