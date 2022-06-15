require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone strategy dash screen proud gown light army giant'; 
let testAccounts = [
"0x25120e912fb19dfd4d763182bd3d0ff341d2714f1d1f4883e436d6e9fd345fea",
"0xe5eb0573a72cea2470992922e141e476df841d831e78ee58d36a59f0600ff7c6",
"0xd7185c3c2116a1181f96545ac9e4f531df12af7e1b8d49a8f0c0d8e136950f39",
"0xc96bfeb9521ad9479baf93928c0637299c0090afa0735e8bb068572240f17ed0",
"0xa757f52e46d7c9305edd72600518f8f40998bca2b52c9308b2ff0978f961d240",
"0xf7e293ef87ba9189a8df6225715ac0c7f6635a6e5c61789d667e9fbf6ce86e5b",
"0xb601d79a7f1e7eeedd6f53cd37554edbeecf5a4d0f753a5e84827c7e94b5a251",
"0x2d87bf03a620a873c92454a7e9a9812cab9bea05400ee7ffa079bf0a2e6baab7",
"0x9c2ea4a90d607f0e5b591a01f60c0283ff420d9ac6ac8b774f38bfc0e9e813a9",
"0x536a09cace284b81d9874c2c22af5f8542b9d4dcc04c07fc4673287628e067e5"
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
            version: '^0.8.0'
        }
    }
};

