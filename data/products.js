import cars from '../data/cars.js';
import rander from '../rander.js';

const list = document.getElementById('cars');

for(let i = 0; i < cars.length; i++) {
    const car = cars[i];
    const dom = rander(car);
    list.appendChild(dom);
};