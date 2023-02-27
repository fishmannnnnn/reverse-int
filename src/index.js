module.exports = function reverse(n) {
    return String(n)
        .split("")
        .filter((i) => Number(i) || i == "0")
        .reverse()
        .join("");
};
