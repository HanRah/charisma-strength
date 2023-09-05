const strength = (num) => {
    let product = num;
    let steps = 0;

    while (product >= 10) {
        steps++;
        const splitted = product.toString().split("").map(digit => parseInt(digit));
        product = splitted.reduce((acc, curr) => acc * curr, 1);
    }

    console.log(steps, "STEP");
    return product;
}

for (let member of [39, 999]) {
    console.log("Input:", member);
    const product = strength(member)
    console.log("Result:", product);
    console.log("--------------")
}
