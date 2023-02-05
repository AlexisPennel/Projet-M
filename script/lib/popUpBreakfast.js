const breakfastRecipesArray = [];
let popUp = "";
let cardBreakfast = "";

class recipe {
    constructor(number, name, ingredients) {
        this.number = number;
        this.name = name;
        this.ingredients = ingredients;
    }
};

// Recette "breakfast"
breakfastRecipesArray.push(new recipe("B0", "Huevo", ["Huevos", "Cebolla", "Tomates", "Pan"]));
breakfastRecipesArray.push(new recipe("B1", "Sandwich de atun", ["Atun", "Pan", "Aguacate", "Lechuga", "Cebolla"]));
breakfastRecipesArray.push(new recipe("B2", "Sandwich de jamon y queso", ["Jamon", "Queso oaxaca", "Lechuga", "Pan", "Cebolla"]));
breakfastRecipesArray.push(new recipe("B3", "Sandwich de pollo", ["Pechuga de pollo", "Cebolla", "Queso oaxaca", "Pan"]));
breakfastRecipesArray.push(new recipe("B4", "Burritas", ["Tortillas", "Jamon", "Queso oaxaca", "Media crema", "Salsa verde"]));
breakfastRecipesArray.push(new recipe("B5", "Avena con leche y fruta", ["Avena", "Leche", "Fruta", "Canela"]));
breakfastRecipesArray.push(new recipe("B6", "Libre", ["Libre"]));

// Fonction apparition PopUp
const createPopUpBreakfast = (element) => {
    popUp += `<div class="popUp flexCenterC" id="popUpCard">
    <div class="flexCenter popUpTitle">
        <a href="#" class="returnArrow" id="return">
            <i class="fa-solid fa-arrow-left"></i>
        </a>
        <h1>Select one <br>and validate</h1>
    </div>

    <div id="cardContainer" class="cardContainer flexCenterC">
    </div>

    <div class="buttons__container flexCenter">
        <button id="popUpButtonValidate">Validate</button>
    </div>
</div>`
    element.innerHTML = popUp;
    popUp = "";

    // ********************** Fonction creation cartes PopUp BREAKFAST
    const createCardBreakfast = (element) => {
        cardBreakfast += `<a href="#" class="popUpCard flexCenter" id="${element.number}">
            <h2>${element.name}</h2>
    </a>`
        document.getElementById('cardContainer').innerHTML = cardBreakfast;
        
    }
    // ********************* Boucle pour crea cartes pour chaques recettes (BREAKFAST)
    breakfastRecipesArray.forEach(element => {
        createCardBreakfast(element);
    });
    cardBreakfast = "";
};

const BreakfastSelected0 = () => {
    document.getElementById("B0").classList.add("popUpCardSelect");
    document.getElementById("B1").classList.add("visibilityHidden");
    document.getElementById("B2").classList.add("visibilityHidden");
    document.getElementById("B3").classList.add("visibilityHidden");
    document.getElementById("B4").classList.add("visibilityHidden");
    document.getElementById("B5").classList.add("visibilityHidden");
    document.getElementById("B6").classList.add("visibilityHidden");
};

const BreakfastSelected1 = () => {
    document.getElementById("B1").classList.add("popUpCardSelect");
    document.getElementById("B0").classList.add("visibilityHidden");
    document.getElementById("B2").classList.add("visibilityHidden");
    document.getElementById("B3").classList.add("visibilityHidden");
    document.getElementById("B4").classList.add("visibilityHidden");
    document.getElementById("B5").classList.add("visibilityHidden");
    document.getElementById("B6").classList.add("visibilityHidden");
};

const BreakfastSelected2 = () => {
    document.getElementById("B2").classList.add("popUpCardSelect");
    document.getElementById("B0").classList.add("visibilityHidden");
    document.getElementById("B1").classList.add("visibilityHidden");
    document.getElementById("B3").classList.add("visibilityHidden");
    document.getElementById("B4").classList.add("visibilityHidden");
    document.getElementById("B5").classList.add("visibilityHidden");
    document.getElementById("B6").classList.add("visibilityHidden");
};

const BreakfastSelected3 = () => {
    document.getElementById("B3").classList.add("popUpCardSelect");
    document.getElementById("B0").classList.add("visibilityHidden");
    document.getElementById("B1").classList.add("visibilityHidden");
    document.getElementById("B2").classList.add("visibilityHidden");
    document.getElementById("B4").classList.add("visibilityHidden");
    document.getElementById("B5").classList.add("visibilityHidden");
    document.getElementById("B6").classList.add("visibilityHidden");
};

const BreakfastSelected4 = () => {
    document.getElementById("B4").classList.add("popUpCardSelect");
    document.getElementById("B0").classList.add("visibilityHidden");
    document.getElementById("B1").classList.add("visibilityHidden");
    document.getElementById("B2").classList.add("visibilityHidden");
    document.getElementById("B3").classList.add("visibilityHidden");
    document.getElementById("B5").classList.add("visibilityHidden");
    document.getElementById("B6").classList.add("visibilityHidden");
};

const BreakfastSelected5 = () => {
    document.getElementById("B5").classList.add("popUpCardSelect");
    document.getElementById("B0").classList.add("visibilityHidden");
    document.getElementById("B1").classList.add("visibilityHidden");
    document.getElementById("B2").classList.add("visibilityHidden");
    document.getElementById("B4").classList.add("visibilityHidden");
    document.getElementById("B3").classList.add("visibilityHidden");
    document.getElementById("B6").classList.add("visibilityHidden");
};

const BreakfastSelected6 = () => {
    document.getElementById("B6").classList.add("popUpCardSelect");
    document.getElementById("B0").classList.add("visibilityHidden");
    document.getElementById("B1").classList.add("visibilityHidden");
    document.getElementById("B2").classList.add("visibilityHidden");
    document.getElementById("B3").classList.add("visibilityHidden");
    document.getElementById("B4").classList.add("visibilityHidden");
    document.getElementById("B5").classList.add("visibilityHidden");
};


export { createPopUpBreakfast, BreakfastSelected0, BreakfastSelected1, BreakfastSelected2, BreakfastSelected3, BreakfastSelected4, BreakfastSelected5, BreakfastSelected6 };