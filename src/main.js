import data from './data/worldbank/worldbank.js'
//console.log(data.PER.indicators[9].data)
//nodos

import yearFilter from './data.js';

let countrySelect = document.querySelector('#countrySelect')
let indiSelect = document.querySelector('#indicatorSelect')
let yearSelect = document.querySelector('#yearSelect')

//variables globales
let country
let indicator
let year
let findIndicator
let percents
let percent
let test

let years = Object.keys(data.PER.indicators[0].data);
let porcentajes = Object.values(data.PER.indicators[0].data);

//funciones
function onChange(e) {
  let value = e.target.value
  country = value
  let indi = data[country].indicators
  setOptions(indi)
  console.log(country)
}

function setOptions(list) {
  list.forEach(i=>{
    let option = document.createElement('option')
    option.value = i.indicatorName
    option.label = i.indicatorName
    indiSelect.appendChild(option)
  })
}

function indiOnChange(e){
let value = e.target.value
indicator = value
let findIndicator = data[country].indicators.find(obj=>obj.indicatorName === indicator)
let years = Object.keys(findIndicator.data)
percents = Object.values(findIndicator.data)
setYearOptions(years)
console.log(indicator)
console.log(percents)
}

function setYearOptions(list) {
  list.forEach(i=>{
    let option = document.createElement('option')
    option.value = i
    option.label = i
    yearSelect.appendChild(option)
  })
}

function yearOnChange(e){
  return e.target.value;
/  // years.forEach((item) => {
  //   if(item === year) {
  //     console.log(item)
  //     porcentajes.forEach((i) => {
  //       console.log(i)
  //     })
  //   }
  // })

  //console.log(year)
}

yearFilter(yearOnChange)
console.log(porcentajes)
console.log(years)

//listeners
countrySelect.addEventListener('change', onChange)
indiSelect.addEventListener('change', indiOnChange)
yearSelect.addEventListener('change', yearOnChange)
