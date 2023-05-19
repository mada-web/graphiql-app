import useAppContext from '../../../hooks/useAppContext';

import DescriptionBlock from './DescriptionBlock';
import SchemaParams from './SchemaParams';

const ShowSchema = (): JSX.Element => {
  const { schema } = useAppContext();

  return (
    <>
      <div className="schema scrollbar ml-5 mr-3 h-[calc(100%-25px)] overflow-scroll">
        <h3 className="mb-4 font-semibold">Queries</h3>
        {schema.map((el, ind) => (
          <p key={el.name} data-ind={ind} className="mb-4">
            <span>{el.name}</span>
            <SchemaParams query={el} />
            <span>: </span>
            <a href="#" className="text-amber-600">
              {el.type?.name}
            </a>
          </p>
        ))}
      </div>
      <DescriptionBlock />
    </>
  );
};

export default ShowSchema;
