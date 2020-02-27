fetch('./data/worldbank/worldbank.json')
.then(response=>response.json())
.then(data=>console.log(data.PER.indicators));
