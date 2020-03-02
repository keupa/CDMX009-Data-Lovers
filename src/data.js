export function fetchData(){
    console.log("funciono")
fetch('./data/worldbank/worldbank.json')
.then(response=>response.json())
.then(data=>document.querySelector('.country-data').innerHTML = JSON.stringify(data));

}
