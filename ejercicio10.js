const lista = []

for (let i = 1; i <= 10; i++){
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(response => response.json())
    .then(data =>{
        lista.push(data)
        const div = document.createElement("div")
        div.classList.add("caja");
        const nombre = document.createElement("p")
        nombre.textContent = data.name.toUpperCase()
        const id = document.createElement("p")
        id.textContent = "ID: "+data.id
        const img = document.createElement("img")
        img.setAttribute("src", data.sprites.front_default)
        img.setAttribute("alt", data.name)
        div.append(nombre)
        div.append(id)
        div.append(img)
        document.body.append(div)
    })
    .catch(error =>
        console.error("Error:", error));
}