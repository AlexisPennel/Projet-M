import { addSelectedButton, removeSelectedButton, removeSelectedRecipe, removeVisibilityHidden } from "./lib/tools.js";

// Variables 
const main = document.getElementById('main');

// Variables popUp TUESDAY
const popUpWednesday = document.getElementById('popUpWednesday');
const cardContainerWednesday = document.getElementById('cardContainerWednesday');
let cardWednesday = "";

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
 const createCardLunchWednesday = (element) => {
    cardWednesday += `<a href="#" class="popUpCard flexCenter" id="${element.number}wednesday">
        <h2>${element.name}</h2>
</a>`
    cardContainerWednesday.innerHTML = cardWednesday;
}
// ---------------------------- Boucle pour crea cartes pour chaques recettes lunch (Wednesday)---------------------------
recipesArray.forEach(element => {
    createCardLunchWednesday(element);
});

//------------------------------Ajout recettes tableau------------------------------------------------------------------

document.getElementById('0wednesday').addEventListener("click", (e) => {
    elementSelected = 0;
    document.getElementById("0wednesday").classList.add("popUpCardSelect");
    document.getElementById("1wednesday").classList.add("visibilityHidden");
    document.getElementById("2wednesday").classList.add("visibilityHidden");
    document.getElementById("3wednesday").classList.add("visibilityHidden");
    document.getElementById("4wednesday").classList.add("visibilityHidden");
    document.getElementById("5wednesday").classList.add("visibilityHidden");
    document.getElementById("6wednesday").classList.add("visibilityHidden");
    document.getElementById("7wednesday").classList.add("visibilityHidden");
    document.getElementById("8wednesday").classList.add("visibilityHidden");
    document.getElementById("9wednesday").classList.add("visibilityHidden");
    document.getElementById("10wednesday").classList.add("visibilityHidden");
    document.getElementById("11wednesday").classList.add("visibilityHidden");
}
);

document.getElementById('1wednesday').addEventListener("click", (e) => {
    elementSelected = 1;
    document.getElementById("1wednesday").classList.add("popUpCardSelect");
    document.getElementById("0wednesday").classList.add("visibilityHidden");
    document.getElementById("2wednesday").classList.add("visibilityHidden");
    document.getElementById("3wednesday").classList.add("visibilityHidden");
    document.getElementById("4wednesday").classList.add("visibilityHidden");
    document.getElementById("5wednesday").classList.add("visibilityHidden");
    document.getElementById("6wednesday").classList.add("visibilityHidden");
    document.getElementById("7wednesday").classList.add("visibilityHidden");
    document.getElementById("8wednesday").classList.add("visibilityHidden");
    document.getElementById("9wednesday").classList.add("visibilityHidden");
    document.getElementById("10wednesday").classList.add("visibilityHidden");
    document.getElementById("11wednesday").classList.add("visibilityHidden");
}
);

document.getElementById('2wednesday').addEventListener("click", (e) => {
    elementSelected = 2;
    document.getElementById("2wednesday").classList.add("popUpCardSelect");
    document.getElementById("0wednesday").classList.add("visibilityHidden");
    document.getElementById("1wednesday").classList.add("visibilityHidden");
    document.getElementById("3wednesday").classList.add("visibilityHidden");
    document.getElementById("4wednesday").classList.add("visibilityHidden");
    document.getElementById("5wednesday").classList.add("visibilityHidden");
    document.getElementById("6wednesday").classList.add("visibilityHidden");
    document.getElementById("7wednesday").classList.add("visibilityHidden");
    document.getElementById("8wednesday").classList.add("visibilityHidden");
    document.getElementById("9wednesday").classList.add("visibilityHidden");
    document.getElementById("10wednesday").classList.add("visibilityHidden");
    document.getElementById("11wednesday").classList.add("visibilityHidden");
}
);

document.getElementById('3wednesday').addEventListener("click", (e) => {
    elementSelected = 3;
    document.getElementById("3wednesday").classList.add("popUpCardSelect");
    document.getElementById("0wednesday").classList.add("visibilityHidden");
    document.getElementById("1wednesday").classList.add("visibilityHidden");
    document.getElementById("2wednesday").classList.add("visibilityHidden");
    document.getElementById("4wednesday").classList.add("visibilityHidden");
    document.getElementById("5wednesday").classList.add("visibilityHidden");
    document.getElementById("6wednesday").classList.add("visibilityHidden");
    document.getElementById("7wednesday").classList.add("visibilityHidden");
    document.getElementById("8wednesday").classList.add("visibilityHidden");
    document.getElementById("9wednesday").classList.add("visibilityHidden");
    document.getElementById("10wednesday").classList.add("visibilityHidden");
    document.getElementById("11wednesday").classList.add("visibilityHidden");
}
);

document.getElementById('4wednesday').addEventListener("click", (e) => {
    elementSelected = 4;
    document.getElementById("4wednesday").classList.add("popUpCardSelect");
    document.getElementById("0wednesday").classList.add("visibilityHidden");
    document.getElementById("1wednesday").classList.add("visibilityHidden");
    document.getElementById("2wednesday").classList.add("visibilityHidden");
    document.getElementById("3wednesday").classList.add("visibilityHidden");
    document.getElementById("5wednesday").classList.add("visibilityHidden");
    document.getElementById("6wednesday").classList.add("visibilityHidden");
    document.getElementById("7wednesday").classList.add("visibilityHidden");
    document.getElementById("8wednesday").classList.add("visibilityHidden");
    document.getElementById("9wednesday").classList.add("visibilityHidden");
    document.getElementById("10wednesday").classList.add("visibilityHidden");
    document.getElementById("11wednesday").classList.add("visibilityHidden");
}
);

document.getElementById('5wednesday').addEventListener("click", (e) => {
    elementSelected = 5;
    document.getElementById("5wednesday").classList.add("popUpCardSelect");
    document.getElementById("0wednesday").classList.add("visibilityHidden");
    document.getElementById("1wednesday").classList.add("visibilityHidden");
    document.getElementById("2wednesday").classList.add("visibilityHidden");
    document.getElementById("3wednesday").classList.add("visibilityHidden");
    document.getElementById("4wednesday").classList.add("visibilityHidden");
    document.getElementById("6wednesday").classList.add("visibilityHidden");
    document.getElementById("7wednesday").classList.add("visibilityHidden");
    document.getElementById("8wednesday").classList.add("visibilityHidden");
    document.getElementById("9wednesday").classList.add("visibilityHidden");
    document.getElementById("10wednesday").classList.add("visibilityHidden");
    document.getElementById("11wednesday").classList.add("visibilityHidden");
}
);

document.getElementById('6wednesday').addEventListener("click", (e) => {
    elementSelected = 6;
    document.getElementById("6wednesday").classList.add("popUpCardSelect");
    document.getElementById("0wednesday").classList.add("visibilityHidden");
    document.getElementById("1wednesday").classList.add("visibilityHidden");
    document.getElementById("2wednesday").classList.add("visibilityHidden");
    document.getElementById("3wednesday").classList.add("visibilityHidden");
    document.getElementById("4wednesday").classList.add("visibilityHidden");
    document.getElementById("5wednesday").classList.add("visibilityHidden");
    document.getElementById("7wednesday").classList.add("visibilityHidden");
    document.getElementById("8wednesday").classList.add("visibilityHidden");
    document.getElementById("9wednesday").classList.add("visibilityHidden");
    document.getElementById("10wednesday").classList.add("visibilityHidden");
    document.getElementById("11wednesday").classList.add("visibilityHidden");
}
);

document.getElementById('7wednesday').addEventListener("click", (e) => {
    elementSelected = 7;
    document.getElementById("7wednesday").classList.add("popUpCardSelect");
    document.getElementById("0wednesday").classList.add("visibilityHidden");
    document.getElementById("1wednesday").classList.add("visibilityHidden");
    document.getElementById("2wednesday").classList.add("visibilityHidden");
    document.getElementById("3wednesday").classList.add("visibilityHidden");
    document.getElementById("4wednesday").classList.add("visibilityHidden");
    document.getElementById("5wednesday").classList.add("visibilityHidden");
    document.getElementById("6wednesday").classList.add("visibilityHidden");
    document.getElementById("8wednesday").classList.add("visibilityHidden");
    document.getElementById("9wednesday").classList.add("visibilityHidden");
    document.getElementById("10wednesday").classList.add("visibilityHidden");
    document.getElementById("11wednesday").classList.add("visibilityHidden");
}
);

document.getElementById('8wednesday').addEventListener("click", (e) => {
    elementSelected = 8;
    document.getElementById("8wednesday").classList.add("popUpCardSelect");
    document.getElementById("0wednesday").classList.add("visibilityHidden");
    document.getElementById("1wednesday").classList.add("visibilityHidden");
    document.getElementById("2wednesday").classList.add("visibilityHidden");
    document.getElementById("3wednesday").classList.add("visibilityHidden");
    document.getElementById("4wednesday").classList.add("visibilityHidden");
    document.getElementById("5wednesday").classList.add("visibilityHidden");
    document.getElementById("6wednesday").classList.add("visibilityHidden");
    document.getElementById("7wednesday").classList.add("visibilityHidden");
    document.getElementById("9wednesday").classList.add("visibilityHidden");
    document.getElementById("10wednesday").classList.add("visibilityHidden");
    document.getElementById("11wednesday").classList.add("visibilityHidden");
}
);

document.getElementById('9wednesday').addEventListener("click", (e) => {
    elementSelected = 9;
    document.getElementById("9wednesday").classList.add("popUpCardSelect");
    document.getElementById("0wednesday").classList.add("visibilityHidden");
    document.getElementById("1wednesday").classList.add("visibilityHidden");
    document.getElementById("2wednesday").classList.add("visibilityHidden");
    document.getElementById("3wednesday").classList.add("visibilityHidden");
    document.getElementById("4wednesday").classList.add("visibilityHidden");
    document.getElementById("5wednesday").classList.add("visibilityHidden");
    document.getElementById("6wednesday").classList.add("visibilityHidden");
    document.getElementById("7wednesday").classList.add("visibilityHidden");
    document.getElementById("8wednesday").classList.add("visibilityHidden");
    document.getElementById("10wednesday").classList.add("visibilityHidden");
    document.getElementById("11wednesday").classList.add("visibilityHidden");
}
);

document.getElementById('10wednesday').addEventListener("click", (e) => {
    elementSelected = 10;
    document.getElementById("10wednesday").classList.add("popUpCardSelect");
    document.getElementById("0wednesday").classList.add("visibilityHidden");
    document.getElementById("1wednesday").classList.add("visibilityHidden");
    document.getElementById("2wednesday").classList.add("visibilityHidden");
    document.getElementById("3wednesday").classList.add("visibilityHidden");
    document.getElementById("4wednesday").classList.add("visibilityHidden");
    document.getElementById("5wednesday").classList.add("visibilityHidden");
    document.getElementById("6wednesday").classList.add("visibilityHidden");
    document.getElementById("7wednesday").classList.add("visibilityHidden");
    document.getElementById("8wednesday").classList.add("visibilityHidden");
    document.getElementById("9wednesday").classList.add("visibilityHidden");
    document.getElementById("11wednesday").classList.add("visibilityHidden");
}
);

document.getElementById('11wednesday').addEventListener("click", (e) => {
    elementSelected = 11;
    document.getElementById("11wednesday").classList.add("popUpCardSelect");
    document.getElementById("0wednesday").classList.add("visibilityHidden");
    document.getElementById("1wednesday").classList.add("visibilityHidden");
    document.getElementById("2wednesday").classList.add("visibilityHidden");
    document.getElementById("3wednesday").classList.add("visibilityHidden");
    document.getElementById("4wednesday").classList.add("visibilityHidden");
    document.getElementById("5wednesday").classList.add("visibilityHidden");
    document.getElementById("6wednesday").classList.add("visibilityHidden");
    document.getElementById("7wednesday").classList.add("visibilityHidden");
    document.getElementById("8wednesday").classList.add("visibilityHidden");
    document.getElementById("9wednesday").classList.add("visibilityHidden");
    document.getElementById("10wednesday").classList.add("visibilityHidden");
}
);

//------------------------------Bouton valider LUNCH wednesday-------------------------------------------------------------
document.getElementById("popUpButtonWednesday").addEventListener("click", () => {
    if (elementSelected === -1) {
        return
    }
    localStorage.setItem('wednesdayLunch', JSON.stringify(recipesArray[elementSelected]));
    console.log(localStorage);
    elementSelected = -1
    popUpWednesday.classList.add("visibilityHidden");
    main.classList.remove('visibilityHidden');
    document.getElementById("wednesdayLunch").classList.add("buttonSelected");

});

//------------------------------Bouton reset LUNCH wednesday -------------------------------------------------------------------
document.getElementById("resetButtonWednesday").addEventListener("click", () => {
    elementSelected = -1;
    removeSelectedRecipe("wednesday");
    removeVisibilityHidden("wednesday");
    document.getElementById("wednesdayLunch").classList.remove("buttonSelected");
    localStorage.removeItem("wednesdayLunch");
});

