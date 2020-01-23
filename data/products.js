import cars from '../cars.js';
import rander from '../rander';

const list = document.getElementById('Cars');

for(let i = 0; i < cars.length; i++) {
    const cars = cars[i];
    const dom = renderCars(cars);
    list.appendChild(dom);
};