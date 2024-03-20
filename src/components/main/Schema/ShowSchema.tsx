import useAppContext from '../../../hooks/useAppContext';

import DescriptionBlock from './DescriptionBlock';
import SchemaParams from './SchemaParams';

const ShowSchema = (): JSX.Element => {
  const { schema, isShowDescription, active, setActive } = useAppContext();

  return (
    <>
      <section className="schema scrollbar ml-3 mr-3 h-[calc(100%-25px)] overflow-auto lg:h-[calc(100%-25px)]">
        <h3 className="mb-4 pl-2 font-semibold">Queries</h3>
        <ul className="h-[calc(100%-25px)] list-none">
          {schema.map((el) => (
            <li
              key={el.name}
              className={`${
                active == el.name && isShowDescription && 'schema-active'
              } mb-3 py-1 pl-2`}
            >
              <span>{el.name}</span>
              <SchemaParams query={el} />
              <span>: </span>
              <a href="#" onClick={() => setActive(el.name)} className="text-amber-600">
                {el.type?.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <DescriptionBlock />
    </>
  );
};

export default ShowSchema;
