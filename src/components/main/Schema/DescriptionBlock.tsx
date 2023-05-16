import useAppContext from '../../../hooks/useAppContext';

const DescriptionBlock = () => {
  const { schemaParams, setIsShowDescription } = useAppContext();
  const handleClick = () => {
    setIsShowDescription(false);
  };

  return (
    <div className="absolute bottom-0 left-0 w-[calc(100%-1.25rem)] bg-query pb-2">
      <h3 className="bg-green p-2">{schemaParams.name}</h3>
      <span onClick={handleClick} className="absolute right-0 top-0 cursor-pointer p-2">
        x
      </span>
      <div className="mb-2 px-4">
        {schemaParams.fields &&
          schemaParams.fields.map((field) => (
            <p key={field.name}>
              <span>{field.name}: </span>
              <a href="#" className="text-amber-500">
                {field.type?.name}
              </a>
              {field.type?.kind === 'LIST' && (
                <>
                  <span>[</span>
                  <a href="#" className="text-amber-500">
                    {field.type?.ofType?.name}
                  </a>
                  <span>]</span>
                </>
              )}
            </p>
          ))}
        {schemaParams.description && <p>{schemaParams.description}</p>}
      </div>
    </div>
  );
};

export default DescriptionBlock;
