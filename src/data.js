<<<<<<< HEAD

=======
/*export function fetchData(){
    fetch('./data/worldbank/worldbank.json')
    .then(response=>response.json())
    .then(data=>{var testData = JSON.stringify(data);
    document.querySelector('.country-data').innerHTML = testData;


    });
}*/

//nodes
//let select = document.querySelector('.select');
let selectI = document.querySelector('#indicator');
var countryID = document.querySelector('.country').value;
console.log(countryID);
//let h3 = document.querySelector('#result');

//functions
document.addEventListener('click', getCountryIndicators);
export function getCountryIndicators() {
fetch('./data/worldbank/worldbank.json')
.then(response=>response.json())
.then((data)=>{

  /*let indexOfCountry = Object.keys(data);
    let indexOfId = */


}) //fin de fetch
}//fin de getCountry
//window.onload = getCountryIndicators;
>>>>>>> d5fe10246d7b7a3e49874976950ce087dd2a001a
