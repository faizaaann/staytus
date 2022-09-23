import { useState, useEffect } from 'react';
import moment from 'moment';

import getMovies from '../../utils/getMovies';
import Loading from '../Loading/Loading';

/**
 * Component for the Card View
 *
 * @component
 * @example
 *
 * return <Card singlePlanet={singlePlanet}/>
 *
 * @returns {ReactElement}
 * @author Faizan Ahmad <a-f.a@outlook.com>
 * @version 1.0.0
 */

const Card = ({ singlePlanet }) => {
  const { name, climate, created } = singlePlanet;
  const date = moment(created).format('ll');

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetch = async () => {
    const response = await getMovies(singlePlanet);
    setMovies(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div
      className='bg-gray-500 hover:scale-105 rounded-xl hover:ease-in-out hover:transition-all hover:duration-700  shadow-2xl mr-5  my-2 p-8 hover:shadow-3xl'
      style={{ width: '45%' }}>
      <h3 className='text-amber-400 mb-5 text-xl'>{date}</h3>
      <div className='flex items-start rounded-xl  '>
        <div className='flex h-12 w-12 items-center justify-center rounded-full p-2 bg-gray-400 hover:animate-spin'>
          <img src='/assets/icons/planet.svg' alt='planet' />
        </div>
        <div className='ml-4'>
          <h2 className='font-semibold text-2xl text-white'>{name}</h2>
          <p className='text-slate-300 font-bold capitalize'>{climate}</p>
          <div className='mt-4'>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {movies?.map((movie, index) => (
                  <span className='text-white font-bold' key={index}>
                    {movie}
                    {index === movies.length - 1 ? ' ' : ',  '}
                  </span>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
