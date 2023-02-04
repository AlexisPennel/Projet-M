const main = () => {

    //  Monday 
    const mondayBreakfast = JSON.parse(localStorage.getItem("mondayBreakfast"));
    const mondayLunch = JSON.parse(localStorage.getItem("mondayLunch"));
    const mondayDinner = JSON.parse(localStorage.getItem("mondayDinner"))

    document.getElementById('mB').innerHTML = `${mondayBreakfast.name}`
    document.getElementById('mL').innerHTML = `${mondayLunch.name}`
    document.getElementById('mD').innerHTML = `${mondayDinner.name}`

    // Tuesday 
    const tuesdayBreakfast = JSON.parse(localStorage.getItem("tuesdayBreakfast"));
    const tuesdayLunch = JSON.parse(localStorage.getItem("tuesdayLunch"));
    const tuesdayDinner = JSON.parse(localStorage.getItem("tuesdayDinner"))

    document.getElementById('tB').innerHTML = `${tuesdayBreakfast.name}`
    document.getElementById('tL').innerHTML = `${tuesdayLunch.name}`
    document.getElementById('tD').innerHTML = `${tuesdayDinner.name}`

    // Wednesday 

    const wednesdayBreakfast = JSON.parse(localStorage.getItem("wednesdayBreakfast"));
    const wednesdayLunch = JSON.parse(localStorage.getItem("wednesdayLunch"));
    const wednesdayDinner = JSON.parse(localStorage.getItem("wednesdayDinner"))

    document.getElementById('wB').innerHTML = `${wednesdayBreakfast.name}`
    document.getElementById('wL').innerHTML = `${wednesdayLunch.name}`
    document.getElementById('wD').innerHTML = `${wednesdayDinner.name}`

    // Thursday

    const thursdayBreakfast = JSON.parse(localStorage.getItem("thursdayBreakfast"));
    const thursdayLunch = JSON.parse(localStorage.getItem("thursdayLunch"));
    const thursdayDinner = JSON.parse(localStorage.getItem("thursdayDinner"))

    document.getElementById('thB').innerHTML = `${thursdayBreakfast.name}`
    document.getElementById('thL').innerHTML = `${thursdayLunch.name}`
    document.getElementById('thD').innerHTML = `${thursdayDinner.name}`

    // Friday 
    const fridayBreakfast = JSON.parse(localStorage.getItem("fridayBreakfast"));
    const fridayLunch = JSON.parse(localStorage.getItem("fridayLunch"));
    const fridayDinner = JSON.parse(localStorage.getItem("fridayDinner"))

    document.getElementById('fB').innerHTML = `${fridayBreakfast.name}`
    document.getElementById('fL').innerHTML = `${fridayLunch.name}`
    document.getElementById('fD').innerHTML = `${fridayDinner.name}`

    //Saturday

    const saturdayBreakfast = JSON.parse(localStorage.getItem("saturdayBreakfast"));
    const saturdayLunch = JSON.parse(localStorage.getItem("saturdayLunch"));
    const saturdayDinner = JSON.parse(localStorage.getItem("saturdayDinner"))

    document.getElementById('sB').innerHTML = `${saturdayBreakfast.name}`
    document.getElementById('sL').innerHTML = `${saturdayLunch.name}`
    document.getElementById('sD').innerHTML = `${saturdayDinner.name}`

    //Sunday

    const sundayBreakfast = JSON.parse(localStorage.getItem("sundayBreakfast"));
    const sundayLunch = JSON.parse(localStorage.getItem("sundayLunch"));
    const sundayDinner = JSON.parse(localStorage.getItem("sundayDinner"))

    document.getElementById('suB').innerHTML = `${sundayBreakfast.name}`
    document.getElementById('suL').innerHTML = `${sundayLunch.name}`
    document.getElementById('suD').innerHTML = `${sundayDinner.name}`
};



main()