function triangle(quantity) {
    let result = '';
    for (let count = 0; count < quantity; count++) {
        result += '#';
    }
    return result;
}

for (let count = 0; count < 8; count++) {
    console.log(triangle(count));
}
