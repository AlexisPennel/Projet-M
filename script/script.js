import { addSelectedButton, removeSelectedButton, removeSelectedRecipe, removeVisibilityHidden} from "./lib/tools.js";

const main = () => {
    // Variables 
    const main = document.getElementById('main');

    // Variables popUp MONDAY 
    const cardContainerMonday = document.getElementById('cardContainerMonday')
    const popUpMonday = document.getElementById('popUpMonday');
    let cardMonday = "";

    // Variable Tableau de recettes
    const recipesArray = [];

    // Variable element select
    let elementSelected = -1;


    // Bouton "new plan"
    document.getElementById("newPlan").addEventListener("click", () => {
        localStorage.clear();
        console.log(localStorage)
        removeSelectedButton();
    });
    

    // Apparition popUp "Lunch" par jour de la semaine  
    document.getElementById("mondayLunch").addEventListener("click", () => {
        main.classList.add('visibilityHidden');
        popUpMonday.classList.remove('visibilityHidden');
    });

    document.getElementById("tuesdayLunch").addEventListener("click", () => {
        main.classList.add('visibilityHidden');
        popUpTuesday.classList.remove('visibilityHidden');
    });

    document.getElementById("wednesdayLunch").addEventListener("click", () => {
        main.classList.add('visibilityHidden');
        popUpWednesday.classList.remove('visibilityHidden');
    });

    document.getElementById("thursdayLunch").addEventListener("click", () => {
        main.classList.add('visibilityHidden');
        popUpThursday.classList.remove('visibilityHidden');
    });

    document.getElementById("fridayLunch").addEventListener("click", () => {
        main.classList.add('visibilityHidden');
        popUpFriday.classList.remove('visibilityHidden');
    });

    document.getElementById("saturdayLunch").addEventListener("click", () => {
        main.classList.add('visibilityHidden');
        popUpSaturday.classList.remove('visibilityHidden');
    });

    document.getElementById("sundayLunch").addEventListener("click", () => {
        main.classList.add('visibilityHidden');
        popUpSunday.classList.remove('visibilityHidden');
    });

    //*************************Bouton return 
    document.addEventListener("click", (e) => {
        if (e.target.className === "fa-solid fa-arrow-left") {
            popUpTuesday.classList.add("visibilityHidden");
            popUpMonday.classList.add("visibilityHidden");
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
    // ********************** Push recettes tableau 
    recipesArray.push(new recipe("0", "Pechuga a la plancha con verduras y pastas", ["Pechuga de pollo", "Cebolla", "Pastas", "Verduras", "Salsa tomate"]))
    recipesArray.push(new recipe("1", "Arroz con huevo", ["Arroz", "Huevos", "Tomates"]));
    recipesArray.push(new recipe("2", "Filete de pescado a la plancha con verduras", ["Filete de pescado", "Pastas o arroz", "Verduras", "Lechuga"]))
    recipesArray.push(new recipe("3", "Salmon con verduras", ["Salmon", "Verduras", "Pastas o arroz", ]));
    recipesArray.push(new recipe("4", "Tacos de pollo", ["Pechuga de pollo", "Tortillas", "Cebolla", "Media crema", "Aguacate"]));
    recipesArray.push(new recipe("5", "Tostadas de pollo", ["Pechuga de pollo", "Tostadas", "Lechuga", "Cebolla", "Aguacate", "Media crema", "Frijol"]));
    recipesArray.push(new recipe("6", "Molletes fit", ["Pan", "Frijol", "Queso oaxaca", "Cebolla" ]));
    recipesArray.push(new recipe("7", "Atun con salmas", ["Atun", "Lechuga", "Verduras", "Salmas"]));
    recipesArray.push(new recipe("8", "Huevo", ["Huevos", "Espinacas", "Tomates", "Pan"]));
    recipesArray.push(new recipe("9", "Omelette", ["Huevos", "Champinones", "Queso oaxaca", "Pan"]));
    recipesArray.push(new recipe("10", "Quesadillas con champinones", ["Tortillas", "Queso oaxaca", "Jamon", "Champinones"]));
    recipesArray.push(new recipe("11", "Hamburguesa casera", ["Pan hamburguesa", "Pechuga de pollo", "Cebolla", "Lechuga", "Queso oaxaca", "Mayonessa / Ketchup"]));


    // Apparition cartes plats PopUp MONDAY

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