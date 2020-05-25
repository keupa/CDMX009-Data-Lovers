let countrySelect = document.querySelector('#countrySelect')
let indiSelect = document.querySelector('#indicatorSelect')
let yearSelect = document.querySelector('#yearSelect')
let sortDirection = false
let tableData = []
let tableBody = document.querySelector('#tableData')
let tableBodyP = document.querySelector('#tableDataP')

//variables globales
let country
let indicator
let year
let findIndicator
let percent

//funciones
function onChange(e) {
  let value = e.target.value
  country = value
  let indi = data[country].indicators
  setOptions(indi)
  document.getElementById("tittle").innerHTML = country;
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
findIndicator = data[country].indicators.find(obj=>obj.indicatorName === indicator)
let years = Object.keys(findIndicator.data)
let percent = Object.values(findIndicator.data)
document.getElementById("indicatorname").innerHTML = indicator; 

loadYears(years)
loadPercent(percent)
console.log(indicator)
}

function loadYears (list) {
list.forEach(i=>{
  let tr = document.createElement('TR')
  tr.innerText = i
  tableBody.appendChild(tr)
  console.log(i)
})
}

function loadPercent (list) {
list.forEach(i=>{
  let tr = document.createElement('TR')
  tr.innerText = i
  tableBodyP.appendChild(tr)
  console.log(i)


//listeners
countrySelect.addEventListener('change', onChange)
indiSelect.addEventListener('change', indiOnChange)
indiSelect.addEventListener('change', printRows)
yearSelect.addEventListener('change', yearOnChange)
