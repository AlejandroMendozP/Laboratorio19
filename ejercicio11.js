const boton = document.getElementById("enviar");
const pokemon = document.getElementById("pokemon");
const div = document.getElementById("mostrar");
const regexID = /^\d+$/;

boton.addEventListener("click", () =>{
    let variable;
    if (regexID.test(pokemon.value)){
        variable = pokemon.value;
    }
    else { 
        variable = pokemon.value.toLowerCase();
    }
        fetch(`https://pokeapi.co/api/v2/pokemon/${variable}`)
        .then (response => response.json())
        .then (data =>{
            div.innerHTML = "";
            const img = document.createElement("img");
            img.setAttribute("src", data.sprites.front_default);
            img.setAttribute("alt", data.name);
            div.append(img);
            const nombre = document.createElement("p");
            nombre.textContent = data.name.toUpperCase() + " -> ";
            div.append(nombre);
            const tipos = data.types.map(t => t.type.name).join(", ");
            const tiposP = document.createElement("p");
            tiposP.textContent = "Tipos: " + tipos;
            div.append(tiposP);
        })
        .catch (error =>
            console.error("Error:", error));
})