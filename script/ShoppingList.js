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
    // Wednesday 
    const wednesdayBreakfastArray = JSON.parse(localStorage.getItem('wednesdayBreakfast')).ingredients;
    const wednesdayLunchArray = JSON.parse(localStorage.getItem('wednesdayLunch')).ingredients;
    const wednesdayDinnerArray = JSON.parse(localStorage.getItem('wednesdayDinner')).ingredients;
    // Thursday
    const thursdayBreakfastArray = JSON.parse(localStorage.getItem('thursdayBreakfast')).ingredients;
    const thursdayLunchArray = JSON.parse(localStorage.getItem('thursdayLunch')).ingredients;
    const thursdayDinnerArray = JSON.parse(localStorage.getItem('thursdayDinner')).ingredients;
    // Friday 
    const fridayBreakfastArray = JSON.parse(localStorage.getItem('fridayBreakfast')).ingredients;
    const fridayLunchArray = JSON.parse(localStorage.getItem('fridayLunch')).ingredients;
    const fridayDinnerArray = JSON.parse(localStorage.getItem('fridayDinner')).ingredients;
    // Saturday
    const saturdayBreakfastArray = JSON.parse(localStorage.getItem('saturdayBreakfast')).ingredients;
    const saturdayLunchArray = JSON.parse(localStorage.getItem('saturdayLunch')).ingredients;
    const saturdayDinnerArray = JSON.parse(localStorage.getItem('saturdayDinner')).ingredients;
    // Sunday
    const sundayBreakfastArray = JSON.parse(localStorage.getItem('sundayBreakfast')).ingredients;
    const sundayLunchArray = JSON.parse(localStorage.getItem('sundayLunch')).ingredients;
    const sundayDinnerArray = JSON.parse(localStorage.getItem('sundayDinner')).ingredients;
    // Liste ingredients 
    const ingredientsList = [];


    // Creation Input 
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

    tuesdayDinnerArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
    });
    
     // wednesday 
     wednesdayBreakfastArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
    });
    
    wednesdayLunchArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
    });

    wednesdayDinnerArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
    });
    
     // thursday 
     thursdayBreakfastArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
    });
    
    thursdayLunchArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
    });
    
    thursdayDinnerArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
    });
     // friday 
     fridayBreakfastArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
    });
    
    fridayLunchArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
    });
    
    fridayDinnerArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
    });

     // saturday 
     saturdayBreakfastArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
    });
    
    saturdayLunchArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
    });

    saturdayDinnerArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
    });
    
     // sunday 
     sundayBreakfastArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
    });
    
    sundayLunchArray.forEach(element => {
        const SameElement = ingredientsList.indexOf(element);
        console.log(SameElement)
        if (SameElement === -1) {
            ingredientsList.push(element);
        }
        console.log("identique");
    });

    sundayDinnerArray.forEach(element => {
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