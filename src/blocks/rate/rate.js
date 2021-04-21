const endpoint = 'https://api.lunarcrush.com/v2?data=market-pairs&key=mezung7u4fcxiv8do9sznj&symbol=USDT&limit=10&page=0'

fetch(endpoint).then(data => data.json()).then(data => console.log(data))
