import cars from './data/cars.js';
import cart from './cart.js'

import { findById, calcOrderTotal, toUSD } from 
import render from './rander.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const cars = findById(cars, lineItem.id);
    const dom = render(lineItem, cars);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, cars);
orderTotalCell.textContent = toUSD(orderTotal);