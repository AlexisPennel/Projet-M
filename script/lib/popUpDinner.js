const recipesArray = [];
let popUp = "";
let cardDinner = "";

class recipe {
    constructor(number, name, ingredients) {
        this.number = number;
        this.name = name;
        this.ingredients = ingredients;
    }
};

// Recettes
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
    recipesArray.push(new recipe("12", "Libre", ["Libre"]));

// Fonction apparition PopUp
const createPopUpDinner= (element) => {
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
    popUp ="";

    // ********************** Fonction creation cartes PopUp BREAKFAST
    const createCardDinner = (element) => {
        cardDinner += `<a href="#" class="popUpCard flexCenter" id="${element.number}">
            <h2>${element.name}</h2>
    </a>`
        document.getElementById('cardContainer').innerHTML = cardDinner;

    }
    // ********************* Boucle pour crea cartes pour chaques recettes (BREAKFAST)
    recipesArray.forEach(element => {
        createCardDinner(element);
    });
    cardDinner = "";
};

const DinnerSelected0 = () => {
    document.getElementById("0").classList.add("popUpCardSelect");
    document.getElementById("1").classList.add("visibilityHidden");
    document.getElementById("2").classList.add("visibilityHidden");
    document.getElementById("3").classList.add("visibilityHidden");
    document.getElementById("4").classList.add("visibilityHidden");
    document.getElementById("5").classList.add("visibilityHidden");
    document.getElementById("6").classList.add("visibilityHidden");
    document.getElementById("7").classList.add("visibilityHidden");
    document.getElementById("8").classList.add("visibilityHidden");
    document.getElementById("9").classList.add("visibilityHidden");
    document.getElementById("10").classList.add("visibilityHidden");
    document.getElementById("11").classList.add("visibilityHidden");
    document.getElementById("12").classList.add("visibilityHidden");
};

const DinnerSelected1 = () => {
    document.getElementById("1").classList.add("popUpCardSelect");
    document.getElementById("0").classList.add("visibilityHidden");
    document.getElementById("2").classList.add("visibilityHidden");
    document.getElementById("3").classList.add("visibilityHidden");
    document.getElementById("4").classList.add("visibilityHidden");
    document.getElementById("5").classList.add("visibilityHidden");
    document.getElementById("6").classList.add("visibilityHidden");
    document.getElementById("7").classList.add("visibilityHidden");
    document.getElementById("8").classList.add("visibilityHidden");
    document.getElementById("9").classList.add("visibilityHidden");
    document.getElementById("10").classList.add("visibilityHidden");
    document.getElementById("11").classList.add("visibilityHidden");
    document.getElementById("12").classList.add("visibilityHidden");
};

const DinnerSelected2 = () => {
    document.getElementById("2").classList.add("popUpCardSelect");
    document.getElementById("1").classList.add("visibilityHidden");
    document.getElementById("0").classList.add("visibilityHidden");
    document.getElementById("3").classList.add("visibilityHidden");
    document.getElementById("4").classList.add("visibilityHidden");
    document.getElementById("5").classList.add("visibilityHidden");
    document.getElementById("6").classList.add("visibilityHidden");
    document.getElementById("7").classList.add("visibilityHidden");
    document.getElementById("8").classList.add("visibilityHidden");
    document.getElementById("9").classList.add("visibilityHidden");
    document.getElementById("10").classList.add("visibilityHidden");
    document.getElementById("11").classList.add("visibilityHidden");
    document.getElementById("12").classList.add("visibilityHidden");
};

const DinnerSelected3 = () => {
    document.getElementById("3").classList.add("popUpCardSelect");
    document.getElementById("1").classList.add("visibilityHidden");
    document.getElementById("2").classList.add("visibilityHidden");
    document.getElementById("0").classList.add("visibilityHidden");
    document.getElementById("4").classList.add("visibilityHidden");
    document.getElementById("5").classList.add("visibilityHidden");
    document.getElementById("6").classList.add("visibilityHidden");
    document.getElementById("7").classList.add("visibilityHidden");
    document.getElementById("8").classList.add("visibilityHidden");
    document.getElementById("9").classList.add("visibilityHidden");
    document.getElementById("10").classList.add("visibilityHidden");
    document.getElementById("11").classList.add("visibilityHidden");
    document.getElementById("12").classList.add("visibilityHidden");
};

const DinnerSelected4 = () => {
    document.getElementById("4").classList.add("popUpCardSelect");
    document.getElementById("1").classList.add("visibilityHidden");
    document.getElementById("2").classList.add("visibilityHidden");
    document.getElementById("3").classList.add("visibilityHidden");
    document.getElementById("0").classList.add("visibilityHidden");
    document.getElementById("5").classList.add("visibilityHidden");
    document.getElementById("6").classList.add("visibilityHidden");
    document.getElementById("7").classList.add("visibilityHidden");
    document.getElementById("8").classList.add("visibilityHidden");
    document.getElementById("9").classList.add("visibilityHidden");
    document.getElementById("10").classList.add("visibilityHidden");
    document.getElementById("11").classList.add("visibilityHidden");
    document.getElementById("12").classList.add("visibilityHidden");
};

const DinnerSelected5 = () => {
    document.getElementById("5").classList.add("popUpCardSelect");
    document.getElementById("1").classList.add("visibilityHidden");
    document.getElementById("2").classList.add("visibilityHidden");
    document.getElementById("3").classList.add("visibilityHidden");
    document.getElementById("4").classList.add("visibilityHidden");
    document.getElementById("0").classList.add("visibilityHidden");
    document.getElementById("6").classList.add("visibilityHidden");
    document.getElementById("7").classList.add("visibilityHidden");
    document.getElementById("8").classList.add("visibilityHidden");
    document.getElementById("9").classList.add("visibilityHidden");
    document.getElementById("10").classList.add("visibilityHidden");
    document.getElementById("11").classList.add("visibilityHidden");
    document.getElementById("12").classList.add("visibilityHidden");
};

const DinnerSelected6 = () => {
    document.getElementById("6").classList.add("popUpCardSelect");
    document.getElementById("1").classList.add("visibilityHidden");
    document.getElementById("2").classList.add("visibilityHidden");
    document.getElementById("3").classList.add("visibilityHidden");
    document.getElementById("4").classList.add("visibilityHidden");
    document.getElementById("5").classList.add("visibilityHidden");
    document.getElementById("0").classList.add("visibilityHidden");
    document.getElementById("7").classList.add("visibilityHidden");
    document.getElementById("8").classList.add("visibilityHidden");
    document.getElementById("9").classList.add("visibilityHidden");
    document.getElementById("10").classList.add("visibilityHidden");
    document.getElementById("11").classList.add("visibilityHidden");
    document.getElementById("12").classList.add("visibilityHidden");
};

const DinnerSelected7 = () => {
    document.getElementById("7").classList.add("popUpCardSelect");
    document.getElementById("1").classList.add("visibilityHidden");
    document.getElementById("2").classList.add("visibilityHidden");
    document.getElementById("3").classList.add("visibilityHidden");
    document.getElementById("4").classList.add("visibilityHidden");
    document.getElementById("5").classList.add("visibilityHidden");
    document.getElementById("6").classList.add("visibilityHidden");
    document.getElementById("0").classList.add("visibilityHidden");
    document.getElementById("8").classList.add("visibilityHidden");
    document.getElementById("9").classList.add("visibilityHidden");
    document.getElementById("10").classList.add("visibilityHidden");
    document.getElementById("11").classList.add("visibilityHidden");
    document.getElementById("12").classList.add("visibilityHidden");
};

const DinnerSelected8 = () => {
    document.getElementById("8").classList.add("popUpCardSelect");
    document.getElementById("1").classList.add("visibilityHidden");
    document.getElementById("2").classList.add("visibilityHidden");
    document.getElementById("3").classList.add("visibilityHidden");
    document.getElementById("4").classList.add("visibilityHidden");
    document.getElementById("5").classList.add("visibilityHidden");
    document.getElementById("6").classList.add("visibilityHidden");
    document.getElementById("7").classList.add("visibilityHidden");
    document.getElementById("0").classList.add("visibilityHidden");
    document.getElementById("9").classList.add("visibilityHidden");
    document.getElementById("10").classList.add("visibilityHidden");
    document.getElementById("11").classList.add("visibilityHidden");
    document.getElementById("12").classList.add("visibilityHidden");
};

const DinnerSelected9 = () => {
    document.getElementById("9").classList.add("popUpCardSelect");
    document.getElementById("1").classList.add("visibilityHidden");
    document.getElementById("2").classList.add("visibilityHidden");
    document.getElementById("3").classList.add("visibilityHidden");
    document.getElementById("4").classList.add("visibilityHidden");
    document.getElementById("5").classList.add("visibilityHidden");
    document.getElementById("6").classList.add("visibilityHidden");
    document.getElementById("7").classList.add("visibilityHidden");
    document.getElementById("8").classList.add("visibilityHidden");
    document.getElementById("0").classList.add("visibilityHidden");
    document.getElementById("10").classList.add("visibilityHidden");
    document.getElementById("11").classList.add("visibilityHidden");
    document.getElementById("12").classList.add("visibilityHidden");
};

const DinnerSelected10 = () => {
    document.getElementById("10").classList.add("popUpCardSelect");
    document.getElementById("1").classList.add("visibilityHidden");
    document.getElementById("2").classList.add("visibilityHidden");
    document.getElementById("3").classList.add("visibilityHidden");
    document.getElementById("4").classList.add("visibilityHidden");
    document.getElementById("5").classList.add("visibilityHidden");
    document.getElementById("6").classList.add("visibilityHidden");
    document.getElementById("7").classList.add("visibilityHidden");
    document.getElementById("8").classList.add("visibilityHidden");
    document.getElementById("9").classList.add("visibilityHidden");
    document.getElementById("0").classList.add("visibilityHidden");
    document.getElementById("11").classList.add("visibilityHidden");
    document.getElementById("12").classList.add("visibilityHidden");
};

const DinnerSelected11 = () => {
    document.getElementById("11").classList.add("popUpCardSelect");
    document.getElementById("1").classList.add("visibilityHidden");
    document.getElementById("2").classList.add("visibilityHidden");
    document.getElementById("3").classList.add("visibilityHidden");
    document.getElementById("4").classList.add("visibilityHidden");
    document.getElementById("5").classList.add("visibilityHidden");
    document.getElementById("6").classList.add("visibilityHidden");
    document.getElementById("7").classList.add("visibilityHidden");
    document.getElementById("8").classList.add("visibilityHidden");
    document.getElementById("9").classList.add("visibilityHidden");
    document.getElementById("10").classList.add("visibilityHidden");
    document.getElementById("0").classList.add("visibilityHidden");
    document.getElementById("12").classList.add("visibilityHidden");
};

const DinnerSelected12 = () => {
    document.getElementById("12").classList.add("popUpCardSelect");
    document.getElementById("1").classList.add("visibilityHidden");
    document.getElementById("2").classList.add("visibilityHidden");
    document.getElementById("3").classList.add("visibilityHidden");
    document.getElementById("4").classList.add("visibilityHidden");
    document.getElementById("5").classList.add("visibilityHidden");
    document.getElementById("6").classList.add("visibilityHidden");
    document.getElementById("7").classList.add("visibilityHidden");
    document.getElementById("8").classList.add("visibilityHidden");
    document.getElementById("9").classList.add("visibilityHidden");
    document.getElementById("10").classList.add("visibilityHidden");
    document.getElementById("0").classList.add("visibilityHidden");
    document.getElementById("11").classList.add("visibilityHidden");
};

export { createPopUpDinner, DinnerSelected0, DinnerSelected1, DinnerSelected2, DinnerSelected3, DinnerSelected4, DinnerSelected5, DinnerSelected6, DinnerSelected7, DinnerSelected8, DinnerSelected9, DinnerSelected10, DinnerSelected11, DinnerSelected12 };