const faker = require("faker");

const produkti = [];

for (let i =0; i<10; i++) {
    produkti.push({
        name: faker.commerce.productName(),
        color: faker.commerce.color(),
        material: faker.commerce.productMaterial(),
        price: faker.commerce.price(),
    })
};

console.log (produkti)

module.exports = produkti