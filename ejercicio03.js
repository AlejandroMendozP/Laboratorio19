const id = prompt("Ingresa el ID del Pokémon:");

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json())
  .then(data => {
    console.log("Nombre del Pokémon:", data.name);
  })
  .catch(error => {
    console.error("Error:", error);
  });