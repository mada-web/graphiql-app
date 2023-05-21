import { Spinner } from '../Spinner';
import useAppContext from '../../hooks/useAppContext';

const ResponseBlock = () => {
  const { responseApi, isDataLoading } = useAppContext();

  return (
    <section className="response h-screen w-full grow border-t-8 border-gray bg-dark-blue px-8 pt-16 text-sm text-gray transition-all sm:mt-[20px] sm:h-[calc(100vh-120px)] sm:min-h-0 sm:w-auto sm:min-w-[25%] sm:max-w-full sm:border-t-0 sm:pl-8 sm:pr-4 sm:pt-0">
      {isDataLoading && <Spinner />}
      {responseApi && (
        <pre className="scrollbar h-[calc(100%-2rem)] w-full overflow-scroll pr-3 text-green transition-all sm:scroll-ml-3">
          {responseApi}
        </pre>
      )}
    </section>
  );
};

export default ResponseBlock;
