function FoBar(num) {

    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FoBar")
        } else if (i % 3 == 0) {
            console.log("Fo")
        } else if (i % 3 == 0 && i % 5 == 0) {
            console.log("Bar")
        }
        console.log(i)
    }

}


const PassValue = FoBar(50);