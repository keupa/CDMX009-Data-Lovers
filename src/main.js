// 1.- importamos la Data
import data from './data/worldbank/worldbank.js'

//5.- Guardamos en variables globales
let country

// 2.- selectores (nodos)
let select = document.querySelector('#cText')
let indiSelect = document.querySelector('#indicator')

//4.- funciones callback
function onChange(event){
  let value = event.target.value
  country = value
  let indi = data[value].indicators
  console.log(indi)
  setOptions(indi)
}

//6.- funcion para colocar options en el select de indicator
function setOptions(list){
  list.forEach(i=>{
    //a.- creamos el option
    let option = document.createElement('option')
    option.label = i.indicatorName
    option.value=i.indicatorName
    indiSelect.appendChild(option)
  })
}

// 3.- listener
select.addEventListener('change', onChange)
