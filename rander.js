

function renderCars(Cars) {
    const li = document.createElement('li');
    li.textContent = Cars.description;
    li.title = Cars.description;

    const h3 = document.createElement('h3');
    h3.textContent = Cars.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = Cars.image;
    img.alt = Cars.name + 'image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    p.textContent = Cars.price
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = Cars.code;
    p.appendChild(button);

    li.appendChild(p);
return li;
};


export default renderCars;