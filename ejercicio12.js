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
            nombre.textContent = data.name.toUpperCase();
            div.append(nombre);
            data.stats.forEach(stat => {
                const p = document.createElement("p");
                p.textContent = `${(stat.stat.name).toUpperCase()}: ${stat.base_stat}`;
                div.append(p);
            });
        })
        .catch (error =>
            console.error("Error:", error));
})