import { Movie } from '../src/Movie';

describe('Movie', () => {
  test('should create a movie with correct properties', () => {
    const movie = new Movie(1, 'Мстители', 200, 2012, 'США', 'фантастика', 137);

    expect(movie.id).toBe(1);
    expect(movie.title).toBe('Мстители');
    expect(movie.price).toBe(200);
    expect(movie.year).toBe(2012);
    expect(movie.country).toBe('США');
    expect(movie.genre).toBe('фантастика');
    expect(movie.duration).toBe(137);
  });

  test('toString should return correct string representation', () => {
    const movie = new Movie(1, 'Мстители', 200, 2012, 'США', 'фантастика', 137);

    expect(movie.toString()).toBe('Мстители (2012)');
  });
});