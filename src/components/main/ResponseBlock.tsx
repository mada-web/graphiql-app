import useAppContext from '../../hooks/useAppContext';

const ResponseBlock = () => {
  const { isShowResult, queryBody, queryParams } = useAppContext();

  return (
    <section className="min-h-screen w-full grow border-t-8 border-gray bg-dark-blue px-8 pt-16 text-sm text-gray transition-all sm:mt-[120px] sm:min-h-0 sm:w-1/2 sm:border-t-0 sm:px-8 sm:pt-0">
      {isShowResult && (
        <div>
          {queryBody}
          {queryParams}
        </div>
      )}
    </section>
  );
};

export default ResponseBlock;
