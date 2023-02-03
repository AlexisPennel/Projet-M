// document.getElementById("tuesdayLunch").classList.add("buttonSelected");

const addSelectedButton = (name) => {
    if (name === "monday") {
        document.getElementById("mondayLunch").classList.add("buttonSelected");
    }
    if (name === "tueday") {
        document.getElementById("tuesdayLunch").classList.add("buttonSelected");
    }

    if (name === "wednesday") {
        document.getElementById("wednesdayLunch").classList.add("buttonSelected");
    }

    if (name === "thursday") {
        document.getElementById("thursdayLunch").classList.add("buttonSelected");
    }

    if (name === "friday") {
        document.getElementById("fridayLunch").classList.add("buttonSelected");
    }

    if (name === "saturday") {
        document.getElementById("saturdayLunch").classList.add("buttonSelected");
    }

    if (name === "sunday") {
        document.getElementById("sundayLunch").classList.add("buttonSelected");
    }
};

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

    document.getElementById("mondayLunch").classList.remove("buttonSelected");
    document.getElementById("tuesdayLunch").classList.remove("buttonSelected");
    document.getElementById("wednesdayLunch").classList.remove("buttonSelected");
    document.getElementById("thursdayLunch").classList.remove("buttonSelected");
    document.getElementById("fridayLunch").classList.remove("buttonSelected");
    document.getElementById("saturdayLunch").classList.remove("buttonSelected");
    document.getElementById("sundayLunch").classList.remove("buttonSelected");
};


const removeSelectedRecipe = (day) => {
    if (day === "tuesday") {
        document.getElementById("0tuesday").classList.remove("popUpCardSelect");
        document.getElementById("1tuesday").classList.remove("popUpCardSelect");
        document.getElementById("2tuesday").classList.remove("popUpCardSelect");
        document.getElementById("3tuesday").classList.remove("popUpCardSelect");
        document.getElementById("4tuesday").classList.remove("popUpCardSelect");
        document.getElementById("5tuesday").classList.remove("popUpCardSelect");
        document.getElementById("6tuesday").classList.remove("popUpCardSelect");
        document.getElementById("7tuesday").classList.remove("popUpCardSelect");
        document.getElementById("8tuesday").classList.remove("popUpCardSelect");
        document.getElementById("9tuesday").classList.remove("popUpCardSelect");
        document.getElementById("10tuesday").classList.remove("popUpCardSelect");
        document.getElementById("11tuesday").classList.remove("popUpCardSelect");
        return
    };

    document.getElementById("0").classList.remove("popUpCardSelect");
    document.getElementById("1").classList.remove("popUpCardSelect");
    document.getElementById("2").classList.remove("popUpCardSelect");
    document.getElementById("3").classList.remove("popUpCardSelect");
    document.getElementById("4").classList.remove("popUpCardSelect");
    document.getElementById("5").classList.remove("popUpCardSelect");
    document.getElementById("6").classList.remove("popUpCardSelect");
    document.getElementById("7").classList.remove("popUpCardSelect");
    document.getElementById("8").classList.remove("popUpCardSelect");
    document.getElementById("9").classList.remove("popUpCardSelect");
    document.getElementById("10").classList.remove("popUpCardSelect");
    document.getElementById("11").classList.remove("popUpCardSelect");
};

const removeVisibilityHidden = (day) => {
    if (day === "tuesday") {
        document.getElementById("0tuesday").classList.remove("visibilityHidden");
        document.getElementById("1tuesday").classList.remove("visibilityHidden");
        document.getElementById("2tuesday").classList.remove("visibilityHidden");
        document.getElementById("3tuesday").classList.remove("visibilityHidden");
        document.getElementById("4tuesday").classList.remove("visibilityHidden");
        document.getElementById("5tuesday").classList.remove("visibilityHidden");
        document.getElementById("6tuesday").classList.remove("visibilityHidden");
        document.getElementById("7tuesday").classList.remove("visibilityHidden");
        document.getElementById("8tuesday").classList.remove("visibilityHidden");
        document.getElementById("9tuesday").classList.remove("visibilityHidden");
        document.getElementById("10tuesday").classList.remove("visibilityHidden");
        document.getElementById("11tuesday").classList.remove("visibilityHidden");
        return
    };
    document.getElementById("0").classList.remove("visibilityHidden");
    document.getElementById("1").classList.remove("visibilityHidden");
    document.getElementById("2").classList.remove("visibilityHidden");
    document.getElementById("3").classList.remove("visibilityHidden");
    document.getElementById("4").classList.remove("visibilityHidden");
    document.getElementById("5").classList.remove("visibilityHidden");
    document.getElementById("6").classList.remove("visibilityHidden");
    document.getElementById("7").classList.remove("visibilityHidden");
    document.getElementById("8").classList.remove("visibilityHidden");
    document.getElementById("9").classList.remove("visibilityHidden");
    document.getElementById("10").classList.remove("visibilityHidden");
    document.getElementById("11").classList.remove("visibilityHidden");

};

export { addSelectedButton,removeSelectedButton, removeSelectedRecipe, removeVisibilityHidden };