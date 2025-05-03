import { Cart } from './Cart';
import { Movie } from './Movie';

const cart = new Cart();

const movie = new Movie(1, 'Мстители', 200, 2012, 'США', 'фантастика', 137);
cart.add(movie);

console.log('Сумма покупок:', cart.calculateTotalPrice());
console.log('Сумма с учётом скидки (10%):', cart.calculateTotalPriceWithDiscount(10));