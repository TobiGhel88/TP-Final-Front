fetch('https://pokeapi.co/api/v2/pokemon?limit=1500')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Pokemon cargados desde JSON:');
    const pokes = data.results 
    for(let i = 0; i < pokes.length; i++){
        let pokeparticular = pokes[i]
        let id = i+1
        pokemon.push({
            nombre : pokeparticular.name,
            numero : (i+1),
            imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        })
    }
console.log(pokemon.length)
    mostarlasomidasconforeach(comidas)          
    actualizarFiltros()        // Asignar el JSON a la variable comidas
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });



let pokemon = []