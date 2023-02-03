import { addSelectedButton, removeSelectedButton, removeSelectedRecipe, removeVisibilityHidden } from "./lib/tools.js";

// Variables 
const main = document.getElementById('main');

// Variables popUp TUESDAY
const popUpThursday = document.getElementById('popUpThursday');
const cardContainerThursday = document.getElementById('cardContainerThursday');
let cardThursday = "";

// Variable Tableau de recettes
const recipesArray = [];

// Variable element select
let elementSelected = -1;


// CODE-----------------------------------------------------------------------------------------------------------------

//-----------Recettes --------------------------------------------------------------------------------------------------
//------------------------------Classe recettes ------------------------------------------------------------------------
class recipe {
    constructor(number, name, ingredients) {
        this.number = number;
        this.name = name;
        this.ingredients = ingredients;
    }
};
//------------------------------Push recettes tableau -----------------------------------------------------------------
recipesArray.push(new recipe("0", "Pechuga a la plancha con verduras y pastas", ["Pechuga de pollo", "Cebolla", "Pastas", "Verduras", "Salsa tomate"]))
recipesArray.push(new recipe("1", "Arroz con huevo", ["Arroz", "Huevos", "Tomates"]));
recipesArray.push(new recipe("2", "Filete de pescado a la plancha con verduras", ["Filete de pescado", "Pastas o arroz", "Verduras", "Lechuga"]))
recipesArray.push(new recipe("3", "Salmon con verduras", ["Salmon", "Verduras", "Pastas o arroz",]));
recipesArray.push(new recipe("4", "Tacos de pollo", ["Pechuga de pollo", "Tortillas", "Cebolla", "Media crema", "Aguacate"]));
recipesArray.push(new recipe("5", "Tostadas de pollo", ["Pechuga de pollo", "Tostadas", "Lechuga", "Cebolla", "Aguacate", "Media crema", "Frijol"]));
recipesArray.push(new recipe("6", "Molletes fit", ["Pan", "Frijol", "Queso oaxaca", "Cebolla"]));
recipesArray.push(new recipe("7", "Atun con salmas", ["Atun", "Lechuga", "Verduras", "Salmas"]));
recipesArray.push(new recipe("8", "Huevo", ["Huevos", "Espinacas", "Tomates", "Pan"]));
recipesArray.push(new recipe("9", "Omelette", ["Huevos", "Champinones", "Queso oaxaca", "Pan"]));
recipesArray.push(new recipe("10", "Quesadillas con champinones", ["Tortillas", "Queso oaxaca", "Jamon", "Champinones"]));
recipesArray.push(new recipe("11", "Hamburguesa casera", ["Pan hamburguesa", "Pechuga de pollo", "Cebolla", "Lechuga", "Queso oaxaca", "Mayonessa / Ketchup"]));


 // ----------POP-UP---------------------------------------------------------------------------------------------------  
 const createCardLunchThursday = (element) => {
    cardThursday += `<a href="#" class="popUpCard flexCenter" id="${element.number}thursday">
        <h2>${element.name}</h2>
</a>`
    cardContainerThursday.innerHTML = cardThursday;
}
// ---------------------------- Boucle pour crea cartes pour chaques recettes lunch (Thursday)---------------------------
recipesArray.forEach(element => {
    createCardLunchThursday(element);
});

//------------------------------Ajout recettes tableau------------------------------------------------------------------

document.getElementById('0thursday').addEventListener("click", (e) => {
    elementSelected = 0;
    document.getElementById("0thursday").classList.add("popUpCardSelect");
    document.getElementById("1thursday").classList.add("visibilityHidden");
    document.getElementById("2thursday").classList.add("visibilityHidden");
    document.getElementById("3thursday").classList.add("visibilityHidden");
    document.getElementById("4thursday").classList.add("visibilityHidden");
    document.getElementById("5thursday").classList.add("visibilityHidden");
    document.getElementById("6thursday").classList.add("visibilityHidden");
    document.getElementById("7thursday").classList.add("visibilityHidden");
    document.getElementById("8thursday").classList.add("visibilityHidden");
    document.getElementById("9thursday").classList.add("visibilityHidden");
    document.getElementById("10thursday").classList.add("visibilityHidden");
    document.getElementById("11thursday").classList.add("visibilityHidden");
}
);

document.getElementById('1thursday').addEventListener("click", (e) => {
    elementSelected = 1;
    document.getElementById("1thursday").classList.add("popUpCardSelect");
    document.getElementById("0thursday").classList.add("visibilityHidden");
    document.getElementById("2thursday").classList.add("visibilityHidden");
    document.getElementById("3thursday").classList.add("visibilityHidden");
    document.getElementById("4thursday").classList.add("visibilityHidden");
    document.getElementById("5thursday").classList.add("visibilityHidden");
    document.getElementById("6thursday").classList.add("visibilityHidden");
    document.getElementById("7thursday").classList.add("visibilityHidden");
    document.getElementById("8thursday").classList.add("visibilityHidden");
    document.getElementById("9thursday").classList.add("visibilityHidden");
    document.getElementById("10thursday").classList.add("visibilityHidden");
    document.getElementById("11thursday").classList.add("visibilityHidden");
}
);

document.getElementById('2thursday').addEventListener("click", (e) => {
    elementSelected = 2;
    document.getElementById("2thursday").classList.add("popUpCardSelect");
    document.getElementById("0thursday").classList.add("visibilityHidden");
    document.getElementById("1thursday").classList.add("visibilityHidden");
    document.getElementById("3thursday").classList.add("visibilityHidden");
    document.getElementById("4thursday").classList.add("visibilityHidden");
    document.getElementById("5thursday").classList.add("visibilityHidden");
    document.getElementById("6thursday").classList.add("visibilityHidden");
    document.getElementById("7thursday").classList.add("visibilityHidden");
    document.getElementById("8thursday").classList.add("visibilityHidden");
    document.getElementById("9thursday").classList.add("visibilityHidden");
    document.getElementById("10thursday").classList.add("visibilityHidden");
    document.getElementById("11thursday").classList.add("visibilityHidden");
}
);

document.getElementById('3thursday').addEventListener("click", (e) => {
    elementSelected = 3;
    document.getElementById("3thursday").classList.add("popUpCardSelect");
    document.getElementById("0thursday").classList.add("visibilityHidden");
    document.getElementById("1thursday").classList.add("visibilityHidden");
    document.getElementById("2thursday").classList.add("visibilityHidden");
    document.getElementById("4thursday").classList.add("visibilityHidden");
    document.getElementById("5thursday").classList.add("visibilityHidden");
    document.getElementById("6thursday").classList.add("visibilityHidden");
    document.getElementById("7thursday").classList.add("visibilityHidden");
    document.getElementById("8thursday").classList.add("visibilityHidden");
    document.getElementById("9thursday").classList.add("visibilityHidden");
    document.getElementById("10thursday").classList.add("visibilityHidden");
    document.getElementById("11thursday").classList.add("visibilityHidden");
}
);

document.getElementById('4thursday').addEventListener("click", (e) => {
    elementSelected = 4;
    document.getElementById("4thursday").classList.add("popUpCardSelect");
    document.getElementById("0thursday").classList.add("visibilityHidden");
    document.getElementById("1thursday").classList.add("visibilityHidden");
    document.getElementById("2thursday").classList.add("visibilityHidden");
    document.getElementById("3thursday").classList.add("visibilityHidden");
    document.getElementById("5thursday").classList.add("visibilityHidden");
    document.getElementById("6thursday").classList.add("visibilityHidden");
    document.getElementById("7thursday").classList.add("visibilityHidden");
    document.getElementById("8thursday").classList.add("visibilityHidden");
    document.getElementById("9thursday").classList.add("visibilityHidden");
    document.getElementById("10thursday").classList.add("visibilityHidden");
    document.getElementById("11thursday").classList.add("visibilityHidden");
}
);

document.getElementById('5thursday').addEventListener("click", (e) => {
    elementSelected = 5;
    document.getElementById("5thursday").classList.add("popUpCardSelect");
    document.getElementById("0thursday").classList.add("visibilityHidden");
    document.getElementById("1thursday").classList.add("visibilityHidden");
    document.getElementById("2thursday").classList.add("visibilityHidden");
    document.getElementById("3thursday").classList.add("visibilityHidden");
    document.getElementById("4thursday").classList.add("visibilityHidden");
    document.getElementById("6thursday").classList.add("visibilityHidden");
    document.getElementById("7thursday").classList.add("visibilityHidden");
    document.getElementById("8thursday").classList.add("visibilityHidden");
    document.getElementById("9thursday").classList.add("visibilityHidden");
    document.getElementById("10thursday").classList.add("visibilityHidden");
    document.getElementById("11thursday").classList.add("visibilityHidden");
}
);

document.getElementById('6thursday').addEventListener("click", (e) => {
    elementSelected = 6;
    document.getElementById("6thursday").classList.add("popUpCardSelect");
    document.getElementById("0thursday").classList.add("visibilityHidden");
    document.getElementById("1thursday").classList.add("visibilityHidden");
    document.getElementById("2thursday").classList.add("visibilityHidden");
    document.getElementById("3thursday").classList.add("visibilityHidden");
    document.getElementById("4thursday").classList.add("visibilityHidden");
    document.getElementById("5thursday").classList.add("visibilityHidden");
    document.getElementById("7thursday").classList.add("visibilityHidden");
    document.getElementById("8thursday").classList.add("visibilityHidden");
    document.getElementById("9thursday").classList.add("visibilityHidden");
    document.getElementById("10thursday").classList.add("visibilityHidden");
    document.getElementById("11thursday").classList.add("visibilityHidden");
}
);

document.getElementById('7thursday').addEventListener("click", (e) => {
    elementSelected = 7;
    document.getElementById("7thursday").classList.add("popUpCardSelect");
    document.getElementById("0thursday").classList.add("visibilityHidden");
    document.getElementById("1thursday").classList.add("visibilityHidden");
    document.getElementById("2thursday").classList.add("visibilityHidden");
    document.getElementById("3thursday").classList.add("visibilityHidden");
    document.getElementById("4thursday").classList.add("visibilityHidden");
    document.getElementById("5thursday").classList.add("visibilityHidden");
    document.getElementById("6thursday").classList.add("visibilityHidden");
    document.getElementById("8thursday").classList.add("visibilityHidden");
    document.getElementById("9thursday").classList.add("visibilityHidden");
    document.getElementById("10thursday").classList.add("visibilityHidden");
    document.getElementById("11thursday").classList.add("visibilityHidden");
}
);

document.getElementById('8thursday').addEventListener("click", (e) => {
    elementSelected = 8;
    document.getElementById("8thursday").classList.add("popUpCardSelect");
    document.getElementById("0thursday").classList.add("visibilityHidden");
    document.getElementById("1thursday").classList.add("visibilityHidden");
    document.getElementById("2thursday").classList.add("visibilityHidden");
    document.getElementById("3thursday").classList.add("visibilityHidden");
    document.getElementById("4thursday").classList.add("visibilityHidden");
    document.getElementById("5thursday").classList.add("visibilityHidden");
    document.getElementById("6thursday").classList.add("visibilityHidden");
    document.getElementById("7thursday").classList.add("visibilityHidden");
    document.getElementById("9thursday").classList.add("visibilityHidden");
    document.getElementById("10thursday").classList.add("visibilityHidden");
    document.getElementById("11thursday").classList.add("visibilityHidden");
}
);

document.getElementById('9thursday').addEventListener("click", (e) => {
    elementSelected = 9;
    document.getElementById("9thursday").classList.add("popUpCardSelect");
    document.getElementById("0thursday").classList.add("visibilityHidden");
    document.getElementById("1thursday").classList.add("visibilityHidden");
    document.getElementById("2thursday").classList.add("visibilityHidden");
    document.getElementById("3thursday").classList.add("visibilityHidden");
    document.getElementById("4thursday").classList.add("visibilityHidden");
    document.getElementById("5thursday").classList.add("visibilityHidden");
    document.getElementById("6thursday").classList.add("visibilityHidden");
    document.getElementById("7thursday").classList.add("visibilityHidden");
    document.getElementById("8thursday").classList.add("visibilityHidden");
    document.getElementById("10thursday").classList.add("visibilityHidden");
    document.getElementById("11thursday").classList.add("visibilityHidden");
}
);

document.getElementById('10thursday').addEventListener("click", (e) => {
    elementSelected = 10;
    document.getElementById("10thursday").classList.add("popUpCardSelect");
    document.getElementById("0thursday").classList.add("visibilityHidden");
    document.getElementById("1thursday").classList.add("visibilityHidden");
    document.getElementById("2thursday").classList.add("visibilityHidden");
    document.getElementById("3thursday").classList.add("visibilityHidden");
    document.getElementById("4thursday").classList.add("visibilityHidden");
    document.getElementById("5thursday").classList.add("visibilityHidden");
    document.getElementById("6thursday").classList.add("visibilityHidden");
    document.getElementById("7thursday").classList.add("visibilityHidden");
    document.getElementById("8thursday").classList.add("visibilityHidden");
    document.getElementById("9thursday").classList.add("visibilityHidden");
    document.getElementById("11thursday").classList.add("visibilityHidden");
}
);

document.getElementById('11thursday').addEventListener("click", (e) => {
    elementSelected = 11;
    document.getElementById("11thursday").classList.add("popUpCardSelect");
    document.getElementById("0thursday").classList.add("visibilityHidden");
    document.getElementById("1thursday").classList.add("visibilityHidden");
    document.getElementById("2thursday").classList.add("visibilityHidden");
    document.getElementById("3thursday").classList.add("visibilityHidden");
    document.getElementById("4thursday").classList.add("visibilityHidden");
    document.getElementById("5thursday").classList.add("visibilityHidden");
    document.getElementById("6thursday").classList.add("visibilityHidden");
    document.getElementById("7thursday").classList.add("visibilityHidden");
    document.getElementById("8thursday").classList.add("visibilityHidden");
    document.getElementById("9thursday").classList.add("visibilityHidden");
    document.getElementById("10thursday").classList.add("visibilityHidden");
}
);

//------------------------------Bouton valider LUNCH thursday-------------------------------------------------------------
document.getElementById("popUpButtonThursday").addEventListener("click", () => {
    if (elementSelected === -1) {
        return
    }
    localStorage.setItem('thursdayLunch', JSON.stringify(recipesArray[elementSelected]));
    console.log(localStorage);
    elementSelected = -1
    popUpThursday.classList.add("visibilityHidden");
    main.classList.remove('visibilityHidden');
    document.getElementById("thursdayLunch").classList.add("buttonSelected");

});

//------------------------------Bouton reset LUNCH thursday -------------------------------------------------------------------
document.getElementById("resetButtonThursday").addEventListener("click", () => {
    elementSelected = -1;
    removeSelectedRecipe("thursday");
    removeVisibilityHidden("thursday");
    document.getElementById("thursdayLunch").classList.remove("buttonSelected");
    localStorage.removeItem("thursdayLunch");
});

