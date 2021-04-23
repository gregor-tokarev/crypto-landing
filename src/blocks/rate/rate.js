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
    const currencyObj = {
        stable: {
            price: 1,
            description: ' USDT(Stablecoin). Аналог доллара в digital-формате(всегда равен одному доллару). Необходим для того, чтобы избежать волатильности при торговле криптовалютами. 20% стоимости обеспечивается запасами долларов США.'
        }
    };
    for (const value of newArray) {
        currencyObj[ value.name ] = { price: value.price };
    }
    currencyObj.Bitcoin.description = 'Bitcoin - эталон и первопроходец в мире криптовалют. Лидирует по капитализации, задает темп другим валютам.';
    currencyObj.Ethereum.description = 'Ethereum - вторая по капитализации валюта. В ней была впервые реализована идея smart-контрактов. Это контракты, написанные программным кодом и хранящиеся внутри блокчейна. Позволяют быть более независимым от создателя, отслеживаемее и необратимее.';
    currencyObj.Litecoin.description = 'Litecoin - криптовалюта, славящаяся быстротой своих транзакций. Мгновенные переводы с минимальной комиссией. Сделан на основе bitcoin’а.';
    currencyObj['Binance Coin'].description = 'Bnb(Binance Coin) - криптовалюта биржи Binances';
    setCurrency(currencyObj.Bitcoin);
    
    const icons = document.querySelectorAll('.rate__currency');
    icons.forEach(icon => {
        icon.addEventListener('click', event => {
            const fieldName = icon.dataset.currency;
            setCurrency(currencyObj[ fieldName ]);
        });
    });
});

function setCurrency(currency) {
    const priceEl = document.querySelector('.rate__number');
    priceEl.textContent = currency.price;
    
    const descriptionEl = document.querySelector('.rate__description')
    descriptionEl.innerHTML = currency.description
}
