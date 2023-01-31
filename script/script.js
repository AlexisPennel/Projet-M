

const main = () => {
    // Variables popUp
    const main = document.getElementById('main');
    const popUp = document.getElementById('popUp');
    const cardContainer = document.getElementById('cardContainer')
    let card = "";
    // Tableau de recettes
    const recipesArray = [];
    // Tableau lunch selectionné
    const lunchArray = [];

    // Apparition popUp
    document.addEventListener("click", (e) => {
        if (e.target.id == "lunch") {

            main.classList.add('visibilityHidden');
            popUp.classList.remove('visibilityHidden');
        }
    })

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
    recipesArray.push(new recipe("0", "pollo a la plancha", ["pollo", "cebolla"]))
    recipesArray.push(new recipe("1", "salmon", ["salmon"]))

    // Apparition cartes plats

    //********************** Fonction creation cartes Lunch
    const createCardLunch = (element) => {
        card += `<a href="#" class="popUpCard flexCenter" id="${element.number}">
        <div>
            <h2>${element.name}</h2>
            <p>${element.ingredients}</p>
        </div>
    </a>`
        cardContainer.innerHTML = card;
    }
    // ********************* Boucle pour chaques recettes (lunch)
    recipesArray.forEach(element => {
        createCardLunch(element);
    });

    // Ajout recettes tableau 
    document.getElementById('0').addEventListener("click", (e) => {

        lunchArray.push(recipesArray[0]);
        console.log(lunchArray);
        document.getElementById("0").classList.add("popUpCardSelect");
    }
    );

    document.getElementById('1').addEventListener("click", (e) => {
        lunchArray.push(recipesArray[1]);
        console.log(lunchArray);
        e.target.classList.add("popUpCardSelect");
    }
    );

    // Bouton valider
    document.getElementById("popUpButton").addEventListener("click", () => {
        popUp.classList.add("visibilityHidden");
        main.classList.remove('visibilityHidden');
    });
};


main();