function extractEmailInformation(email) {
    const user = email.split("@")[0];
    const domain = email.split("@")[1];
    const isBrazil = domain.endsWith(".br") ? "sim": "nao";

    return `Usuario: ${user} \nDominio: ${domain}\nBrasileiro: ${isBrazil}`
    
}

console.log(extractEmailInformation("joao.silva23@yahoo.com.br"));
console.log(extractEmailInformation("maria123@gmail.com"));

