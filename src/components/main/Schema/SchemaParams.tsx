import { FC } from 'react';

import { SchemaField } from '../../../types/types';
import useAppContext from '../../../hooks/useAppContext';
interface ISchemaParams {
  query: SchemaField;
}
const SchemaParams: FC<ISchemaParams> = ({ query }) => {
  const { setActive } = useAppContext();
  return (
    <>
      {query.args && query.args.length > 0 && <span>( </span>}
      {query.args &&
        query.args.map((arg, ind) => (
          <span key={arg.name} className="text-rose-700">
            {ind >= 1 && <span>; </span>}
            {arg.name}:&nbsp;
            {arg.type.kind === 'NON_NULL' && (
              <a href="#" onClick={() => setActive(query.name)} className="non-null text-amber-600">
                {arg.type.ofType!.name}
              </a>
            )}
            {arg.type.kind === 'SCALAR' && (
              <a href="#" onClick={() => setActive(query.name)} className="text-amber-600">
                {arg.type.name}
              </a>
            )}
          </span>
        ))}
      {query.args && query.args.length > 0 && <span> )</span>}
    </>
  );
};
export default SchemaParams;
