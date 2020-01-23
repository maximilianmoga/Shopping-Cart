import Cars from ".cars.js";
import products from "./data/cars";

function renderFruit(Cars) {
    const li = document.createElement('li');
    li.className = Cars.category;
    li.title = Cars.description;

    const h3 = document.createElement('h3');
    h3.textContent = Cars.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + Cars.image;
    img.alt = Cars.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + Cars.price.toFixed(2);
};
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = Cars.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;


export default products;