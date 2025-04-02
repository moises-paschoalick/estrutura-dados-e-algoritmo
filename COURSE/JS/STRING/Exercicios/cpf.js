function removeNonDigits(str) {
    const regex = /\D/g;
    return str.replace(regex, "");
    
}

console.log(removeNonDigits("87409217293"));
console.log(removeNonDigits("874092172-93"));
console.log(removeNonDigits("874.092.172-93"));
