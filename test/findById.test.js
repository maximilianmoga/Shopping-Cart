import findById, { calcLineItem } from '../commons/utils.js';
import cars from '../data/cars.js';

const test = QUnit.test;

test('findByIdTest', function(assert){
const obj = {
    id: 'Ferrari',
    name: 'Ferrari LaFerrari',
    image: 'https://file.kelleybluebookimages.com/kbb/images/content/editorial/slideshow/2014-ferrari-laferrari/658422_top-front_modifiche-600-001.jpg', 
    description: '6.3l 949whp with v12 engine 2.4sec 0-60mph',
    price: '$ 3.5M',
    cost: '$1.5M',
};
console.log(cars)
const array = cars
const id = 'Ferrari';

const foundObject = findById(array,id);



assert.deepEqual(foundObject, obj)
});

test('calculate line total', (assert) => {
    
    const quantity = 3;
    const price = 3.5;
    const expected = 1.5;


    const total = calcLineTotal(quantity, price);


    assert.equal(total, expected);
});    

test('calculate line total', (assert) => {
    
    const quantity = 3;
    const price = 2.01;
    const expected = 6.03;


    const total = calcLineTotal(quantity, price);

    assert.equal(total, expected);
});


test('calculate order total', (assert) => {

    const expected = 22.30;


    const orderTotal = calcOrderTotal(cart, cars);


    assert.equal(orderTotal, expected);
});
