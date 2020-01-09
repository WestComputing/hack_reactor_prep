function chessboard(size = 8) {
    let result = '', squares;
    for (let row = 0; row < size; row++) {
        // Alternate starting row with black and white squares
        if (row % 2) {
            squares = '# '
        } else {
            squares = ' #';
        }
        for (let column = 0; column < size; column++) {
            result += squares[column % 2];
        }
        result += '\n';
    }
    return result;
}

console.log(chessboard());
