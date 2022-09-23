import axios from 'axios';

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
