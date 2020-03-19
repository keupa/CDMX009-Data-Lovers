import data from './data/worldbank/worldbank.js'

//nodos
let test = document.querySelector('#close-button')
let countrySelect = document.querySelector('#countrySelect')
let indiSelect = document.querySelector('#indicatorSelect')
let yearSelect = document.querySelector('#yearSelect')
let sortDirection = false
let tableData = []
let tableBody = document.querySelector('#tableData')
let tableBodyP = document.querySelector('#tableDataP')
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

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
  let indi = data.PER.indicators
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
findIndicator = data.PER.indicators.find(obj=>obj.indicatorName === indicator)
console.log(findIndicator)
let years = Object.keys(findIndicator.data)
let percent = Object.values(findIndicator.data)

console.log(years)
console.log(percent)
//let percents = Object.keys(findIndicator.data)
//setYearOptions(years)
//console.log(years)
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

  if(i==""){
    let tr = document.createElement('TR')
    tr.innerText = '----'
    tableBodyP.appendChild(tr)
    console.log(i)
  }
})
}

/*function setYearOptions(list) {
  list.forEach(i=>{
    let option = document.createElement('option')
    option.value = i
    option.label = i
    yearSelect.appendChild(option)
  })
}

function yearOnChange(e){
  let value = e.target.value
  year = value
  console.log(year)
}
*/

//funciones para pop-ups
openModalButtons.forEach(button=>{
  button.addEventListener('click', () =>{
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button=>{
  button.addEventListener('click', () =>{
    const modal = button.closest('.modal')
    closeModal(modal)

  })
})

function openModal(modal){
  if(modal==null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal){
  if(modal==null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//listeners
//countrySelect.addEventListener('change', onChange)
test.addEventListener('click', onChange)
indiSelect.addEventListener('change', indiOnChange)
overlay.addEventListener('click', ()=>{
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal=>{
    closeModal(modal)
  })
})
//indiSelect.addEventListener('change', printRows)
//yearSelect.addEventListener('change', yearOnChange)
