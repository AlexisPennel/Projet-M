const main = () => {
    let check = "";
    // Monday
    const mondayBreakfastArray = JSON.parse(localStorage.getItem('mondayBreakfast')).ingredients;
    const mondayLunchArray = JSON.parse(localStorage.getItem('mondayLunch')).ingredients;
    const mondayDinnerArray = JSON.parse(localStorage.getItem('mondayDinner')).ingredients;
    // Tuesday
    const tuesdayBreakfastArray = JSON.parse(localStorage.getItem('tuesdayBreakfast')).ingredients;
    const tuesdayLunchArray = JSON.parse(localStorage.getItem('tuesdayLunch')).ingredients;
    const tuesdayDinnerArray = JSON.parse(localStorage.getItem('tuesdayDinner')).ingredients;
    const ingredientsList = [];

    const createInput = (element) => {
        check += `<div class="flexCenter">
        <input type="checkbox" id="${element}" name="${element}">
        <label for="${element}">${element}</label>
            </div>`
        document.getElementById("checkbox").innerHTML = check;
    };

// Monday 
    mondayBreakfastArray.forEach(element => {
        ingredientsList.push(element);
    });

    mondayLunchArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
    });

    mondayDinnerArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
    });

// Tuesday 

tuesdayBreakfastArray.forEach(element => {
    const SameElement = ingredientsList.indexOf(element);
    if (SameElement === -1) {
        ingredientsList.push(element);
    }
});

tuesdayLunchArray.forEach(element => {
    const SameElement = ingredientsList.indexOf(element);
    if (SameElement === -1) {
        ingredientsList.push(element);
    }
});




// integration de la liste
    ingredientsList.forEach(element => {
        createInput(element);
    })


};

main();