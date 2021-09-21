const API = `https://anatolethien.eu/recipes.json`;
const ID = 0;

async function fetchData() {
    const Response = await fetch(API);
    const Data = await Response.json();
    document.getElementById("recipe-name").innerHTML = Data[ID].name;
    document.getElementById("recipe-description").innerHTML = Data[ID].description;
    let ingredients = ``
    Data[ID].ingredients.forEach((element) => {
        ingredients += `<li>${element}</li>`
    });
    document.getElementById("recipe-ingredients").innerHTML = ingredients;
    let instructions = ``
    Data[ID].instructions.forEach((element) => {
        instructions += `<li>${element}</li>`
    });
    console.log(instructions);
    document.getElementById("recipe-instructions").innerHTML = instructions;
}

fetchData();
