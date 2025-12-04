const id = parseInt(prompt("Ingrese un ID"));

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json())
  .then(data => {

    const contenedor = document.getElementById("resultado");
    const nombre = document.createElement("p");
    nombre.textContent = data.name;
    contenedor.append(nombre);
    const img = document.createElement("img");
    img.setAttribute("src", data.sprites.other["official-artwork"].front_default);
    img.setAttribute("alt", "Imagen del Pokémon");
    contenedor.append(img);
    const pId = document.createElement("p");
    pId.textContent = "ID: " + data.id;
    contenedor.append(pId);
    const pPeso = document.createElement("p");
    pPeso.textContent = "Peso: " + (data.weight / 10) + " kg";
    contenedor.append(pPeso);
    const pAltura = document.createElement("p");
    pAltura.textContent = "Altura: " + (data.height / 10) + " m";
    contenedor.append(pAltura);
    const habilidades = data.abilities.map(a => a.ability.name).join(", ");
    const pHab = document.createElement("p");
    pHab.textContent = "Habilidades: " + habilidades;
    contenedor.append(pHab);
  })
  .catch(error => {
    console.error(error);
  });