fetch('https://pokeapi.co/api/v2/pokemon?limit=151')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Pokemon cargados desde API:');
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
    mostrarPokemonConForEach(pokemon)          

  })
  .catch(error => {               
    console.error('Error al Fetchear la API:', error);
  });



let pokemon = []
const container = document.getElementById('POKECONTAINER')

function mostrarPokemonConForEach(pokemones){
  container.innerHTML = ""  
  pokemones.forEach(espécimen => {
  
    container.innerHTML += 
    `<div class="Cajita">
    <p class="numero">${espécimen.numero}</p>
    <h1 class="nombre">${(espécimen.nombre).toUpperCase()}</h1>
    <img src="${espécimen.imagen}" alt="La Foto">
    </div>`

  })

}