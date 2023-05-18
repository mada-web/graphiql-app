import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import useAppContext from '../../hooks/useAppContext';

const SchemaBlock = () => {
  const { setIsShowSchema, isShowSchema, schema } = useAppContext();
  const schemaRef = useRef(null);

  const closeSchema = () => {
    setIsShowSchema(false);
  };

  return (
    <CSSTransition
      nodeRef={schemaRef}
      in={isShowSchema}
      timeout={500}
      classNames="schema-block"
      mountOnEnter
      unmountOnExit
    >
      <section
        ref={schemaRef.current}
        className="schema-block absolute top-[77px] z-10 h-[90vh] w-full min-w-fit justify-self-end overflow-auto bg-query sm:right-0 sm:top-0 sm:h-screen sm:w-[calc(50vw)] sm:pt-[84px] lg:static lg:w-1/2"
      >
        <div className="flex justify-center py-2">
          <h1 className="text-center font-bold">Documentation</h1>
          <span className="absolute right-3 cursor-pointer px-2 font-sans" onClick={closeSchema}>
            x
          </span>
        </div>
        <ul className="lis list-inside list-disc pl-3 text-base">
          {schema.map((el) => (
            <li key={el.name}>{el.name}</li>
          ))}
        </ul>
        <div className="px-5"></div>
      </section>
    </CSSTransition>
  );
};

export default SchemaBlock;
