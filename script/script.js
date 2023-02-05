import { removeSelectedButton } from "./lib/tools.js";
import { BreakfastSelected0, BreakfastSelected1, BreakfastSelected2, BreakfastSelected3, BreakfastSelected4, BreakfastSelected5, BreakfastSelected6, createPopUpBreakfast } from "./lib/popUpBreakfast.js";
import { createPopUpLunch, LunchSelected0, LunchSelected1, LunchSelected2, LunchSelected3, LunchSelected4, LunchSelected5, LunchSelected6, LunchSelected7, LunchSelected8, LunchSelected9, LunchSelected10, LunchSelected11, LunchSelected12 } from "./lib/popUpLunch.js";
import { createPopUpDinner, DinnerSelected0, DinnerSelected1, DinnerSelected2, DinnerSelected3, DinnerSelected4, DinnerSelected5, DinnerSelected6, DinnerSelected7, DinnerSelected8, DinnerSelected9, DinnerSelected10, DinnerSelected11, DinnerSelected12 } from "./lib/popUpDinner.js";

const main = () => {
    // Variables 
    const main = document.getElementById('main');
    const popUp = document.getElementById('popUp');
    console.log(popUp)

    // Variable Tableau de recettes
    const recipesArray = [];
    const breakfastRecipesArray = [];
    // Variable element select
    let elementSelectedB = -1;
    let elementSelectedL = -1;
    let elementSelectedD = -1;
    // Recettes
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
    recipesArray.push(new recipe("12", "Libre", ["Libre"]));

    // Bouton "new plan"
    document.getElementById("newPlan").addEventListener("click", () => {
        localStorage.clear();
        console.log(localStorage)
        removeSelectedButton();
    });


    // POP UP BREAKFAST 
    // --------------------Apparition popUp " Monday Breakfast"---------------------------------------------- 
    document.getElementById("mondayBreakfast").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpBreakfast(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('B0').addEventListener("click", (e) => {
                elementSelectedB = 0;
                BreakfastSelected0();
            });

            document.getElementById('B1').addEventListener("click", (e) => {
                elementSelectedB = 1;
                BreakfastSelected1();
            });

            document.getElementById('B2').addEventListener("click", (e) => {
                elementSelectedB = 2;
                BreakfastSelected2();
            });

            document.getElementById('B3').addEventListener("click", (e) => {
                elementSelectedB = 3;
                BreakfastSelected3();
            });

            document.getElementById('B4').addEventListener("click", (e) => {
                elementSelectedB = 4;
                BreakfastSelected4();
            });

            document.getElementById('B5').addEventListener("click", (e) => {
                elementSelectedB = 5;
                BreakfastSelected5();
            });

            document.getElementById('B6').addEventListener("click", (e) => {
                elementSelectedB = 6;
                BreakfastSelected6();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedB === -1) {
                    return
                }
                console.log(elementSelectedB);
                console.log(breakfastRecipesArray[0]);
                localStorage.setItem('mondayBreakfast', JSON.stringify(breakfastRecipesArray[elementSelectedB]));
                console.log(localStorage);
                elementSelectedB = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("mondayBreakfast").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " Tuesday Breakfast"---------------------------------------------- 
    document.getElementById("tuesdayBreakfast").addEventListener("click", () => {
        setTimeout(() => {
            console.log('yes');
            createPopUpBreakfast(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('B0').addEventListener("click", (e) => {
                elementSelectedB = 0;
                BreakfastSelected0();
            });

            document.getElementById('B1').addEventListener("click", (e) => {
                elementSelectedB = 1;
                BreakfastSelected1();
            });

            document.getElementById('B2').addEventListener("click", (e) => {
                elementSelectedB = 2;
                BreakfastSelected2();
            });

            document.getElementById('B3').addEventListener("click", (e) => {
                elementSelectedB = 3;
                BreakfastSelected3();
            });

            document.getElementById('B4').addEventListener("click", (e) => {
                elementSelectedB = 4;
                BreakfastSelected4();
            });

            document.getElementById('B5').addEventListener("click", (e) => {
                elementSelectedB = 5;
                BreakfastSelected5();
            });

            document.getElementById('B6').addEventListener("click", (e) => {
                elementSelectedB = 6;
                BreakfastSelected6();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedB === -1) {
                    return
                }
                console.log(elementSelectedB);
                console.log(breakfastRecipesArray[0]);
                localStorage.setItem('tuesdayBreakfast', JSON.stringify(breakfastRecipesArray[elementSelectedB]));
                console.log(localStorage);
                elementSelectedB = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("tuesdayBreakfast").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " Wednesday Breakfast"---------------------------------------------- 
    document.getElementById("wednesdayBreakfast").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpBreakfast(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('B0').addEventListener("click", (e) => {
                elementSelectedB = 0;
                BreakfastSelected0();
            });

            document.getElementById('B1').addEventListener("click", (e) => {
                elementSelectedB = 1;
                BreakfastSelected1();
            });

            document.getElementById('B2').addEventListener("click", (e) => {
                elementSelectedB = 2;
                BreakfastSelected2();
            });

            document.getElementById('B3').addEventListener("click", (e) => {
                elementSelectedB = 3;
                BreakfastSelected3();
            });

            document.getElementById('B4').addEventListener("click", (e) => {
                elementSelectedB = 4;
                BreakfastSelected4();
            });

            document.getElementById('B5').addEventListener("click", (e) => {
                elementSelectedB = 5;
                BreakfastSelected5();
            });

            document.getElementById('B6').addEventListener("click", (e) => {
                elementSelectedB = 6;
                BreakfastSelected6();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedB === -1) {
                    return
                }
                console.log(elementSelectedB);
                console.log(breakfastRecipesArray[0]);
                localStorage.setItem('wednesdayBreakfast', JSON.stringify(breakfastRecipesArray[elementSelectedB]));
                console.log(localStorage);
                elementSelectedB = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("wednesdayBreakfast").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " Thursday Breakfast"---------------------------------------------- 
    document.getElementById("thursdayBreakfast").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpBreakfast(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('B0').addEventListener("click", (e) => {
                elementSelectedB = 0;
                BreakfastSelected0();
            });

            document.getElementById('B1').addEventListener("click", (e) => {
                elementSelectedB = 1;
                BreakfastSelected1();
            });

            document.getElementById('B2').addEventListener("click", (e) => {
                elementSelectedB = 2;
                BreakfastSelected2();
            });

            document.getElementById('B3').addEventListener("click", (e) => {
                elementSelectedB = 3;
                BreakfastSelected3();
            });

            document.getElementById('B4').addEventListener("click", (e) => {
                elementSelectedB = 4;
                BreakfastSelected4();
            });

            document.getElementById('B5').addEventListener("click", (e) => {
                elementSelectedB = 5;
                BreakfastSelected5();
            });

            document.getElementById('B6').addEventListener("click", (e) => {
                elementSelectedB = 6;
                BreakfastSelected6();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedB === -1) {
                    return
                }
                console.log(elementSelectedB);
                console.log(breakfastRecipesArray[0]);
                localStorage.setItem('thursdayBreakfast', JSON.stringify(breakfastRecipesArray[elementSelectedB]));
                console.log(localStorage);
                elementSelectedB = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("thursdayBreakfast").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " Friday Breakfast"---------------------------------------------- 
    document.getElementById("fridayBreakfast").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpBreakfast(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('B0').addEventListener("click", (e) => {
                elementSelectedB = 0;
                BreakfastSelected0();
            });

            document.getElementById('B1').addEventListener("click", (e) => {
                elementSelectedB = 1;
                BreakfastSelected1();
            });

            document.getElementById('B2').addEventListener("click", (e) => {
                elementSelectedB = 2;
                BreakfastSelected2();
            });

            document.getElementById('B3').addEventListener("click", (e) => {
                elementSelectedB = 3;
                BreakfastSelected3();
            });

            document.getElementById('B4').addEventListener("click", (e) => {
                elementSelectedB = 4;
                BreakfastSelected4();
            });

            document.getElementById('B5').addEventListener("click", (e) => {
                elementSelectedB = 5;
                BreakfastSelected5();
            });

            document.getElementById('B6').addEventListener("click", (e) => {
                elementSelectedB = 6;
                BreakfastSelected6();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedB === -1) {
                    return
                }
                console.log(elementSelectedB);
                console.log(breakfastRecipesArray[0]);
                localStorage.setItem('fridayBreakfast', JSON.stringify(breakfastRecipesArray[elementSelectedB]));
                console.log(localStorage);
                elementSelectedB = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("fridayBreakfast").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " Saturday Breakfast"---------------------------------------------- 
    document.getElementById("saturdayBreakfast").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpBreakfast(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('B0').addEventListener("click", (e) => {
                elementSelectedB = 0;
                BreakfastSelected0();
            });

            document.getElementById('B1').addEventListener("click", (e) => {
                elementSelectedB = 1;
                BreakfastSelected1();
            });

            document.getElementById('B2').addEventListener("click", (e) => {
                elementSelectedB = 2;
                BreakfastSelected2();
            });

            document.getElementById('B3').addEventListener("click", (e) => {
                elementSelectedB = 3;
                BreakfastSelected3();
            });

            document.getElementById('B4').addEventListener("click", (e) => {
                elementSelectedB = 4;
                BreakfastSelected4();
            });

            document.getElementById('B5').addEventListener("click", (e) => {
                elementSelectedB = 5;
                BreakfastSelected5();
            });

            document.getElementById('B6').addEventListener("click", (e) => {
                elementSelectedB = 6;
                BreakfastSelected6();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedB === -1) {
                    return
                }
                console.log(elementSelectedB);
                console.log(breakfastRecipesArray[0]);
                localStorage.setItem('saturdayBreakfast', JSON.stringify(breakfastRecipesArray[elementSelectedB]));
                console.log(localStorage);
                elementSelectedB = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("saturdayBreakfast").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " Sunday Breakfast"---------------------------------------------- 
    document.getElementById("sundayBreakfast").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpBreakfast(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('B0').addEventListener("click", (e) => {
                elementSelectedB = 0;
                BreakfastSelected0();
            });

            document.getElementById('B1').addEventListener("click", (e) => {
                elementSelectedB = 1;
                BreakfastSelected1();
            });

            document.getElementById('B2').addEventListener("click", (e) => {
                elementSelectedB = 2;
                BreakfastSelected2();
            });

            document.getElementById('B3').addEventListener("click", (e) => {
                elementSelectedB = 3;
                BreakfastSelected3();
            });

            document.getElementById('B4').addEventListener("click", (e) => {
                elementSelectedB = 4;
                BreakfastSelected4();
            });

            document.getElementById('B5').addEventListener("click", (e) => {
                elementSelectedB = 5;
                BreakfastSelected5();
            });

            document.getElementById('B6').addEventListener("click", (e) => {
                elementSelectedB = 6;
                BreakfastSelected6();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedB === -1) {
                    return
                }
                console.log(elementSelectedB);
                console.log(breakfastRecipesArray[0]);
                localStorage.setItem('sundayBreakfast', JSON.stringify(breakfastRecipesArray[elementSelectedB]));
                console.log(localStorage);
                elementSelectedB = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("sundayBreakfast").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // POP UP LUNCH 
    // --------------------Apparition popUp " Monday Lunch"---------------------------------------------- 
    document.getElementById("mondayLunch").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpLunch(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('0').addEventListener("click", (e) => {
                elementSelectedL = 0;
                LunchSelected0();
            });

            document.getElementById('1').addEventListener("click", (e) => {
                elementSelectedL = 1;
                LunchSelected1();
            });

            document.getElementById('2').addEventListener("click", (e) => {
                elementSelectedL = 2;
                LunchSelected2();
            });

            document.getElementById('3').addEventListener("click", (e) => {
                elementSelectedL = 3;
                LunchSelected3();
            });

            document.getElementById('4').addEventListener("click", (e) => {
                elementSelectedL = 4;
                LunchSelected4();
            });

            document.getElementById('5').addEventListener("click", (e) => {
                elementSelectedL = 5;
                LunchSelected5();
            });

            document.getElementById('6').addEventListener("click", (e) => {
                elementSelectedL = 6;
                LunchSelected6();
            });

            document.getElementById('7').addEventListener("click", (e) => {
                elementSelectedL = 7;
                LunchSelected7();
            });

            document.getElementById('8').addEventListener("click", (e) => {
                elementSelectedL = 8;
                LunchSelected8();
            });

            document.getElementById('9').addEventListener("click", (e) => {
                elementSelectedL = 9;
                LunchSelected9();
            });

            document.getElementById('10').addEventListener("click", (e) => {
                elementSelectedL = 10;
                LunchSelected10();
            });

            document.getElementById('11').addEventListener("click", (e) => {
                elementSelectedL = 11;
                LunchSelected11();
            });

            document.getElementById('12').addEventListener("click", (e) => {
                elementSelectedL = 12;
                LunchSelected12();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedL === -1) {
                    return
                }
                console.log(elementSelectedL);
                console.log(recipesArray[0]);
                localStorage.setItem('mondayLunch', JSON.stringify(recipesArray[elementSelectedL]));
                console.log(localStorage);
                elementSelectedL = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("mondayLunch").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " Tuesday Lunch"---------------------------------------------- 
    document.getElementById("tuesdayLunch").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpLunch(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('0').addEventListener("click", (e) => {
                elementSelectedL = 0;
                LunchSelected0();
            });

            document.getElementById('1').addEventListener("click", (e) => {
                elementSelectedL = 1;
                LunchSelected1();
            });

            document.getElementById('2').addEventListener("click", (e) => {
                elementSelectedL = 2;
                LunchSelected2();
            });

            document.getElementById('3').addEventListener("click", (e) => {
                elementSelectedL = 3;
                LunchSelected3();
            });

            document.getElementById('4').addEventListener("click", (e) => {
                elementSelectedL = 4;
                LunchSelected4();
            });

            document.getElementById('5').addEventListener("click", (e) => {
                elementSelectedL = 5;
                LunchSelected5();
            });

            document.getElementById('6').addEventListener("click", (e) => {
                elementSelectedL = 6;
                LunchSelected6();
            });

            document.getElementById('7').addEventListener("click", (e) => {
                elementSelectedL = 7;
                LunchSelected7();
            });

            document.getElementById('8').addEventListener("click", (e) => {
                elementSelectedL = 8;
                LunchSelected8();
            });

            document.getElementById('9').addEventListener("click", (e) => {
                elementSelectedL = 9;
                LunchSelected9();
            });

            document.getElementById('10').addEventListener("click", (e) => {
                elementSelectedL = 10;
                LunchSelected10();
            });

            document.getElementById('11').addEventListener("click", (e) => {
                elementSelectedL = 11;
                LunchSelected11();
            });

            document.getElementById('12').addEventListener("click", (e) => {
                elementSelectedL = 12;
                LunchSelected12();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedL === -1) {
                    return
                }
                console.log(elementSelectedL);
                console.log(recipesArray[0]);
                localStorage.setItem('tuesdayLunch', JSON.stringify(recipesArray[elementSelectedL]));
                console.log(localStorage);
                elementSelectedL = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("tuesdayLunch").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " wednesday Lunch"---------------------------------------------- 
    document.getElementById("wednesdayLunch").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpLunch(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('0').addEventListener("click", (e) => {
                elementSelectedL = 0;
                LunchSelected0();
            });

            document.getElementById('1').addEventListener("click", (e) => {
                elementSelectedL = 1;
                LunchSelected1();
            });

            document.getElementById('2').addEventListener("click", (e) => {
                elementSelectedL = 2;
                LunchSelected2();
            });

            document.getElementById('3').addEventListener("click", (e) => {
                elementSelectedL = 3;
                LunchSelected3();
            });

            document.getElementById('4').addEventListener("click", (e) => {
                elementSelectedL = 4;
                LunchSelected4();
            });

            document.getElementById('5').addEventListener("click", (e) => {
                elementSelectedL = 5;
                LunchSelected5();
            });

            document.getElementById('6').addEventListener("click", (e) => {
                elementSelectedL = 6;
                LunchSelected6();
            });

            document.getElementById('7').addEventListener("click", (e) => {
                elementSelectedL = 7;
                LunchSelected7();
            });

            document.getElementById('8').addEventListener("click", (e) => {
                elementSelectedL = 8;
                LunchSelected8();
            });

            document.getElementById('9').addEventListener("click", (e) => {
                elementSelectedL = 9;
                LunchSelected9();
            });

            document.getElementById('10').addEventListener("click", (e) => {
                elementSelectedL = 10;
                LunchSelected10();
            });

            document.getElementById('11').addEventListener("click", (e) => {
                elementSelectedL = 11;
                LunchSelected11();
            });

            document.getElementById('12').addEventListener("click", (e) => {
                elementSelectedL = 12;
                LunchSelected12();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedL === -1) {
                    return
                }
                console.log(elementSelectedL);
                console.log(recipesArray[0]);
                localStorage.setItem('wednesdayLunch', JSON.stringify(recipesArray[elementSelectedL]));
                console.log(localStorage);
                elementSelectedL = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("wednesdayLunch").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " Thursday Lunch"---------------------------------------------- 
    document.getElementById("thursdayLunch").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpLunch(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('0').addEventListener("click", (e) => {
                elementSelectedL = 0;
                LunchSelected0();
            });

            document.getElementById('1').addEventListener("click", (e) => {
                elementSelectedL = 1;
                LunchSelected1();
            });

            document.getElementById('2').addEventListener("click", (e) => {
                elementSelectedL = 2;
                LunchSelected2();
            });

            document.getElementById('3').addEventListener("click", (e) => {
                elementSelectedL = 3;
                LunchSelected3();
            });

            document.getElementById('4').addEventListener("click", (e) => {
                elementSelectedL = 4;
                LunchSelected4();
            });

            document.getElementById('5').addEventListener("click", (e) => {
                elementSelectedL = 5;
                LunchSelected5();
            });

            document.getElementById('6').addEventListener("click", (e) => {
                elementSelectedL = 6;
                LunchSelected6();
            });

            document.getElementById('7').addEventListener("click", (e) => {
                elementSelectedL = 7;
                LunchSelected7();
            });

            document.getElementById('8').addEventListener("click", (e) => {
                elementSelectedL = 8;
                LunchSelected8();
            });

            document.getElementById('9').addEventListener("click", (e) => {
                elementSelectedL = 9;
                LunchSelected9();
            });

            document.getElementById('10').addEventListener("click", (e) => {
                elementSelectedL = 10;
                LunchSelected10();
            });

            document.getElementById('11').addEventListener("click", (e) => {
                elementSelectedL = 11;
                LunchSelected11();
            });

            document.getElementById('12').addEventListener("click", (e) => {
                elementSelectedL = 12;
                LunchSelected12();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedL === -1) {
                    return
                }
                console.log(elementSelectedL);
                console.log(recipesArray[0]);
                localStorage.setItem('thursdayLunch', JSON.stringify(recipesArray[elementSelectedL]));
                console.log(localStorage);
                elementSelectedL = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("thursdayLunch").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " FridayLunch"---------------------------------------------- 
    document.getElementById("fridayLunch").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpLunch(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('0').addEventListener("click", (e) => {
                elementSelectedL = 0;
                LunchSelected0();
            });

            document.getElementById('1').addEventListener("click", (e) => {
                elementSelectedL = 1;
                LunchSelected1();
            });

            document.getElementById('2').addEventListener("click", (e) => {
                elementSelectedL = 2;
                LunchSelected2();
            });

            document.getElementById('3').addEventListener("click", (e) => {
                elementSelectedL = 3;
                LunchSelected3();
            });

            document.getElementById('4').addEventListener("click", (e) => {
                elementSelectedL = 4;
                LunchSelected4();
            });

            document.getElementById('5').addEventListener("click", (e) => {
                elementSelectedL = 5;
                LunchSelected5();
            });

            document.getElementById('6').addEventListener("click", (e) => {
                elementSelectedL = 6;
                LunchSelected6();
            });

            document.getElementById('7').addEventListener("click", (e) => {
                elementSelectedL = 7;
                LunchSelected7();
            });

            document.getElementById('8').addEventListener("click", (e) => {
                elementSelectedL = 8;
                LunchSelected8();
            });

            document.getElementById('9').addEventListener("click", (e) => {
                elementSelectedL = 9;
                LunchSelected9();
            });

            document.getElementById('10').addEventListener("click", (e) => {
                elementSelectedL = 10;
                LunchSelected10();
            });

            document.getElementById('11').addEventListener("click", (e) => {
                elementSelectedL = 11;
                LunchSelected11();
            });

            document.getElementById('12').addEventListener("click", (e) => {
                elementSelectedL = 12;
                LunchSelected12();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedL === -1) {
                    return
                }
                console.log(elementSelectedL);
                console.log(recipesArray[0]);
                localStorage.setItem('fridayLunch', JSON.stringify(recipesArray[elementSelectedL]));
                console.log(localStorage);
                elementSelectedL = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("fridayLunch").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " Saturday Lunch"---------------------------------------------- 
    document.getElementById("saturdayLunch").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpLunch(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('0').addEventListener("click", (e) => {
                elementSelectedL = 0;
                LunchSelected0();
            });

            document.getElementById('1').addEventListener("click", (e) => {
                elementSelectedL = 1;
                LunchSelected1();
            });

            document.getElementById('2').addEventListener("click", (e) => {
                elementSelectedL = 2;
                LunchSelected2();
            });

            document.getElementById('3').addEventListener("click", (e) => {
                elementSelectedL = 3;
                LunchSelected3();
            });

            document.getElementById('4').addEventListener("click", (e) => {
                elementSelectedL = 4;
                LunchSelected4();
            });

            document.getElementById('5').addEventListener("click", (e) => {
                elementSelectedL = 5;
                LunchSelected5();
            });

            document.getElementById('6').addEventListener("click", (e) => {
                elementSelectedL = 6;
                LunchSelected6();
            });

            document.getElementById('7').addEventListener("click", (e) => {
                elementSelectedL = 7;
                LunchSelected7();
            });

            document.getElementById('8').addEventListener("click", (e) => {
                elementSelectedL = 8;
                LunchSelected8();
            });

            document.getElementById('9').addEventListener("click", (e) => {
                elementSelectedL = 9;
                LunchSelected9();
            });

            document.getElementById('10').addEventListener("click", (e) => {
                elementSelectedL = 10;
                LunchSelected10();
            });

            document.getElementById('11').addEventListener("click", (e) => {
                elementSelectedL = 11;
                LunchSelected11();
            });

            document.getElementById('12').addEventListener("click", (e) => {
                elementSelectedL = 12;
                LunchSelected12();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedL === -1) {
                    return
                }
                console.log(elementSelectedL);
                console.log(recipesArray[0]);
                localStorage.setItem('saturdayLunch', JSON.stringify(recipesArray[elementSelectedL]));
                console.log(localStorage);
                elementSelectedL = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("saturdayLunch").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " Sunday Lunch"---------------------------------------------- 
    document.getElementById("sundayLunch").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpLunch(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('0').addEventListener("click", (e) => {
                elementSelectedL = 0;
                LunchSelected0();
            });

            document.getElementById('1').addEventListener("click", (e) => {
                elementSelectedL = 1;
                LunchSelected1();
            });

            document.getElementById('2').addEventListener("click", (e) => {
                elementSelectedL = 2;
                LunchSelected2();
            });

            document.getElementById('3').addEventListener("click", (e) => {
                elementSelectedL = 3;
                LunchSelected3();
            });

            document.getElementById('4').addEventListener("click", (e) => {
                elementSelectedL = 4;
                LunchSelected4();
            });

            document.getElementById('5').addEventListener("click", (e) => {
                elementSelectedL = 5;
                LunchSelected5();
            });

            document.getElementById('6').addEventListener("click", (e) => {
                elementSelectedL = 6;
                LunchSelected6();
            });

            document.getElementById('7').addEventListener("click", (e) => {
                elementSelectedL = 7;
                LunchSelected7();
            });

            document.getElementById('8').addEventListener("click", (e) => {
                elementSelectedL = 8;
                LunchSelected8();
            });

            document.getElementById('9').addEventListener("click", (e) => {
                elementSelectedL = 9;
                LunchSelected9();
            });

            document.getElementById('10').addEventListener("click", (e) => {
                elementSelectedL = 10;
                LunchSelected10();
            });

            document.getElementById('11').addEventListener("click", (e) => {
                elementSelectedL = 11;
                LunchSelected11();
            });

            document.getElementById('12').addEventListener("click", (e) => {
                elementSelectedL = 12;
                LunchSelected12();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedL === -1) {
                    return
                }
                console.log(elementSelectedL);
                console.log(recipesArray[0]);
                localStorage.setItem('sundayLunch', JSON.stringify(recipesArray[elementSelectedL]));
                console.log(localStorage);
                elementSelectedL = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("sundayLunch").classList.add("buttonSelected");;
            });

        }, 400)
    });


    // POP UP DINNER 
    // --------------------Apparition popUp " Monday Dinner"---------------------------------------------- 
    document.getElementById("mondayDinner").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpDinner(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('0').addEventListener("click", (e) => {
                elementSelectedD = 0;
                DinnerSelected0();
            });

            document.getElementById('1').addEventListener("click", (e) => {
                elementSelectedD = 1;
                DinnerSelected1();
            });

            document.getElementById('2').addEventListener("click", (e) => {
                elementSelectedD = 2;
                DinnerSelected2();
            });

            document.getElementById('3').addEventListener("click", (e) => {
                elementSelectedD = 3;
                DinnerSelected3();
            });

            document.getElementById('4').addEventListener("click", (e) => {
                elementSelectedD = 4;
                DinnerSelected4();
            });

            document.getElementById('5').addEventListener("click", (e) => {
                elementSelectedD = 5;
                DinnerSelected5();
            });

            document.getElementById('6').addEventListener("click", (e) => {
                elementSelectedD = 6;
                DinnerSelected6();
            });

            document.getElementById('7').addEventListener("click", (e) => {
                elementSelectedD = 7;
                DinnerSelected7();
            });

            document.getElementById('8').addEventListener("click", (e) => {
                elementSelectedD = 8;
                DinnerSelected8();
            });

            document.getElementById('9').addEventListener("click", (e) => {
                elementSelectedD = 9;
                DinnerSelected9();
            });

            document.getElementById('10').addEventListener("click", (e) => {
                elementSelectedD = 10;
                DinnerSelected10();
            });

            document.getElementById('11').addEventListener("click", (e) => {
                elementSelectedD = 11;
                DinnerSelected11();
            });

            document.getElementById('12').addEventListener("click", (e) => {
                elementSelectedD = 12;
                DinnerSelected12();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedD === -1) {
                    return
                }
                console.log(elementSelectedD);
                console.log(recipesArray[0]);
                localStorage.setItem('mondayDinner', JSON.stringify(recipesArray[elementSelectedD]));
                console.log(localStorage);
                elementSelectedD = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("mondayDinner").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " Tuesday Dinner"---------------------------------------------- 
    document.getElementById("tuesdayDinner").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpDinner(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('0').addEventListener("click", (e) => {
                elementSelectedD = 0;
                DinnerSelected0();
            });

            document.getElementById('1').addEventListener("click", (e) => {
                elementSelectedD = 1;
                DinnerSelected1();
            });

            document.getElementById('2').addEventListener("click", (e) => {
                elementSelectedD = 2;
                DinnerSelected2();
            });

            document.getElementById('3').addEventListener("click", (e) => {
                elementSelectedD = 3;
                DinnerSelected3();
            });

            document.getElementById('4').addEventListener("click", (e) => {
                elementSelectedD = 4;
                DinnerSelected4();
            });

            document.getElementById('5').addEventListener("click", (e) => {
                elementSelectedD = 5;
                DinnerSelected5();
            });

            document.getElementById('6').addEventListener("click", (e) => {
                elementSelectedD = 6;
                DinnerSelected6();
            });

            document.getElementById('7').addEventListener("click", (e) => {
                elementSelectedD = 7;
                DinnerSelected7();
            });

            document.getElementById('8').addEventListener("click", (e) => {
                elementSelectedD = 8;
                DinnerSelected8();
            });

            document.getElementById('9').addEventListener("click", (e) => {
                elementSelectedD = 9;
                DinnerSelected9();
            });

            document.getElementById('10').addEventListener("click", (e) => {
                elementSelectedD = 10;
                DinnerSelected10();
            });

            document.getElementById('11').addEventListener("click", (e) => {
                elementSelectedD = 11;
                DinnerSelected11();
            });

            document.getElementById('12').addEventListener("click", (e) => {
                elementSelectedD = 12;
                DinnerSelected12();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedD === -1) {
                    return
                }
                console.log(elementSelectedD);
                console.log(recipesArray[0]);
                localStorage.setItem('tuesdayDinner', JSON.stringify(recipesArray[elementSelectedD]));
                console.log(localStorage);
                elementSelectedD = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("tuesdayDinner").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " wednesday Dinner"---------------------------------------------- 
    document.getElementById("wednesdayDinner").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpDinner(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('0').addEventListener("click", (e) => {
                elementSelectedD = 0;
                DinnerSelected0();
            });

            document.getElementById('1').addEventListener("click", (e) => {
                elementSelectedD = 1;
                DinnerSelected1();
            });

            document.getElementById('2').addEventListener("click", (e) => {
                elementSelectedD = 2;
                DinnerSelected2();
            });

            document.getElementById('3').addEventListener("click", (e) => {
                elementSelectedD = 3;
                DinnerSelected3();
            });

            document.getElementById('4').addEventListener("click", (e) => {
                elementSelectedD = 4;
                DinnerSelected4();
            });

            document.getElementById('5').addEventListener("click", (e) => {
                elementSelectedD = 5;
                DinnerSelected5();
            });

            document.getElementById('6').addEventListener("click", (e) => {
                elementSelectedD = 6;
                DinnerSelected6();
            });

            document.getElementById('7').addEventListener("click", (e) => {
                elementSelectedD = 7;
                DinnerSelected7();
            });

            document.getElementById('8').addEventListener("click", (e) => {
                elementSelectedD = 8;
                DinnerSelected8();
            });

            document.getElementById('9').addEventListener("click", (e) => {
                elementSelectedD = 9;
                DinnerSelected9();
            });

            document.getElementById('10').addEventListener("click", (e) => {
                elementSelectedD = 10;
                DinnerSelected10();
            });

            document.getElementById('11').addEventListener("click", (e) => {
                elementSelectedD = 11;
                DinnerSelected11();
            });

            document.getElementById('12').addEventListener("click", (e) => {
                elementSelectedD = 12;
                DinnerSelected12();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedD === -1) {
                    return
                }
                console.log(elementSelectedD);
                console.log(recipesArray[0]);
                localStorage.setItem('wednesdayDinner', JSON.stringify(recipesArray[elementSelectedD]));
                console.log(localStorage);
                elementSelectedD = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("wednesdayDinner").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " Thursday Dinner"---------------------------------------------- 
    document.getElementById("thursdayDinner").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpDinner(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('0').addEventListener("click", (e) => {
                elementSelectedD = 0;
                DinnerSelected0();
            });

            document.getElementById('1').addEventListener("click", (e) => {
                elementSelectedD = 1;
                DinnerSelected1();
            });

            document.getElementById('2').addEventListener("click", (e) => {
                elementSelectedD = 2;
                DinnerSelected2();
            });

            document.getElementById('3').addEventListener("click", (e) => {
                elementSelectedD = 3;
                DinnerSelected3();
            });

            document.getElementById('4').addEventListener("click", (e) => {
                elementSelectedD = 4;
                DinnerSelected4();
            });

            document.getElementById('5').addEventListener("click", (e) => {
                elementSelectedD = 5;
                DinnerSelected5();
            });

            document.getElementById('6').addEventListener("click", (e) => {
                elementSelectedD = 6;
                DinnerSelected6();
            });

            document.getElementById('7').addEventListener("click", (e) => {
                elementSelectedD = 7;
                DinnerSelected7();
            });

            document.getElementById('8').addEventListener("click", (e) => {
                elementSelectedD = 8;
                DinnerSelected8();
            });

            document.getElementById('9').addEventListener("click", (e) => {
                elementSelectedD = 9;
                DinnerSelected9();
            });

            document.getElementById('10').addEventListener("click", (e) => {
                elementSelectedD = 10;
                DinnerSelected10();
            });

            document.getElementById('11').addEventListener("click", (e) => {
                elementSelectedD = 11;
                DinnerSelected11();
            });

            document.getElementById('12').addEventListener("click", (e) => {
                elementSelectedD = 12;
                DinnerSelected12();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedD === -1) {
                    return
                }
                console.log(elementSelectedD);
                console.log(recipesArray[0]);
                localStorage.setItem('thursdayDinner', JSON.stringify(recipesArray[elementSelectedD]));
                console.log(localStorage);
                elementSelectedD = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("thursdayDinner").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " Friday Dinner"---------------------------------------------- 
    document.getElementById("fridayDinner").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpDinner(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('0').addEventListener("click", (e) => {
                elementSelectedD = 0;
                DinnerSelected0();
            });

            document.getElementById('1').addEventListener("click", (e) => {
                elementSelectedD = 1;
                DinnerSelected1();
            });

            document.getElementById('2').addEventListener("click", (e) => {
                elementSelectedD = 2;
                DinnerSelected2();
            });

            document.getElementById('3').addEventListener("click", (e) => {
                elementSelectedD = 3;
                DinnerSelected3();
            });

            document.getElementById('4').addEventListener("click", (e) => {
                elementSelectedD = 4;
                DinnerSelected4();
            });

            document.getElementById('5').addEventListener("click", (e) => {
                elementSelectedD = 5;
                DinnerSelected5();
            });

            document.getElementById('6').addEventListener("click", (e) => {
                elementSelectedD = 6;
                DinnerSelected6();
            });

            document.getElementById('7').addEventListener("click", (e) => {
                elementSelectedD = 7;
                DinnerSelected7();
            });

            document.getElementById('8').addEventListener("click", (e) => {
                elementSelectedD = 8;
                DinnerSelected8();
            });

            document.getElementById('9').addEventListener("click", (e) => {
                elementSelectedD = 9;
                DinnerSelected9();
            });

            document.getElementById('10').addEventListener("click", (e) => {
                elementSelectedD = 10;
                DinnerSelected10();
            });

            document.getElementById('11').addEventListener("click", (e) => {
                elementSelectedD = 11;
                DinnerSelected11();
            });

            document.getElementById('12').addEventListener("click", (e) => {
                elementSelectedD = 12;
                DinnerSelected12();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedD === -1) {
                    return
                }
                console.log(elementSelectedD);
                console.log(recipesArray[0]);
                localStorage.setItem('fridayDinner', JSON.stringify(recipesArray[elementSelectedD]));
                console.log(localStorage);
                elementSelectedD = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("fridayDinner").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " Saturday Dinner"---------------------------------------------- 
    document.getElementById("saturdayDinner").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpDinner(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('0').addEventListener("click", (e) => {
                elementSelectedD = 0;
                DinnerSelected0();
            });

            document.getElementById('1').addEventListener("click", (e) => {
                elementSelectedD = 1;
                DinnerSelected1();
            });

            document.getElementById('2').addEventListener("click", (e) => {
                elementSelectedD = 2;
                DinnerSelected2();
            });

            document.getElementById('3').addEventListener("click", (e) => {
                elementSelectedD = 3;
                DinnerSelected3();
            });

            document.getElementById('4').addEventListener("click", (e) => {
                elementSelectedD = 4;
                DinnerSelected4();
            });

            document.getElementById('5').addEventListener("click", (e) => {
                elementSelectedD = 5;
                DinnerSelected5();
            });

            document.getElementById('6').addEventListener("click", (e) => {
                elementSelectedD = 6;
                DinnerSelected6();
            });

            document.getElementById('7').addEventListener("click", (e) => {
                elementSelectedD = 7;
                DinnerSelected7();
            });

            document.getElementById('8').addEventListener("click", (e) => {
                elementSelectedD = 8;
                DinnerSelected8();
            });

            document.getElementById('9').addEventListener("click", (e) => {
                elementSelectedD = 9;
                DinnerSelected9();
            });

            document.getElementById('10').addEventListener("click", (e) => {
                elementSelectedD = 10;
                DinnerSelected10();
            });

            document.getElementById('11').addEventListener("click", (e) => {
                elementSelectedD = 11;
                DinnerSelected11();
            });

            document.getElementById('12').addEventListener("click", (e) => {
                elementSelectedD = 12;
                DinnerSelected12();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedD === -1) {
                    return
                }
                console.log(elementSelectedD);
                console.log(recipesArray[0]);
                localStorage.setItem('saturdayDinner', JSON.stringify(recipesArray[elementSelectedD]));
                console.log(localStorage);
                elementSelectedD = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("saturdayDinner").classList.add("buttonSelected");;
            });

        }, 400)
    });

    // --------------------Apparition popUp " Sunday Dinner"---------------------------------------------- 
    document.getElementById("sundayDinner").addEventListener("click", () => {
        setTimeout(() => {
            createPopUpDinner(popUp);

            document.getElementById('return').addEventListener('click', () => {
                document.getElementById('popUpCard').remove();
            })

            document.getElementById('0').addEventListener("click", (e) => {
                elementSelectedD = 0;
                DinnerSelected0();
            });

            document.getElementById('1').addEventListener("click", (e) => {
                elementSelectedD = 1;
                DinnerSelected1();
            });

            document.getElementById('2').addEventListener("click", (e) => {
                elementSelectedD = 2;
                DinnerSelected2();
            });

            document.getElementById('3').addEventListener("click", (e) => {
                elementSelectedD = 3;
                DinnerSelected3();
            });

            document.getElementById('4').addEventListener("click", (e) => {
                elementSelectedD = 4;
                DinnerSelected4();
            });

            document.getElementById('5').addEventListener("click", (e) => {
                elementSelectedD = 5;
                DinnerSelected5();
            });

            document.getElementById('6').addEventListener("click", (e) => {
                elementSelectedD = 6;
                DinnerSelected6();
            });

            document.getElementById('7').addEventListener("click", (e) => {
                elementSelectedD = 7;
                DinnerSelected7();
            });

            document.getElementById('8').addEventListener("click", (e) => {
                elementSelectedD = 8;
                DinnerSelected8();
            });

            document.getElementById('9').addEventListener("click", (e) => {
                elementSelectedD = 9;
                DinnerSelected9();
            });

            document.getElementById('10').addEventListener("click", (e) => {
                elementSelectedD = 10;
                DinnerSelected10();
            });

            document.getElementById('11').addEventListener("click", (e) => {
                elementSelectedD = 11;
                DinnerSelected11();
            });

            document.getElementById('12').addEventListener("click", (e) => {
                elementSelectedD = 12;
                DinnerSelected12();
            });

            document.getElementById("popUpButtonValidate").addEventListener("click", () => {
                if (elementSelectedD === -1) {
                    return
                }
                console.log(elementSelectedD);
                console.log(recipesArray[0]);
                localStorage.setItem('sundayDinner', JSON.stringify(recipesArray[elementSelectedD]));
                console.log(localStorage);
                elementSelectedD = -1;
                document.getElementById('popUpCard').remove();
                document.getElementById("sundayDinner").classList.add("buttonSelected");;
            });

        }, 400)
    });

    //  Bouton valider 
    document.getElementById("validateButton").addEventListener("click", () => {
        window.location.href = 'https://alexispennel.github.io/Projet-M/html/MyWeek.html'
    });


};


main();
