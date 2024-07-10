# BeginID SDK

Welcome to **Begin Wallet - BeginID**, your universal wallet address solution, powered by ENS.

Here you can find how to install and use **BeginID** on your dApp or wallet to resolver addresses from supported blockchains.

## Modules

- Cardano
- Bitcoin (TBD)
- Ethereum (TBD)

## Modules

- BeginID Resolver


## Install

To install BeginID on your project run.

```bash
npm install @beginwallet/id 
or 
yarn add @beginwallet/id
```


## Resolvers

With BeginID SDK you can resolve `Name` or `Address`.

For this release we're using a fixed API_KEY=`31cab9edcc1c530e29924a56167d4ed17d50b7fds`.

### Resolve Name or Address (Payment or Rewards)

```ts
import { BeginId } from "@beginwallet/id";

...

const beginId = new BeginId("31cab9edcc1c530e29924a56167d4ed17d50b7fds");

//Resolve Name
const profile = await beginId.resolveAddress(name);

// OR

//Resolve Address
const profile = await beginId.resolveAdressReverse(<PaymentAddress|RewardAddress>);

```

### Examples

Test Resolve Name:
- `begin`

Test Resolve Address:
- Payment: `addr1q84x3qh7e0q6fldmj5mnk89vjlvgncsw5g9dmxmel4qt00j04mm39fw8l4pewc59xl59v7zszwye9vhuh3zwft8e5j9sslflq0`
- Reward: `stake1u986aacj5hrl6suhv2zn06zk0pgp8zvjkt7tc38y4nu6fzcsg3cxt`

by [Begin Wallet](https://begin.is)