import { FC } from 'react';

import { SchemaField } from '../../../types/types';
interface ISchemaParams {
  query: SchemaField;
}
const SchemaParams: FC<ISchemaParams> = ({ query }) => {
  return (
    <>
      {query.args && query.args.length > 0 && <span>( </span>}
      {query.args &&
        query.args.map((arg, ind) => (
          <span key={arg.name} className="text-rose-700">
            {ind >= 1 && <span>; </span>}
            {arg.name}:&nbsp;
            {arg.type.kind === 'NON_NULL' && (
              <a href="#" className="non-null text-amber-600">
                {arg.type.ofType!.name}
              </a>
            )}
            {arg.type.kind === 'SCALAR' && (
              <a href="#" className="text-amber-600">
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
