const getDeclension = (count: number, words: string[], cases = [2, 0, 1, 1, 1, 2]) =>
    words[count % 100 > 4 && count % 100 < 20 ? 2 : cases[count % 10 < 5 ? count % 10 : 5]];

export default getDeclension;
