
const removeSelectedButton = (name) => {
    if (name === "monday") {
        document.getElementById("mondayLunch").classList.remove("buttonSelected");
        return
    }
    if (name === "tueday") {
        document.getElementById("tuesdayLunch").classList.remove("buttonSelected");
        return
    }

    if (name === "wednesday") {
        document.getElementById("wednesdayLunch").classList.remove("buttonSelected");
        return
    }

    if (name === "thursday") {
        document.getElementById("thursdayLunch").classList.remove("buttonSelected");
        return
    }

    if (name === "friday") {
        document.getElementById("fridayLunch").classList.remove("buttonSelected");
        return
    }

    if (name === "saturday") {
        document.getElementById("saturdayLunch").classList.remove("buttonSelected");
        return
    }

    if (name === "sunday") {
        document.getElementById("sundayLunch").classList.remove("buttonSelected");
        return
    }

    document.getElementById("mondayBreakfast").classList.remove("buttonSelected");
    document.getElementById("tuesdayBreakfast").classList.remove("buttonSelected");
    document.getElementById("wednesdayBreakfast").classList.remove("buttonSelected");
    document.getElementById("thursdayBreakfast").classList.remove("buttonSelected");
    document.getElementById("fridayBreakfast").classList.remove("buttonSelected");
    document.getElementById("saturdayBreakfast").classList.remove("buttonSelected");
    document.getElementById("sundayBreakfast").classList.remove("buttonSelected");

    document.getElementById("mondayLunch").classList.remove("buttonSelected");
    document.getElementById("tuesdayLunch").classList.remove("buttonSelected");
    document.getElementById("wednesdayLunch").classList.remove("buttonSelected");
    document.getElementById("thursdayLunch").classList.remove("buttonSelected");
    document.getElementById("fridayLunch").classList.remove("buttonSelected");
    document.getElementById("saturdayLunch").classList.remove("buttonSelected");
    document.getElementById("sundayLunch").classList.remove("buttonSelected");

    document.getElementById("mondayDinner").classList.remove("buttonSelected");
    document.getElementById("tuesdayDinner").classList.remove("buttonSelected");
    document.getElementById("wednesdayDinner").classList.remove("buttonSelected");
    document.getElementById("thursdayDinner").classList.remove("buttonSelected");
    document.getElementById("fridayDinner").classList.remove("buttonSelected");
    document.getElementById("saturdayDinner").classList.remove("buttonSelected");
    document.getElementById("sundayDinner").classList.remove("buttonSelected");
};




export { removeSelectedButton };