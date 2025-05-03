import { Cart } from '../src/Cart';
import { Movie } from '../src/Movie';

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test('add digital item should not allow duplicates', () => {
    const movie = new Movie(1, 'Мстители', 200, 2012, 'США', 'фантастика', 137);
    cart.add({ ...movie, isDigital: true });
    cart.add({ ...movie, isDigital: true });

    expect(cart['items'].length).toBe(1);
  });

  test('calculateTotalPrice should return correct total price', () => {
    const movie = new Movie(1, 'Мстители', 200, 2012, 'США', 'фантастика', 137);
    cart.add(movie);

    expect(cart.calculateTotalPrice()).toBe(200);
  });

  test('calculateTotalPriceWithDiscount should apply discount correctly', () => {
    const movie = new Movie(1, 'Мстители', 200, 2012, 'США', 'фантастика', 137);
    cart.add(movie);

    expect(cart.calculateTotalPriceWithDiscount(10)).toBe(180); // 200 * 0.9
  });

  test('removeById should remove item by id', () => {
    const movie = new Movie(1, 'Мстители', 200, 2012, 'США', 'фантастика', 137);
    cart.add(movie);

    cart.removeById(1);

    expect(cart['items'].length).toBe(0);
  });

  test('decreaseQuantity should reduce physical item count', () => {
    const phone = { id: 'phone1', price: 800, isDigital: false };
    cart.add(phone);
    cart.add(phone);

    expect(cart['items'].length).toBe(2);

    cart.decreaseQuantity('phone1');
    expect(cart['items'].length).toBe(1);
  });
});