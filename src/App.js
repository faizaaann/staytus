import { useEffect, useState } from 'react';

import getPlanets, { specieClassification } from './utils/getPlanets';

import Card from './components/Card';
import List from './components/List';
import FullscreenLoading from './components/Loading/FullscreenLoading';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState('List');

  const fetch = async () => {
    const result = await getPlanets();
    setData(result);
    setIsLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  if (isLoading) return <FullscreenLoading />;

  return (
    <>
      {data.length ? (
        <div className='h-full flex flex-col items-center justify-center bg-white'>
          <h3 className='my-10 mt-20 font-bold text-7xl text-fuchsia-700 text-center'>
            Planets
          </h3>
          <h6 className='font-bold text-lg text-amber-500 text-center'>
            If one of the residents at the planets has the{' '}
            {specieClassification.toUpperCase()} species, the planet will be
            listed down here.
          </h6>
          <div className='flex items-center justify-end  w-11/12'>
            <span
              className={
                view === 'List'
                  ? 'mr-5 px-8 py-2 bg-slate-400 rounded-full text-white cursor-pointer hover:bg-slate-500'
                  : 'mr-5 px-8 py-2 bg-white border border-gray-500 rounded-full text-black cursor-pointer hover:bg-slate-500'
              }
              onClick={() => setView('List')}>
              List View
            </span>
            <span
              className={
                view === 'Grid'
                  ? 'mr-5 px-8 py-2 bg-slate-400 rounded-full text-white cursor-pointer hover:bg-slate-500'
                  : 'mr-5 px-8 py-2 bg-white border border-gray-500 rounded-full text-black cursor-pointer hover:bg-slate-500'
              }
              onClick={() => setView('Grid')}>
              Grid View
            </span>
          </div>
          {view === 'List' ? (
            <div className='mt-10 flex flex-row  flex-wrap justify mx-10 w-100 m-auto p-10 rounded-lg'>
              {data.map((item, index) => (
                <List key={index} singlePlanet={item} />
              ))}
            </div>
          ) : (
            <div className='mt-10 flex flex-row  flex-wrap justify mx-10 w-100 m-auto p-10 rounded-lg'>
              {data.map((item, index) => (
                <Card key={index} singlePlanet={item} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className='h-screen flex items-center justify-center bg-slate-700 text-white'>
          <div className='h-40'>
            <p className='text-fuchsia-300 text-4xl font-semibold'>
              No Planets Found Where Any Resident Has Specie:{' '}
              {specieClassification.toUpperCase()}
            </p>
            <p className='text-amber-400 text-center text-2xl animate-pulse ease-in-out duration-500 my-4 font-bold'>
              Search for Something Else
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
