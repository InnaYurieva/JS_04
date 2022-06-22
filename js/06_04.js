/* Задание 6
Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).*/

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProdcuts, productName) {
    
    for (let index = 0; index < allProdcuts.length; index++) {
        const element = allProdcuts[index];
        if(Object.values(element)[0] === productName) {
            return Object.values(element)[1] * Object.values(element)[2]
        }
    }
};


console.log(calculateTotalPrice(products, 'Радар')); // 5200
console.log(calculateTotalPrice(products, 'Дроид')); // 2800
/* console.log(calculateTotalPrice(products, 'Сканер'));
console.log(calculateTotalPrice(products, 'Захват')); */