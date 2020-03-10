// 1.- importamos la Data
import data from './data/worldbank/worldbank.js'

//5.- Guardamos en variables globales
let country
let val=0
// let indi2
// 2.- selectores (nodos)
let select = document.querySelector('#cText')
let indiSelect = document.querySelector('#indicator')
let yearSelect = document.querySelector('#year')

//4.- funciones callback
function onChange(event){
  let value = event.target.value
  country = value
  let indi = data[value].indicators
  console.log(indi)
  setOptions(indi)
}

function onChange1(event1){
  let value1 = event1.target.value
  let indicator = value1
  console.log(indicator)
    // indiucador hay filtrar con ase al indicador
  let indicador = data[country].indicators.find(obj=>obj.indicatorName===indicator)
  setOptionsY(Object.keys(indicador.data))
  console.log(Object.values(indicador.data))

}





//6.- funcion para colocar options en el select de indicator
function setOptions(list){
  list.forEach(i=>{
    //a.- creamos el option
    let option = document.createElement('option')
    option.label =i.indicatorName
    option.value=i.indicatorName
    val=(Object.keys(i.data))  
    indiSelect.appendChild(option)
    // yearSelect.appendChild(option)

  })
}
function setOptionsY(listY){
  console.log(listY)
  listY.forEach(val=>{
    let optionY = document.createElement('option')
    optionY.label =val
    optionY.value=val      
    yearSelect.appendChild(optionY)
  
  })
}

// 3.- listener
select.addEventListener('change', onChange)
// yearSelect.addEventListener('change', onChange1)
indiSelect.addEventListener('change', onChange1)
