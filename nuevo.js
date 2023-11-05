function generarNombreDisco() {
  let nombresDiscos = [
    "Por encima",
    "Transencer",
    "Futura",
    "Un día más",
    "No veo, no siento",
    "Los niños grandes no lloran",
    "No me maten antes de hoy",
    "Los no tan tristes",
  ];

  let indiceAleatorio = Math.floor(Math.random() * nombresDiscos.length);

  return nombresDiscos[indiceAleatorio];
}

function generarGrupoDisco() {
  let nombreGrupo = [
    "Elefante",
    "Moderatto",
    "La Gustana Ciega",
    "Los rumberos",
    "DLD",
    "Los panchos",
    "Pure negga",
  ];

  let indiceAleatorio = Math.floor(Math.random() * nombreGrupo.length);

  return nombreGrupo[indiceAleatorio];
}

function generarCancion() {
  let canciones = [
    {
      numero: 1,
      nombreCancion: "Si supieras",
      tiempo: "4:32",
    },
    {
      numero: 2,
      nombreCancion: "Canción 2",
      tiempo: "3:45",
    },
    {
  numero: 3,
  nombreCancion: "Canción 2",
  tiempo: "3:45",
},
    {
  numero: 4,
  nombreCancion: "Canción 2",
  tiempo: "3:45",
},
    {
  numero: 5,
  nombreCancion: "Canción 2",
  tiempo: "3:45",
},
    {
  numero: 6,
  nombreCancion: "Canción 2",
  tiempo: "3:45",
},
    {
  numero: 7,
  nombreCancion: "Canción 2",
  tiempo: "3:45",
},
    
    // Agrega más canciones aquí
  ];

  let cantidadCanciones = Math.floor(Math.random() * (1 - 1 + 1) + 1);
  let cancionesAleatorias = [];

  for (let i = 0; i < cantidadCanciones; i++) {
    let indiceCancion = Math.floor(Math.random() * canciones.length);
    cancionesAleatorias.push(canciones[indiceCancion]);
  }

  return cancionesAleatorias;
}

function crearDiscos(numero) {
  let discos = [];
  for (let i = 0; i < numero; i++) {
    let disco = {
      Nombre: generarNombreDisco(),
      Grupo: generarGrupoDisco(),
      anio: Math.floor(Math.random() * (2000 - 1980 + 1) + 1980),
      Canciones: generarCancion(),
    };
    discos.push(disco);
  }

  return JSON.stringify(discos, null, 2);
}

console.log(crearDiscos(100));
