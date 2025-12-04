const boton = document.getElementById("enviar");
const pokemon = document.getElementById("pokemon");
const tabla = document.getElementById("tabla");
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
            const tr = document.createElement("tr");
            const tdNombre = document.createElement("td");
            tdNombre.textContent = data.name;
            tr.append(tdNombre);
            data.stats.forEach(stat => {
                const td = document.createElement("td");
                td.textContent = `${stat.base_stat}`;
                tr.append(td);
            });
            tabla.append(tr);
        })
        .catch (error =>
            console.error("Error:", error));
})