const id = Math.round(Math.random() * 898) + 1;

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json())
  .then(data => {
    console.log("ID:", data.id);
    console.log("Nombre:", data.name);
  })
  .catch(error => {
    console.error("Error:", error);
  });