import useAppContext from '../../hooks/useAppContext';

const ResponseBlock = () => {
  const { responseApi } = useAppContext();
  return (
    <section className="response h-[100vh-120px] w-full grow border-t-8 border-gray bg-dark-blue px-8 pt-6 text-sm text-gray transition-all sm:mt-[20px] sm:h-[calc(100vh-220px)] sm:min-h-0 sm:w-1/2 sm:border-t-0 sm:px-8 sm:pt-0">
      <pre className="scrollbar h-[calc(100vh-140px)] w-full overflow-auto pb-[20px] text-green transition-all">
        {responseApi}
      </pre>
    </section>
  );
};

export default ResponseBlock;
