import findById from '../commons/utils.js';
import cars from '../data/cars.js';

const test = QUnit.test;

test('findByIdTest', function(assert){
const obj = {
    id: 'Lamborghini',
    name: 'Lamborghini',
    image: 'https://www.thesun.co.uk/wp-content/uploads/2018/11/Sun_Instagram_image_download_yiannimize_152719-1.jpg',
    description: '6.5l v12 730hp under 3.0sec 0-60mph',
    category: 'super-car',
    price: '$ 250000.00',
    cost: '$ 150000.00',
}
const car = {
    id: 'Porsche',
    name: 'Porsche gt3 rs',
    image: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/15q1/654924/2016-porsche-911-gt3-rs-photos-and-info-news-car-and-driver-photo-656941-s-original.jpg?fill=2:1&resize=480:*',
    description: '4.0l v8 540whp 3.0sec 0-60mph',
    category: 'super-car',
    price: '$ 143000.00',
    cost: '$ 100000.00',
}
const car1 = {
        id: 'Ferrari',
        name: 'Ferrari LaFerrari',
        image: 'https://file.kelleybluebookimages.com/kbb/images/content/editorial/slideshow/2014-ferrari-laferrari/658422_top-front_modifiche-600-001.jpg', 
        description: '6.3l 949whp with v12 engine 2.4sec 0-60mph',
        price: '$ 3.5M',
        cost: '$1.5M',
}
const car2 = {
    id: 'Audi',
    name: 'Audi r8',
    image: 'https://www.thesun.co.uk/wp-content/uploads/2018/11/Sun_Instagram_image_download_yiannimize_152719-1.jpg',
    description: '6.5l v12 730hp under 3.0sec 0-60mph',
    category: 'super-car',
    price: '$ 250000.00',
    cost: '$ 150000.00',
}
const car3 = {
    id: 'Bmw',
    name: 'Bmw m4',
    image: 'https://www.automobilemag.com/uploads/sites/11/2018/10/2018-BMW-M4-Competition-Front-Three-Quarters-.jpg?fit=around%7C875:492',
    description: '3.0l inline 6 twin-turbo 450hp 4.0sec 0-60',
    price: '$ 69450',
    cost: '$ 60000',
}

const array = cars
const id = 'Lamborghini'
const id = 'Porsche'
const id = 'Ferrari'
const id = 'Audi'
const id = 'bmw'

const foundObject = findById(array,id)



assert.equal(foundObject, obj)
});