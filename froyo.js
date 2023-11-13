function trackFroyoFlavors(userInput) {
    const froyoFlavors = userInput.split(",");
    const chosenFlavors = {};

    for (const flavor of froyoFlavors) {
        const trimmedFlavor = flavor.trim();
        chosenFlavors[trimmedFlavor] = (chosenFlavors[trimmedFlavor] || 0) + 1;
    }

    return chosenFlavors;
}

const flavorsInput = prompt("Enter the flavors of Froyo you'd like to order, just put a comma in between each flavor:");

const chosenFlavors = trackFroyoFlavors(flavorsInput);

console.log("Input Froyo Flavors:", flavorsInput);

const flavorsDiv = document.getElementById("flavors");
flavorsDiv.innerHTML = "<h2>Chosen Froyo Flavors:</h2><ul>";
for (const flavor in chosenFlavors) {
    flavorsDiv.innerHTML += `<li>${flavor}: ${chosenFlavors[flavor]}</li>`;
}
flavorsDiv.innerHTML += "</ul>";
