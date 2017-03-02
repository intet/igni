export class Utils {
    static shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    static randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}