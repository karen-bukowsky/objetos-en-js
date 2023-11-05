let nombres=["Alonso", "Tomas", "Axel","Uriel","Arturo","Ana","Sofia","Karla","Alexandra"]
let apellidos=["Garcia","Hernandez","Maritnez","Valadez","Garcia","Narvaez","Castro","Olivares","Vilchis"]
let edades=[18,19,20,21,22,23]
let escuelas= ['UPT','UNAM','UAM','IPN','UTTEC','UTTEC','UVM','UNITEC']
let sexo=['femenino','masculino']
let correo=['gmail', 'hotmail']


function arraySize(array){
    return Math.floor(Math.random()*array.length);

}

console.log(`
    {
nombre: ${nombres[arraySize(nombres)]},
apellidos: ${apellidos[arraySize(apellidos)]} ${apellidos[arraySize(apellidos)]},
edad: ${edades[arraySize(edades)]},
grupo: ${Math.floor(Math.random()*18+1)}23IS,
escuela: ${escuelas[arraySize(escuelas)]},
calificacion: ${Math.floor(Math.random()*(10-5)+5)},
sexo: ${sexo[arraySize(sexo)]},
    },`
);


function crearObjetos(numero){
    let objeto;
    for(let i=0; i<numero; i++){
        objeto+=`
   {
         nombre: '${nombres[arraySize(nombres)]}',
         apellidos: '${apellidos[arraySize(apellidos)]} ${apellidos[arraySize(apellidos)]}',
         edad: ${edades[arraySize(edades)]},
         grupo: '${Math.floor(Math.random()*18+1)}23IS',
         escuela: '${escuelas[arraySize(escuelas)]}',
         calificacion: ${Math.floor(Math.random()*(10-5)+5)},
         sexo: '${sexo[arraySize(sexo)]}',
         correo: '${nombres[arraySize(nombres)]}${Math.floor(Math.random()*18+1)}@${correo[arraySize(correo)]}',
    },`;

        
    }
    return objeto.trim();
}

console.log(crearObjetos(1000));