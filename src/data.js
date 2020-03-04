


// fetch('./data/worldbank/worldbank.json')
// .then(response=>response.json())
// // .then(data=>console.log(data.PER.indicators["17"].data["1990"]));
// // .then(data=>console.log(data.PER.indicators["17"].indicatorName ));
//    .then(( data)=>{
//        for (let i=0; i <= 138; i++) {
//         let index="";
//             //  index += console.log(data.PER.indicators[i].indicatorName );             
//            //  index += document.getElementById("text-area").innerHTML+=
//            document.getElementById("textArea").innerHTML+=
//              (data.PER.indicators[i].indicatorName );
            
               
//      }
//     }
//    )

   fetch('./data/worldbank/worldbank.json')
.then(response=>response.json())
// .then(data=>console.log(data.PER.indicators["17"].data["1990"]));
// .then(data=>console.log(data.PER.indicators["17"].indicatorName ));
   .then(( data)=>{
       for (let i=0; i <= 138; i++) {
        let index="";
            //  index += console.log(data.PER.indicators[i].indicatorName ); 
             index = (data.PER.indicators[i].indicatorName ); 
             document.getElementById("indicator").innerHTML+=("<option>" + index + "<option>");            
//             index += document.getElementById("textArea").innerHTML+=
//            document.getElementById("text-area").innerHTML+=
//              (data.PER.indicators[i].indicatorName );
           
               
     }
    }
   )



 
  

  fetch('./data/worldbank/worldbank.json')
  .then(response=>response.json())
  // .then(data=>console.log(data.PER.indicators["17"].data["1990"]));
  // .then(data=>console.log(data.PER.indicators["17"].indicatorName ));
     .then(( data)=>{
         for (let x=0; x <= 57; x++) {
          let year= 1960;
          document.getElementById("year").innerHTML+=("<option>" + year + "<option>"); 
         
               
               console.log(year+x);            
                          
                  }
      }
     )

      // fetch('./data/worldbank/worldbank.json')
      // .then(response=>response.json())
      // .then(data=>console.log(data.PER.indicators[]data["1990"]));

   function genera_tabla() {
       var body = document.getElementsByTagName("textArea")[0];
        var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
   
    for (let ind = 0; ind < 13; ind++) {
         var hilera = document.createElement("tr");
   
      for (var j = 0; j < 2; j++) {
            var celda = document.createElement("td");
        var textoCelda = document.createTextNode("celda en la hilera  columna "+j);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
   
        tblBody.appendChild(hilera);
    }
   
    
    tabla.appendChild(tblBody);
   
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
    
  }





// .then(data=>console.log(data));

// fetch('./data/worldbank/worldbank.json')
// .then(response=>response.json())

// // .then(data=>console.log(data.PER.indicators["17"]));

// let datos = JSON.parse(this.responseText);
// for (let item of datos){
//     console.log(data.PER);
// }

    



// document.getElementById("jsonBTN").addEventListener("click", cargarJson);

// function cargarJson() {
//     fetch('./data/worldbank/worldbank.json') 
//     .then(function (res) {
//         return res.json();
//     })
//     .then(function(data){
//         console.log(data.PER.indicators['17']);
//         // let html="";
//         // data.forEach(function(pais) {
//         //    html += "<li>${data.PER} </li> ";
//         // })
//         //     document.getElementById("resultado").innerHTML=html;
//     })
// }
// output+=
// '
// <ul>
//     <li>id: console.log</li>
 

// document.getElementById("jsonBtn").addEventListener("click",getText);
// function getText(){
//     fetch('./data/worldbank/worldbank.json') 
//     .then((response)=>response.json())
//     .then(( data)=>{
//         let output = "<h2>users</h2>";
//         data.forEach(function(user) {
//            const paises= "data";
//             paises.forEach(element => console.log(element));
  
//         document.getElementById("output").innerHTML=output;

//     });

// }
    
    

// // .then(data=>console.log(data.PER.indicators["17"]));
// .then(data=>console.log(data));
