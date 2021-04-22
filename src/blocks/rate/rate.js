const baseUrl = 'https://api.coingecko.com/api/v3';

const bitcoin = fetch(baseUrl + '/coins/bitcoin/tickers').then(data => data.json());
const bnb = fetch(baseUrl + '/coins/binancecoin/tickers').then(data => data.json());
const litecoin = fetch(baseUrl + '/coins/litecoin/tickers').then(data => data.json());
const ethereum = fetch(baseUrl + '/coins/ethereum/tickers').then(data => data.json());

Promise.all([
    bitcoin,
    bnb,
    litecoin,
    ethereum
]).then(dataArray => {
    const newArray = dataArray.map(coin => {
        const price = coin.tickers.find(ticker => ticker.target === 'USD').last;
        return {
            name: coin.name,
            price
        };
    });
    console.log(newArray);
});
