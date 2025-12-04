let pokemons = [];
let indexStart = 0;

async function cargarPokemones() {
    for (let i = 1; i <= 12; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        pokemons.push(data);
    }

    mostrarPokemones();
}

function mostrarPokemones() {
    const cont = document.getElementById("pokemon-container");
    cont.innerHTML = "";  

    const grupo = pokemons.slice(indexStart, indexStart + 3);

    grupo.forEach(p => {
        const card = `
        <div class="card">
            <img src="${p.sprites.front_default}">
            <h3>${p.name}</h3>
            <p>ID: ${p.id}</p>
        </div>
        `;
        cont.innerHTML += card;
    });
}

document.getElementById("btn-next").addEventListener("click", () => {
    if (indexStart + 3 < pokemons.length) {
        indexStart += 3;
        mostrarPokemones();
    }
});

document.getElementById("btn-prev").addEventListener("click", () => {
    if (indexStart - 3 >= 0) {
        indexStart -= 3;
        mostrarPokemones();
    }
});

cargarPokemones();