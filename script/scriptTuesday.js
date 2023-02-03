import { addSelectedButton, removeSelectedButton, removeSelectedRecipe, removeVisibilityHidden } from "./lib/tools.js";

// Variables 
const main = document.getElementById('main');

// Variables popUp TUESDAY
const popUpTuesday = document.getElementById('popUpTuesday');
const cardContainerTuesday = document.getElementById('cardContainerTuesday');
let cardTuesday = "";

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
 const createCardLunchTuesday = (element) => {
    cardTuesday += `<a href="#" class="popUpCard flexCenter" id="${element.number}tuesday">
        <h2>${element.name}</h2>
</a>`
    cardContainerTuesday.innerHTML = cardTuesday;
}
// ---------------------------- Boucle pour crea cartes pour chaques recettes lunch (TUESDAY)---------------------------
recipesArray.forEach(element => {
    createCardLunchTuesday(element);
});

//------------------------------Ajout recettes tableau------------------------------------------------------------------

document.getElementById('0tuesday').addEventListener("click", (e) => {
    elementSelected = 0;
    document.getElementById("0tuesday").classList.add("popUpCardSelect");
    document.getElementById("1tuesday").classList.add("visibilityHidden");
    document.getElementById("2tuesday").classList.add("visibilityHidden");
    document.getElementById("3tuesday").classList.add("visibilityHidden");
    document.getElementById("4tuesday").classList.add("visibilityHidden");
    document.getElementById("5tuesday").classList.add("visibilityHidden");
    document.getElementById("6tuesday").classList.add("visibilityHidden");
    document.getElementById("7tuesday").classList.add("visibilityHidden");
    document.getElementById("8tuesday").classList.add("visibilityHidden");
    document.getElementById("9tuesday").classList.add("visibilityHidden");
    document.getElementById("10tuesday").classList.add("visibilityHidden");
    document.getElementById("11tuesday").classList.add("visibilityHidden");
}
);

document.getElementById('1tuesday').addEventListener("click", (e) => {
    elementSelected = 1;
    document.getElementById("1tuesday").classList.add("popUpCardSelect");
    document.getElementById("0tuesday").classList.add("visibilityHidden");
    document.getElementById("2tuesday").classList.add("visibilityHidden");
    document.getElementById("3tuesday").classList.add("visibilityHidden");
    document.getElementById("4tuesday").classList.add("visibilityHidden");
    document.getElementById("5tuesday").classList.add("visibilityHidden");
    document.getElementById("6tuesday").classList.add("visibilityHidden");
    document.getElementById("7tuesday").classList.add("visibilityHidden");
    document.getElementById("8tuesday").classList.add("visibilityHidden");
    document.getElementById("9tuesday").classList.add("visibilityHidden");
    document.getElementById("10tuesday").classList.add("visibilityHidden");
    document.getElementById("11tuesday").classList.add("visibilityHidden");
}
);

document.getElementById('2tuesday').addEventListener("click", (e) => {
    elementSelected = 2;
    document.getElementById("2tuesday").classList.add("popUpCardSelect");
    document.getElementById("0tuesday").classList.add("visibilityHidden");
    document.getElementById("1tuesday").classList.add("visibilityHidden");
    document.getElementById("3tuesday").classList.add("visibilityHidden");
    document.getElementById("4tuesday").classList.add("visibilityHidden");
    document.getElementById("5tuesday").classList.add("visibilityHidden");
    document.getElementById("6tuesday").classList.add("visibilityHidden");
    document.getElementById("7tuesday").classList.add("visibilityHidden");
    document.getElementById("8tuesday").classList.add("visibilityHidden");
    document.getElementById("9tuesday").classList.add("visibilityHidden");
    document.getElementById("10tuesday").classList.add("visibilityHidden");
    document.getElementById("11tuesday").classList.add("visibilityHidden");
}
);

document.getElementById('3tuesday').addEventListener("click", (e) => {
    elementSelected = 3;
    document.getElementById("3tuesday").classList.add("popUpCardSelect");
    document.getElementById("0tuesday").classList.add("visibilityHidden");
    document.getElementById("1tuesday").classList.add("visibilityHidden");
    document.getElementById("2tuesday").classList.add("visibilityHidden");
    document.getElementById("4tuesday").classList.add("visibilityHidden");
    document.getElementById("5tuesday").classList.add("visibilityHidden");
    document.getElementById("6tuesday").classList.add("visibilityHidden");
    document.getElementById("7tuesday").classList.add("visibilityHidden");
    document.getElementById("8tuesday").classList.add("visibilityHidden");
    document.getElementById("9tuesday").classList.add("visibilityHidden");
    document.getElementById("10tuesday").classList.add("visibilityHidden");
    document.getElementById("11tuesday").classList.add("visibilityHidden");
}
);

document.getElementById('4tuesday').addEventListener("click", (e) => {
    elementSelected = 4;
    document.getElementById("4tuesday").classList.add("popUpCardSelect");
    document.getElementById("0tuesday").classList.add("visibilityHidden");
    document.getElementById("1tuesday").classList.add("visibilityHidden");
    document.getElementById("2tuesday").classList.add("visibilityHidden");
    document.getElementById("3tuesday").classList.add("visibilityHidden");
    document.getElementById("5tuesday").classList.add("visibilityHidden");
    document.getElementById("6tuesday").classList.add("visibilityHidden");
    document.getElementById("7tuesday").classList.add("visibilityHidden");
    document.getElementById("8tuesday").classList.add("visibilityHidden");
    document.getElementById("9tuesday").classList.add("visibilityHidden");
    document.getElementById("10tuesday").classList.add("visibilityHidden");
    document.getElementById("11tuesday").classList.add("visibilityHidden");
}
);

document.getElementById('5tuesday').addEventListener("click", (e) => {
    elementSelected = 5;
    document.getElementById("5tuesday").classList.add("popUpCardSelect");
    document.getElementById("0tuesday").classList.add("visibilityHidden");
    document.getElementById("1tuesday").classList.add("visibilityHidden");
    document.getElementById("2tuesday").classList.add("visibilityHidden");
    document.getElementById("3tuesday").classList.add("visibilityHidden");
    document.getElementById("4tuesday").classList.add("visibilityHidden");
    document.getElementById("6tuesday").classList.add("visibilityHidden");
    document.getElementById("7tuesday").classList.add("visibilityHidden");
    document.getElementById("8tuesday").classList.add("visibilityHidden");
    document.getElementById("9tuesday").classList.add("visibilityHidden");
    document.getElementById("10tuesday").classList.add("visibilityHidden");
    document.getElementById("11tuesday").classList.add("visibilityHidden");
}
);

document.getElementById('6tuesday').addEventListener("click", (e) => {
    elementSelected = 6;
    document.getElementById("6tuesday").classList.add("popUpCardSelect");
    document.getElementById("0tuesday").classList.add("visibilityHidden");
    document.getElementById("1tuesday").classList.add("visibilityHidden");
    document.getElementById("2tuesday").classList.add("visibilityHidden");
    document.getElementById("3tuesday").classList.add("visibilityHidden");
    document.getElementById("4tuesday").classList.add("visibilityHidden");
    document.getElementById("5tuesday").classList.add("visibilityHidden");
    document.getElementById("7tuesday").classList.add("visibilityHidden");
    document.getElementById("8tuesday").classList.add("visibilityHidden");
    document.getElementById("9tuesday").classList.add("visibilityHidden");
    document.getElementById("10tuesday").classList.add("visibilityHidden");
    document.getElementById("11tuesday").classList.add("visibilityHidden");
}
);

document.getElementById('7tuesday').addEventListener("click", (e) => {
    elementSelected = 7;
    document.getElementById("7tuesday").classList.add("popUpCardSelect");
    document.getElementById("0tuesday").classList.add("visibilityHidden");
    document.getElementById("1tuesday").classList.add("visibilityHidden");
    document.getElementById("2tuesday").classList.add("visibilityHidden");
    document.getElementById("3tuesday").classList.add("visibilityHidden");
    document.getElementById("4tuesday").classList.add("visibilityHidden");
    document.getElementById("5tuesday").classList.add("visibilityHidden");
    document.getElementById("6tuesday").classList.add("visibilityHidden");
    document.getElementById("8tuesday").classList.add("visibilityHidden");
    document.getElementById("9tuesday").classList.add("visibilityHidden");
    document.getElementById("10tuesday").classList.add("visibilityHidden");
    document.getElementById("11tuesday").classList.add("visibilityHidden");
}
);

document.getElementById('8tuesday').addEventListener("click", (e) => {
    elementSelected = 8;
    document.getElementById("8tuesday").classList.add("popUpCardSelect");
    document.getElementById("0tuesday").classList.add("visibilityHidden");
    document.getElementById("1tuesday").classList.add("visibilityHidden");
    document.getElementById("2tuesday").classList.add("visibilityHidden");
    document.getElementById("3tuesday").classList.add("visibilityHidden");
    document.getElementById("4tuesday").classList.add("visibilityHidden");
    document.getElementById("5tuesday").classList.add("visibilityHidden");
    document.getElementById("6tuesday").classList.add("visibilityHidden");
    document.getElementById("7tuesday").classList.add("visibilityHidden");
    document.getElementById("9tuesday").classList.add("visibilityHidden");
    document.getElementById("10tuesday").classList.add("visibilityHidden");
    document.getElementById("11tuesday").classList.add("visibilityHidden");
}
);

document.getElementById('9tuesday').addEventListener("click", (e) => {
    elementSelected = 9;
    document.getElementById("9tuesday").classList.add("popUpCardSelect");
    document.getElementById("0tuesday").classList.add("visibilityHidden");
    document.getElementById("1tuesday").classList.add("visibilityHidden");
    document.getElementById("2tuesday").classList.add("visibilityHidden");
    document.getElementById("3tuesday").classList.add("visibilityHidden");
    document.getElementById("4tuesday").classList.add("visibilityHidden");
    document.getElementById("5tuesday").classList.add("visibilityHidden");
    document.getElementById("6tuesday").classList.add("visibilityHidden");
    document.getElementById("7tuesday").classList.add("visibilityHidden");
    document.getElementById("8tuesday").classList.add("visibilityHidden");
    document.getElementById("10tuesday").classList.add("visibilityHidden");
    document.getElementById("11tuesday").classList.add("visibilityHidden");
}
);

document.getElementById('10tuesday').addEventListener("click", (e) => {
    elementSelected = 10;
    document.getElementById("10tuesday").classList.add("popUpCardSelect");
    document.getElementById("0tuesday").classList.add("visibilityHidden");
    document.getElementById("1tuesday").classList.add("visibilityHidden");
    document.getElementById("2tuesday").classList.add("visibilityHidden");
    document.getElementById("3tuesday").classList.add("visibilityHidden");
    document.getElementById("4tuesday").classList.add("visibilityHidden");
    document.getElementById("5tuesday").classList.add("visibilityHidden");
    document.getElementById("6tuesday").classList.add("visibilityHidden");
    document.getElementById("7tuesday").classList.add("visibilityHidden");
    document.getElementById("8tuesday").classList.add("visibilityHidden");
    document.getElementById("9tuesday").classList.add("visibilityHidden");
    document.getElementById("11tuesday").classList.add("visibilityHidden");
}
);

document.getElementById('11tuesday').addEventListener("click", (e) => {
    elementSelected = 11;
    document.getElementById("11tuesday").classList.add("popUpCardSelect");
    document.getElementById("0tuesday").classList.add("visibilityHidden");
    document.getElementById("1tuesday").classList.add("visibilityHidden");
    document.getElementById("2tuesday").classList.add("visibilityHidden");
    document.getElementById("3tuesday").classList.add("visibilityHidden");
    document.getElementById("4tuesday").classList.add("visibilityHidden");
    document.getElementById("5tuesday").classList.add("visibilityHidden");
    document.getElementById("6tuesday").classList.add("visibilityHidden");
    document.getElementById("7tuesday").classList.add("visibilityHidden");
    document.getElementById("8tuesday").classList.add("visibilityHidden");
    document.getElementById("9tuesday").classList.add("visibilityHidden");
    document.getElementById("10tuesday").classList.add("visibilityHidden");
}
);

//------------------------------Bouton valider LUNCH TUESDAY-------------------------------------------------------------
document.getElementById("popUpButtonTuesday").addEventListener("click", () => {
    if (elementSelected === -1) {
        return
    }
    localStorage.setItem('tuesdayLunch', JSON.stringify(recipesArray[elementSelected]));
    console.log(localStorage);
    elementSelected = -1
    popUpTuesday.classList.add("visibilityHidden");
    main.classList.remove('visibilityHidden');
    document.getElementById("tuesdayLunch").classList.add("buttonSelected");

});

//------------------------------Bouton reset LUNCH TUESDAY -------------------------------------------------------------------
document.getElementById("resetButtonTuesday").addEventListener("click", () => {
    elementSelected = -1;
    removeSelectedRecipe("tuesday");
    removeVisibilityHidden("tuesday");
    document.getElementById("tuesdayLunch").classList.remove("buttonSelected");
    localStorage.removeItem("tuesdayLunch");
});

