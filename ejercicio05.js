async function obtenerDatos() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = await res.json();

    console.log("Altura:", data.height);
    console.log("Peso:", data.weight);

  } catch (error) {
    console.error("Error:", error);
  }
}

obtenerDatos();