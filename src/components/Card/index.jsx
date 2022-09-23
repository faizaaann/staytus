const Card = ({ singleUser }) => {
  const { name, population, terrain, films, residents } = singleUser;
  return (
    <div
      class='flex items-start rounded-xl bg-white hover:bg-fuchsia-300 hover:scale-110 hover:ease-in-out hover:transition-all hover:duration-700  shadow-2xl mr-5  my-2 p-8 hover:shadow-3xl '
      style={{ width: '48%' }}>
      <div class='flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 p-1s bg-blue-50 hover:animate-spin'>
        <img src='/assets/icons/planet.svg' alt='planet' />
      </div>
      <div class='ml-4'>
        <h2 class='font-semibold text-black text-2xl'>{name}</h2>
        <div className='mt-4'>
          <p class='mt-2 text-gray-500 text-xl'>
            Population:{' '}
            <span className='font-bold text-gray-700'>{population}</span>
          </p>
          <p class='mt-2 text-gray-500 text-xl'>
            Terrain: <span className='font-bold text-gray-700'>{terrain}</span>
          </p>
          <p class='mt-2 text-gray-500 text-xl'>
            Total Films:{' '}
            <span className='font-bold text-gray-700'>{films.length}</span>
          </p>
          <p class='mt-2 text-gray-500 text-xl'>
            Total Residents:{' '}
            <span className='font-bold text-gray-700'>{residents.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
