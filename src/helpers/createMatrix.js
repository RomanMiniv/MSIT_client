export const createMatrix = (array, number) => {
    if (!Array.isArray(array) || !array.length) {
        return array;
    }

    const matrix = [];

    for (let i = 0; i < Math.ceil(array.length / number); i++) {
        matrix.push([]);
    }

    for (let i = 0, j = 0; i < array.length; i++) {
        if (i !== 0 && (i % number) === 0) {
            j++;
        }
        matrix[j].push(array[i]);
    }

    return matrix;
}
