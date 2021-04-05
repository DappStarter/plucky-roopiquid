require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name rice sad unlock harvest merry fog simple'; 
let testAccounts = [
"0x83062f4ea3f53f7bf053e242cac3099a5eb2ca951abfb6fcf6e32cb2b9d698e7",
"0x8c6f6e20880602b1e3d8f063ac9575e37dca73fc3434bde38a0ada9ceac10c96",
"0x548378ab7a25f938f0e11c9e608813b900c8d7f3eba280033d14b2738a8fc1e6",
"0x7e9422b31ab0f7a446e99006490c67c8c3896264f19b7a474febb498816403c4",
"0x0186c380514e1a5e9860176ff2b464242625ee9600db8065fc39dce6f4143943",
"0x0870f60dc126c48f20026493ca55847af1674db40155e5ef86eee6bc57ae2760",
"0x94881ee405755a951664e857faca93e5e79325525d932b41925ecf302eb1fca5",
"0x76133844ea88ed0e7ab6f2a5014e386996801748e6d65f137c478409434602cd",
"0xa881bc7ca881e5bf9c37cafe224a16ab5253a4aa6b57e3129d5d9665c0ecd17d",
"0xdc4206da1fa54e82eec17f07b3358a484574c383b8390873993b9b7ba15a838c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
