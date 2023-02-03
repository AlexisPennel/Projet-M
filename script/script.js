import { addSelectedButton, removeSelectedButton, removeSelectedRecipe, removeVisibilityHidden } from "./lib/tools_Lunch.js";
import { removeSelectedRecipeB } from "./lib/tools_Breakfast.js";

const main = () => {
    // Variables 
    const main = document.getElementById('main');

    // Variables popUp MONDAY 
    const cardContainerMonday = document.getElementById('cardContainerMonday')
    const popUpMonday = document.getElementById('popUpMonday');
    const popUpMondayB = document.getElementById('popUpMondayB');
    let cardMondayB = "";
    let cardMonday = "";

    // Variable Tableau de recettes
    const recipesArray = [];
    const breakfastRecipesArray = [];
    // Variable element select
    let elementSelected = -1;
    let elementSelectedB = -1;


    // Bouton "new plan"
    document.getElementById("newPlan").addEventListener("click", () => {
        localStorage.clear();
        console.log(localStorage)
        removeSelectedButton();
    });

    // Apparition popUp "Breakfast" 
    document.getElementById("mondayBreakfast").addEventListener("click", () => {
        setTimeout(() => {
            main.classList.add('visibilityHidden');
            popUpMondayB.classList.remove('visibilityHidden');
        }, 400)
    });

    document.getElementById("tuesdayBreakfast").addEventListener("click", () => {
        setTimeout(() => {
            main.classList.add('visibilityHidden');
            popUpTuesday.classList.remove('visibilityHidden');
        }, 400)
    });

    document.getElementById("wednesdayBreakfast").addEventListener("click", () => {
        setTimeout(() => {
            main.classList.add('visibilityHidden');
            popUpWednesday.classList.remove('visibilityHidden');
        }, 400)
    });

    document.getElementById("thursdayBreakfast").addEventListener("click", () => {
        setTimeout(() => {
            main.classList.add('visibilityHidden');
            popUpThursday.classList.remove('visibilityHidden');
        }, 400)
    });

    document.getElementById("fridayBreakfast").addEventListener("click", () => {
        setTimeout(() => {
            main.classList.add('visibilityHidden');
            popUpFriday.classList.remove('visibilityHidden');
        }, 400)
    });

    document.getElementById("saturdayBreakfast").addEventListener("click", () => {
        setTimeout(() => {
            main.classList.add('visibilityHidden');
            popUpSaturday.classList.remove('visibilityHidden');
        }, 400)
    });

    document.getElementById("sundayBreakfast").addEventListener("click", () => {
        setTimeout(() => {
            main.classList.add('visibilityHidden');
            popUpSunday.classList.remove('visibilityHidden');
        }, 400)
    });

    // Apparition popUp "Lunch" par jour de la semaine  
    document.getElementById("mondayLunch").addEventListener("click", () => {
        setTimeout(() => {
            main.classList.add('visibilityHidden');
            popUpMonday.classList.remove('visibilityHidden');
        }, 400)
    });

    document.getElementById("tuesdayLunch").addEventListener("click", () => {
        setTimeout(() => {
            main.classList.add('visibilityHidden');
            popUpTuesday.classList.remove('visibilityHidden');
        }, 400)
    });

    document.getElementById("wednesdayLunch").addEventListener("click", () => {
        setTimeout(() => {
            main.classList.add('visibilityHidden');
            popUpWednesday.classList.remove('visibilityHidden');
        }, 400)
    });

    document.getElementById("thursdayLunch").addEventListener("click", () => {
        setTimeout(() => {
            main.classList.add('visibilityHidden');
            popUpThursday.classList.remove('visibilityHidden');
        }, 400)
    });

    document.getElementById("fridayLunch").addEventListener("click", () => {
        setTimeout(() => {
            main.classList.add('visibilityHidden');
            popUpFriday.classList.remove('visibilityHidden');
        }, 400)
    });

    document.getElementById("saturdayLunch").addEventListener("click", () => {
        setTimeout(() => {
            main.classList.add('visibilityHidden');
            popUpSaturday.classList.remove('visibilityHidden');
        }, 400)
    });

    document.getElementById("sundayLunch").addEventListener("click", () => {
        setTimeout(() => {
            main.classList.add('visibilityHidden');
            popUpSunday.classList.remove('visibilityHidden');
        }, 400)
    });

    //*************************Bouton return 
    document.addEventListener("click", (e) => {
        if (e.target.className === "fa-solid fa-arrow-left") {
            popUpMondayB.classList.add('visibilityHidden');
            popUpMonday.classList.add("visibilityHidden");
            popUpTuesday.classList.add("visibilityHidden");
            popUpWednesday.classList.add("visibilityHidden");
            popUpThursday.classList.add("visibilityHidden");
            // popUpFriday.classList.add("visibilityHidden");
            // popUpSaturdayclassList.add("visibilityHidden");
            // popUpSunday.classList.add("visibilityHidden");            
            main.classList.remove('visibilityHidden');
        }
    });

    //Recettes 

    //*********************** Classe recettes 
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

    // Recettes "Lunch and Dinner" 
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


// Apparition cartes plats PopUp MONDAY BREAKFAST

    //********************** Fonction creation cartes PopUp MONDAY BREAKFAST
    const createCardLunchMondayB = (element) => {
        cardMondayB += `<a href="#" class="popUpCard flexCenter" id="${element.number}">
            <h2>${element.name}</h2>
    </a>`
        cardContainerMondayB.innerHTML = cardMondayB;
    }
    // ********************* Boucle pour crea cartes pour chaques recettes (BREAKFAST)
    breakfastRecipesArray.forEach(element => {
        createCardLunchMondayB(element);
    });

    document.getElementById('B0').addEventListener("click", (e) => {
        elementSelectedB = 0;
        document.getElementById("B0").classList.add("popUpCardSelect");
        document.getElementById("B1").classList.add("visibilityHidden");
        document.getElementById("2B").classList.add("visibilityHidden");
        document.getElementById("B3").classList.add("visibilityHidden");
        document.getElementById("B4").classList.add("visibilityHidden");
        document.getElementById("B5").classList.add("visibilityHidden");
        document.getElementById("B6").classList.add("visibilityHidden");
    });

    document.getElementById('B1').addEventListener("click", (e) => {
        elementSelectedB = 1;
        document.getElementById("B1").classList.add("popUpCardSelect");
        document.getElementById("B0").classList.add("visibilityHidden");
        document.getElementById("B2").classList.add("visibilityHidden");
        document.getElementById("B3").classList.add("visibilityHidden");
        document.getElementById("B4").classList.add("visibilityHidden");
        document.getElementById("B5").classList.add("visibilityHidden");
        document.getElementById("B6").classList.add("visibilityHidden");
    });

    document.getElementById('B2').addEventListener("click", (e) => {
        elementSelectedB = 2;
        document.getElementById("B2").classList.add("popUpCardSelect");
        document.getElementById("B1").classList.add("visibilityHidden");
        document.getElementById("B0").classList.add("visibilityHidden");
        document.getElementById("B3").classList.add("visibilityHidden");
        document.getElementById("B4").classList.add("visibilityHidden");
        document.getElementById("B5").classList.add("visibilityHidden");
        document.getElementById("B6").classList.add("visibilityHidden");
    });

    document.getElementById('B3').addEventListener("click", (e) => {
        elementSelectedB = 3;
        document.getElementById("B3").classList.add("popUpCardSelect");
        document.getElementById("B1").classList.add("visibilityHidden");
        document.getElementById("B2").classList.add("visibilityHidden");
        document.getElementById("B0").classList.add("visibilityHidden");
        document.getElementById("B4").classList.add("visibilityHidden");
        document.getElementById("B5").classList.add("visibilityHidden");
        document.getElementById("B6").classList.add("visibilityHidden");
    });

    document.getElementById('B4').addEventListener("click", (e) => {
        elementSelectedB = 4;
        document.getElementById("B4").classList.add("popUpCardSelect");
        document.getElementById("B1").classList.add("visibilityHidden");
        document.getElementById("B2").classList.add("visibilityHidden");
        document.getElementById("B3").classList.add("visibilityHidden");
        document.getElementById("B0").classList.add("visibilityHidden");
        document.getElementById("B5").classList.add("visibilityHidden");
        document.getElementById("B6").classList.add("visibilityHidden");
    });

    document.getElementById('B5').addEventListener("click", (e) => {
        elementSelectedB = 5;
        document.getElementById("B5").classList.add("popUpCardSelect");
        document.getElementById("B1").classList.add("visibilityHidden");
        document.getElementById("B2").classList.add("visibilityHidden");
        document.getElementById("B3").classList.add("visibilityHidden");
        document.getElementById("B4").classList.add("visibilityHidden");
        document.getElementById("B0").classList.add("visibilityHidden");
        document.getElementById("B6").classList.add("visibilityHidden");
    });

    //************************ Bouton reset BREAKFAST MONDAY 
    document.getElementById("resetButtonMondayB").addEventListener("click", () => {
        elementSelectedB = -1;
        removeSelectedRecipeB();
        removeVisibilityHidden();
        removeSelectedButton("monday");
        localStorage.removeItem("mondayLunch");
    });











    // Apparition cartes plats PopUp MONDAY LUNCH

    //********************** Fonction creation cartes PopUp MONDAY
    const createCardLunchMonday = (element) => {
        cardMonday += `<a href="#" class="popUpCard flexCenter" id="${element.number}">
            <h2>${element.name}</h2>
    </a>`
        cardContainerMonday.innerHTML = cardMonday;
    }
    // ********************* Boucle pour crea cartes pour chaques recettes (lunch)
    recipesArray.forEach(element => {
        createCardLunchMonday(element);
    });

    // Evenement cartes Lunch Monday 
    document.getElementById('0').addEventListener("click", (e) => {
        elementSelected = 0;
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
    }
    );

    document.getElementById('1').addEventListener("click", (e) => {
        elementSelected = 1;
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
    }
    );

    document.getElementById('2').addEventListener("click", (e) => {
        elementSelected = 2;
        document.getElementById("2").classList.add("popUpCardSelect");
        document.getElementById("0").classList.add("visibilityHidden");
        document.getElementById("1").classList.add("visibilityHidden");
        document.getElementById("3").classList.add("visibilityHidden");
        document.getElementById("4").classList.add("visibilityHidden");
        document.getElementById("5").classList.add("visibilityHidden");
        document.getElementById("6").classList.add("visibilityHidden");
        document.getElementById("7").classList.add("visibilityHidden");
        document.getElementById("8").classList.add("visibilityHidden");
        document.getElementById("9").classList.add("visibilityHidden");
        document.getElementById("10").classList.add("visibilityHidden");
        document.getElementById("11").classList.add("visibilityHidden");
    }
    );

    document.getElementById('3').addEventListener("click", (e) => {
        elementSelected = 3;
        document.getElementById("3").classList.add("popUpCardSelect");
        document.getElementById("0").classList.add("visibilityHidden");
        document.getElementById("1").classList.add("visibilityHidden");
        document.getElementById("2").classList.add("visibilityHidden");
        document.getElementById("4").classList.add("visibilityHidden");
        document.getElementById("5").classList.add("visibilityHidden");
        document.getElementById("6").classList.add("visibilityHidden");
        document.getElementById("7").classList.add("visibilityHidden");
        document.getElementById("8").classList.add("visibilityHidden");
        document.getElementById("9").classList.add("visibilityHidden");
        document.getElementById("10").classList.add("visibilityHidden");
        document.getElementById("11").classList.add("visibilityHidden");
    }
    );

    document.getElementById('4').addEventListener("click", (e) => {
        elementSelected = 4;
        document.getElementById("4").classList.add("popUpCardSelect");
        document.getElementById("0").classList.add("visibilityHidden");
        document.getElementById("1").classList.add("visibilityHidden");
        document.getElementById("2").classList.add("visibilityHidden");
        document.getElementById("3").classList.add("visibilityHidden");
        document.getElementById("5").classList.add("visibilityHidden");
        document.getElementById("6").classList.add("visibilityHidden");
        document.getElementById("7").classList.add("visibilityHidden");
        document.getElementById("8").classList.add("visibilityHidden");
        document.getElementById("9").classList.add("visibilityHidden");
        document.getElementById("10").classList.add("visibilityHidden");
        document.getElementById("11").classList.add("visibilityHidden");
    }
    );

    document.getElementById('5').addEventListener("click", (e) => {
        elementSelected = 5;
        document.getElementById("5").classList.add("popUpCardSelect");
        document.getElementById("0").classList.add("visibilityHidden");
        document.getElementById("1").classList.add("visibilityHidden");
        document.getElementById("2").classList.add("visibilityHidden");
        document.getElementById("3").classList.add("visibilityHidden");
        document.getElementById("4").classList.add("visibilityHidden");
        document.getElementById("6").classList.add("visibilityHidden");
        document.getElementById("7").classList.add("visibilityHidden");
        document.getElementById("8").classList.add("visibilityHidden");
        document.getElementById("9").classList.add("visibilityHidden");
        document.getElementById("10").classList.add("visibilityHidden");
        document.getElementById("11").classList.add("visibilityHidden");
    }
    );

    document.getElementById('6').addEventListener("click", (e) => {
        elementSelected = 6;
        document.getElementById("6").classList.add("popUpCardSelect");
        document.getElementById("0").classList.add("visibilityHidden");
        document.getElementById("1").classList.add("visibilityHidden");
        document.getElementById("2").classList.add("visibilityHidden");
        document.getElementById("3").classList.add("visibilityHidden");
        document.getElementById("4").classList.add("visibilityHidden");
        document.getElementById("5").classList.add("visibilityHidden");
        document.getElementById("7").classList.add("visibilityHidden");
        document.getElementById("8").classList.add("visibilityHidden");
        document.getElementById("9").classList.add("visibilityHidden");
        document.getElementById("10").classList.add("visibilityHidden");
        document.getElementById("11").classList.add("visibilityHidden");
    }
    );

    document.getElementById('7').addEventListener("click", (e) => {
        elementSelected = 7;
        document.getElementById("7").classList.add("popUpCardSelect");
        document.getElementById("0").classList.add("visibilityHidden");
        document.getElementById("1").classList.add("visibilityHidden");
        document.getElementById("2").classList.add("visibilityHidden");
        document.getElementById("3").classList.add("visibilityHidden");
        document.getElementById("4").classList.add("visibilityHidden");
        document.getElementById("5").classList.add("visibilityHidden");
        document.getElementById("6").classList.add("visibilityHidden");
        document.getElementById("8").classList.add("visibilityHidden");
        document.getElementById("9").classList.add("visibilityHidden");
        document.getElementById("10").classList.add("visibilityHidden");
        document.getElementById("11").classList.add("visibilityHidden");
    }
    );

    document.getElementById('8').addEventListener("click", (e) => {
        elementSelected = 8;
        document.getElementById("8").classList.add("popUpCardSelect");
        document.getElementById("0").classList.add("visibilityHidden");
        document.getElementById("1").classList.add("visibilityHidden");
        document.getElementById("2").classList.add("visibilityHidden");
        document.getElementById("3").classList.add("visibilityHidden");
        document.getElementById("4").classList.add("visibilityHidden");
        document.getElementById("5").classList.add("visibilityHidden");
        document.getElementById("6").classList.add("visibilityHidden");
        document.getElementById("7").classList.add("visibilityHidden");
        document.getElementById("9").classList.add("visibilityHidden");
        document.getElementById("10").classList.add("visibilityHidden");
        document.getElementById("11").classList.add("visibilityHidden");
    }
    );

    document.getElementById('9').addEventListener("click", (e) => {
        elementSelected = 9;
        document.getElementById("9").classList.add("popUpCardSelect");
        document.getElementById("0").classList.add("visibilityHidden");
        document.getElementById("1").classList.add("visibilityHidden");
        document.getElementById("2").classList.add("visibilityHidden");
        document.getElementById("3").classList.add("visibilityHidden");
        document.getElementById("4").classList.add("visibilityHidden");
        document.getElementById("5").classList.add("visibilityHidden");
        document.getElementById("6").classList.add("visibilityHidden");
        document.getElementById("7").classList.add("visibilityHidden");
        document.getElementById("8").classList.add("visibilityHidden");
        document.getElementById("10").classList.add("visibilityHidden");
        document.getElementById("11").classList.add("visibilityHidden");
    }
    );

    document.getElementById('10').addEventListener("click", (e) => {
        elementSelected = 10;
        document.getElementById("10").classList.add("popUpCardSelect");
        document.getElementById("0").classList.add("visibilityHidden");
        document.getElementById("1").classList.add("visibilityHidden");
        document.getElementById("2").classList.add("visibilityHidden");
        document.getElementById("3").classList.add("visibilityHidden");
        document.getElementById("4").classList.add("visibilityHidden");
        document.getElementById("5").classList.add("visibilityHidden");
        document.getElementById("6").classList.add("visibilityHidden");
        document.getElementById("7").classList.add("visibilityHidden");
        document.getElementById("8").classList.add("visibilityHidden");
        document.getElementById("9").classList.add("visibilityHidden");
        document.getElementById("11").classList.add("visibilityHidden");
    }
    );

    document.getElementById('11').addEventListener("click", (e) => {
        elementSelected = 11;
        document.getElementById("11").classList.add("popUpCardSelect");
        document.getElementById("0").classList.add("visibilityHidden");
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
    }
    );

    // *********************** Bouton valider LUNCH MONDAY
    document.getElementById("popUpButtonMonday").addEventListener("click", () => {
        if (elementSelected === -1) {
            return
        }
        localStorage.setItem('mondayLunch', JSON.stringify(recipesArray[elementSelected]));
        console.log(localStorage);
        elementSelected = -1;
        popUpMonday.classList.add("visibilityHidden");
        main.classList.remove('visibilityHidden');
        addSelectedButton("monday");
    });

    //************************ Bouton reset LUNCH MONDAY 
    document.getElementById("resetButtonMonday").addEventListener("click", () => {
        elementSelected = -1;
        removeSelectedRecipe();
        removeVisibilityHidden();
        removeSelectedButton("monday");
        localStorage.removeItem("mondayLunch");
    });


    // Bouton validation du plan 
    // document.getElementById("validateButton").addEventListener("click", () => {

    // });
};


main();