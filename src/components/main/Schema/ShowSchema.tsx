import useAppContext from '../../../hooks/useAppContext';

import DescriptionBlock from './DescriptionBlock';
import SchemaParams from './SchemaParams';

const ShowSchema = (): JSX.Element => {
  const { schema, isShowDescription } = useAppContext();

  return (
    <>
      <div className="mx-5 h-full overflow-scroll">
        <h3 className="mb-4 font-semibold">Queries</h3>
        {schema.map((el) => (
          <p key={el.name} className="mb-4">
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
