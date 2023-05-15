import useAppContext from '../../hooks/useAppContext';

const ShowSchema = (): JSX.Element => {
  const { schema } = useAppContext();
  const HandleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log('e.target', e.target);
  };

  return (
    <div onClick={HandleClick} className="h-full overflow-scroll">
      <h3>Queries</h3>
      {schema.map((el) => (
        <p key={el.name} className="mb-4">
          <span>{el.name}</span>
          {el.args && el.args.length > 0 && <span>(</span>}
          {el.args &&
            el.args.map((arg) => (
              <span key={arg.name} className="text-rose-700">
                {arg.name}:
                {arg.type.kind === 'NON_NULL' && (
                  <a href="#" className="non-null text-amber-600">
                    {arg.type.ofType!.name}
                  </a>
                )}
                {arg.type.kind === 'SCALAR' && <a href="#">{arg.type.name}</a>}
              </span>
            ))}
          {el.args && el.args.length > 0 && <span>)</span>}
          <span>: </span>
          <a href="#" className="text-amber-600">
            {el.type?.name}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ShowSchema;
