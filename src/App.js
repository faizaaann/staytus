import { useEffect, useState } from 'react';

import getPlanets from './utils/getPlanets';

import Card from './components/Card';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetch = async () => {
    const result = await getPlanets();
    setData(result);
    setIsLoading(false);
  };
  useEffect(() => {
    fetch();
  }, []);

  if (isLoading)
    return (
      <div className='h-screen flex items-center justify-center bg-slate-700 text-white'>
        <div className='h-40'>
          <span className='flex'>
            <div
              className='text-fuchsia-300 text-9xl mr-2 inline-block animate-bounce'
              style={{ animationDelay: '-0.75s' }}>
              .
            </div>
            <div
              className='text-amber-300 text-9xl mr-2 animate-bounce'
              style={{ animationDelay: '-0.5s' }}>
              .
            </div>
            <div
              className='text-emerald-400 text-9xl mr-2 animate-bounce'
              style={{ animationDelay: '-0.25s' }}>
              .
            </div>
          </span>
        </div>
      </div>
    );

  return (
    <>
      {data.length ? (
        <div className='h-full flex flex-col items-center justify-center bg-slate-700'>
          <h3 className='my-10 mt-20 font-bold text-7xl text-fuchsia-300 text-center'>
            Planets
          </h3>
          <h6 className='font-bold text-lg text-amber-300 text-center'>
            If one of the residents at the planets has the selected species, the
            planet will be listed down here.
          </h6>
          <div className='mt-10 flex flex-row  flex-wrap justify mx-10 w-3/4 m-auto p-10 rounded-lg'>
            {data.map((item, index) => (
              <Card key={index} singleUser={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className='h-screen flex items-center justify-center bg-slate-700 text-white'>
          <div className='h-40'>
            <p className='text-fuchsia-300 text-5xl font-semibold'>
              No Planets Found
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
