fetch('https://pokeapi.co/api/v2/pokemon?limit=1025')          // Ruta al archivo JSON
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
        
        pokemon.push({
            nombre : pokeparticular.name,
            numero : (i+1),
            imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            tipos : tiposs
        })
    }
console.log(pokemon.length)
    mostrarPokemonConForEach(pokemon)          
console.log(pokemon)
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
    let nombrepiola = nombre
    let nombredividido = nombre.split("-")
    if(nombredividido.length === 1)
   { nombrepiola = (nombre.charAt(0).toUpperCase()) + (nombre.slice(1)).split("-")[0]}
    else{
      nombrepiola =nombredividido[0].charAt(0).toUpperCase() + (nombredividido[0]).slice(1).split("-")[0] + " " + nombredividido[1].charAt(0).toUpperCase() + nombredividido[1].slice(1).split("-")[0]
    }

    if(espécimen.numero === 29){nombrepiola = "Nidoran ♀"}
    if(espécimen.numero === 32){nombrepiola = "Nidoran ♂"}
    container.innerHTML += 
    `<div class="Cajita">
    <h1 class="nombre">${nombrepiola}</h1>
    <img src="${espécimen.imagen}" alt="La Foto" class="imagen">
    <p class="numero">${espécimen.numero}</p>
    </div>`

  })

}

const buscar = document.getElementById("Buscar")
const filtrotipo = document.getElementById("filtrotipo")
const filtrotipo2 = document.getElementById("filtrotipo2")
function filtrar () {
  const pokemonfiltrados = pokemon.filter( poke => {
    if(filtrotipo.value !== "-"){
    return poke.tipos.includes(filtrotipo.value)} else {return pokemon}
  })
  const pokemonfiltradosdevuelta = pokemonfiltrados.filter(poke => {
    if (filtrotipo2.value !== "-"){
    return poke.tipos.includes(filtrotipo2.value)} else {return pokemon}
  })

  mostrarPokemonConForEach(pokemonfiltradosdevuelta)
}

function buscamelo(){

  const texto = buscar.value.toLowerCase()
  const pokemonfiltrados = pokemon.filter(poke => {

    return poke.nombre.toLowerCase().includes(texto) || String(poke.numero).toLowerCase().includes(texto)
  })
mostrarPokemonConForEach(pokemonfiltrados)

}

filtrotipo.addEventListener ("change", filtrar)
filtrotipo2.addEventListener ("change", filtrar)
buscar.addEventListener("input", buscamelo)