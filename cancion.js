console.log(`
[
    {
        nombre: "karen",
        grupo:"La Arrolladora",
        anio:1983,
        [
            {
                numero:1,
                nombre Cancion: "Si supieras",
                tiempo:"4:32",
            }
        ],
    }
]
`);

// function generarNombreDisco() {
    // let nombresDiscos = ["Por encima","Transencer","Futura","Un dia mas ","No veo, No siento","Los niños grandes no lloran ","No me maten antes de hoy ","Los no tan tristes ",
// ];
// 
 // Genera un índice aleatorio para seleccionar un nombre del array.
//   var indiceAle = Math.floor(Math.random() * nombresDiscos.length);
// 
//   return nombresDiscos[indiceAle];
//}


// function generarGrupoDisco(){
// let nombreGrupo=["Elefante","Moderatto","La Gustana Ciega","Los rumberos","DLD","Los panchos","Pure negga"];
//  var indiceAlea = Math.floor(Math.random() * nombreGrupo.length);
//   return nombreGrupo[indiceAlea];
// 
//}
let nombresDiscos = ["Por encima","Transencer","Futura","Un dia mas ","No veo, No siento","Los niños grandes no lloran ","No me maten antes de hoy ","Los no tan tristes "]
let nombreGrupo=["Elefante","Moderatto","La Gustana Ciega","Los rumberos","DLD","Los panchos","Pure negga"];
let nombreCancion=["Arsenico", "El mapa en tus ojos", "Estare", "Mi vida", "Todo cuenta", "Viernes", "Las cruzadas", "Un vicio caro es el amor"]


function arraySize(array){
    return Math.floor(Math.random()*array.length);

}

function aleat(){
     return Math.floor(Math.random()*(12-8+1)+8);
}



function crearDiscos(numero){
    let objeto= ' ';
    for(let i=0; i<numero; i++){
        objeto+=`
   {
         Nombre: '${nombresDiscos[arraySize(nombresDiscos)]}',
         Grupo: '${nombreGrupo[arraySize(nombreGrupo)]}',
         anio: ${Math.floor(Math.random()*(2000-1980)+1980)},      
CANCIONES:[
             ${generarCanciones(aleat())}
          ]
     
    
    },`;

        
    }
    return objeto.trim();
}

console.log(crearDiscos(5));


function generarCanciones(numeroq){
    let objeto2= ' ';
    for(let i=0; i<numeroq; i++){
        objeto2+=`
        
          {
              Numero:${i+1},
              Nombre_Cancion: '${nombreCancion[arraySize(nombreCancion)]}',
              Tiempo:"${Math.floor(Math.random()*(4-2)+2)}:${Math.floor(Math.random()*(43-10)+10)}"
     
             },`
}
return objeto2.trim();
}