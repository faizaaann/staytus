import axios from 'axios';
import { baseURL } from '../api';

// Classification of the specie on which planets are being filtered
export const specieClassification = 'mammal';

const getPlanets = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(`${baseURL}/planets/`);

    const planetsAppearedInMovies = results?.filter(
      (planet) => planet.films?.length > 0
    );

    const desiredPlanets = [];

    for (let f = 0; f < planetsAppearedInMovies.length; f++) {
      const planet = planetsAppearedInMovies[f];
      if (planet.residents?.length) {
        for (let i = 0; i < planet.residents.length; i++) {
          const {
            data: { species },
          } = await axios.get(planet.residents[i]);
          if (species.length) {
            for (let j = 0; j < species.length; j++) {
              const {
                data: { classification },
              } = await axios.get(species[j]);

              if (classification === specieClassification)
                if (!desiredPlanets.includes(planet))
                  desiredPlanets.push(planet);
            }
          }
        }
      }
    }

    return desiredPlanets;
  } catch (error) {
    console.log(error);
  }
};

export default getPlanets;
