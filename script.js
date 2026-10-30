fetch('https://pokeapi.co/api/v2/pokemon?limit=150')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Pokemon cargados desde API:');
    const pokes = data.results 
    for(let i = 0; i < pokes.length; i++){
        let pokeparticular = pokes[i]
        let id = i+1
        let tiposs = []
        fetch(pokeparticular.url)
        .then(response => response.json())
        .then(data => {
          data.types.forEach(tipoo => {
            tiposs.push(tipoo.type.name)
          })})
        console.log(tiposs)
        pokemon.push({
            nombre : pokeparticular.name,
            numero : (i+1),
            imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            tipos : tiposs
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
    let nombre = espécimen.nombre
    let nombrepiola = (nombre.charAt(0).toUpperCase()) + (nombre.slice(1)).split("-")[0]
    if(espécimen.numero === 29){nombrepiola += " ♀"}
    if(espécimen.numero === 32){nombrepiola += " ♂"}
    container.innerHTML += 
    `<div class="Cajita">
    <h1 class="nombre">${nombrepiola}</h1>
    <img src="${espécimen.imagen}" alt="La Foto">
    <p class="numero">${espécimen.numero}</p>
    </div>`

  })

}