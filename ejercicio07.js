fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
  .then(res => res.json())
  .then(data => {
    data.results.forEach(pokemon => {
      console.log(pokemon.name);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });