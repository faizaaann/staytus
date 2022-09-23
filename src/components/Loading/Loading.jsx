/**
 * Component for the Loading
 *
 * @component
 * @example
 *
 * return <Loading /> No props required
 *
 * @returns {ReactElement}
 * @author Faizan Ahmad <a-f.a@outlook.com>
 * @version 1.0.0
 */

const Loading = () => {
  return (
    <span className='flex  justify-center'>
      <span className='flex '>
        <span
          className='text-fuchsia-300 text-6xl mr-2 inline-block animate-pulse'
          style={{ animationDelay: '-0.75s' }}>
          .
        </span>
        <span
          className='text-amber-300 text-6xl mr-2 animate-pulse'
          style={{ animationDelay: '-0.5s' }}>
          .
        </span>
        <span
          className='text-emerald-400 text-6xl mr-2 animate-pulse'
          style={{ animationDelay: '-0.25s' }}>
          .
        </span>
      </span>
    </span>
  );
};

export default Loading;
