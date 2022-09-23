import axios from 'axios';

/**
 * Function to get the movies
 *
 * @function
 * @example
 *
 * return Array of Movies
 *
 * @returns {Array}
 * @author Faizan Ahmad <a-f.a@outlook.com>
 * @version 1.0.0
 */

const getMovies = async (planet) => {
  const { films } = planet;

  const movies = [];
  for (let i = 0; i < films.length; i++) {
    const {
      data: { title },
    } = await axios.get(films[i]);
    movies.push(title);
  }

  return movies;
};

export default getMovies;
