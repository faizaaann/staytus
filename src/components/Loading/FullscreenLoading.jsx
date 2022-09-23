/**
 * Component for the Full Screen Loading
 *
 * @component
 * @example
 *
 * return <FullscreenLoading /> No props required
 *
 * @returns {ReactElement}
 * @author Faizan Ahmad <a-f.a@outlook.com>
 * @version 1.0.0
 */

const FullscreenLoading = () => {
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
};

export default FullscreenLoading;
