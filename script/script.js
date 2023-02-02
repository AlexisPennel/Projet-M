

const main = () => {
    // Variables 
    const main = document.getElementById('main');
    // Boutons lunch page home 

    // Variables popUp MONDAY 
    const cardContainerMonday = document.getElementById('cardContainerMonday')
    const popUpMonday = document.getElementById('popUpMonday');
    let cardMonday = "";
    // Variables popUp TUESDAY
    const popUpTuesday = document.getElementById('popUpTuesday');
    const cardContainerTuesday = document.getElementById('cardContainerTuesday');
    let cardTuesday = "";
    // Variable Tableau de recettes
    const recipesArray = [];
    // Variable element select
    let elementSelected = -1;



    // Apparition popUpMonday "Lunch" par jour de la semaine  
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
        popUpMonday.classList.remove('visibilityHidden');
    });

    document.getElementById("thursdayLunch").addEventListener("click", () => {
        main.classList.add('visibilityHidden');
        popUpMonday.classList.remove('visibilityHidden');
    });

    document.getElementById("fridayLunch").addEventListener("click", () => {
        main.classList.add('visibilityHidden');
        popUpMonday.classList.remove('visibilityHidden');
    });

    document.getElementById("saturdayLunch").addEventListener("click", () => {
        main.classList.add('visibilityHidden');
        popUpMonday.classList.remove('visibilityHidden');
    });

    document.getElementById("sundayLunch").addEventListener("click", () => {
        main.classList.add('visibilityHidden');
        popUpMonday.classList.remove('visibilityHidden');
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
    recipesArray.push(new recipe("0", "Pechuga a la plancha con verduras y pastas", ["pollo", "cebolla", "pastas", "verduras", "salsa tomate"]))
    recipesArray.push(new recipe("1", "Arroz con huevo", ["arroz", "huevos", "tomates"]));
    recipesArray.push(new recipe("2", "Filete de pescado a la plancha con verduras", ["filete de pescado", "pastas o arroz", "verduras", "lechuga"]))
    recipesArray.push(new recipe("3", "Salmon con verduras", ["salmon", "verduras", "pastas o arroz", ]));
    recipesArray.push(new recipe("4", "Tacos de pollo", ["Pechuga de pollo", "tortillas"]));
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
    }
    );

    document.getElementById('1').addEventListener("click", (e) => {
        elementSelected = 1;
        document.getElementById("1").classList.add("popUpCardSelect");
        document.getElementById("0").classList.add("visibilityHidden");
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
        document.getElementById("mondayLunch").classList.add("buttonSelected");
    });

    //************************ Bouton reset LUNCH MONDAY 
    document.getElementById("resetButtonMonday").addEventListener("click", () => {
        elementSelected = -1;
        document.getElementById("0").classList.remove("popUpCardSelect");
        document.getElementById("1").classList.remove("popUpCardSelect");
        document.getElementById("0").classList.remove("visibilityHidden");
        document.getElementById("1").classList.remove("visibilityHidden");
        document.getElementById("mondayLunch").classList.remove("buttonSelected");
        localStorage.removeItem("mondayLunch");
    });

    // POP-UP TUESDAY 
    const createCardLunchTuesday = (element) => {
        cardTuesday += `<a href="#" class="popUpCard flexCenter" id="${element.number}tuesday">
        <div>
            <h2>${element.name}</h2>
            <p>${element.ingredients}</p>
        </div>
    </a>`
        cardContainerTuesday.innerHTML = cardTuesday;
    }
    // ********************* Boucle pour crea cartes pour chaques recettes lunch (TUESDAY)
    recipesArray.forEach(element => {
        createCardLunchTuesday(element);
    });

    // Ajout recettes tableau 

    document.getElementById('0tuesday').addEventListener("click", (e) => {
        elementSelected = 0;
        document.getElementById("0tuesday").classList.add("popUpCardSelect");
        document.getElementById("1tuesday").classList.add("visibilityHidden");
    }
    );

    document.getElementById('1tuesday').addEventListener("click", (e) => {
        elementSelected = 1;
        document.getElementById("1tuesday").classList.add("popUpCardSelect");
        document.getElementById("0tuesday").classList.add("visibilityHidden");
    }
    );

    // *********************** Bouton valider LUNCH TUESDAY
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

    //************************ Bouton reset LUNCH TUESDAY 
    document.getElementById("resetButtonTuesday").addEventListener("click", () => {
        elementSelected = -1;
        document.getElementById("0tuesday").classList.remove("popUpCardSelect");
        document.getElementById("1tuesday").classList.remove("popUpCardSelect");
        document.getElementById("0tuesday").classList.remove("visibilityHidden");
        document.getElementById("1tuesday").classList.remove("visibilityHidden");
        document.getElementById("tuesdayLunch").classList.remove("buttonSelected");
        localStorage.removeItem("tuesdayLunch");
    });

    //*************************Bouton return 
    document.addEventListener("click", (e) => {
        if (e.target.className === "fa-solid fa-arrow-left") {
            popUpTuesday.classList.add("visibilityHidden");
            popUpMonday.classList.add("visibilityHidden");
            main.classList.remove('visibilityHidden');
        }
    });






    // Bouton validation du plan 
    // document.getElementById("validateButton").addEventListener("click", () => {
      
    // });
};


main();