fetch("https://pokeapi.co/api/v2/pokemon/charizard")
  .then(res => res.json())
  .then(data => {
    console.log("URL de la imagen:", data.sprites.front_default);
  })
  .catch(error => {
    console.error("Error:", error);
  });