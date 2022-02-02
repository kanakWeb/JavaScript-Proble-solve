function duplacteArrayRemove(names) {
    const Uniqe = [];

    for (const element of names) {
        if (Uniqe.indexOf(element) == -1) {
            Uniqe.push(element);
        }
    }
    return Uniqe
}

const Names = ["kanak", "karim", "Rahim", "Bhim", "alim", "karim", "kanak", "Rahim"];
const allNames = duplacteArrayRemove(Names)
console.log(allNames)