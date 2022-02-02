function WoodCalcuator(tableQuantity, chairQuantity, bedQuantity) {
    const perTableWood = 3;
    const perChairWood = 10;
    const perBedWood = 50;


    const tableWoodQuantity = tableQuantity * perTableWood;
    const chairWoodQuantity = chairQuantity * perChairWood;
    const bedWooodQuantity = bedQuantity * perBedWood;

    const totalWoodQuantity = tableWoodQuantity + chairWoodQuantity + bedWooodQuantity;

    return totalWoodQuantity

}

const totalWood = WoodCalcuator(1, 1, 1);
console.log(totalWood);