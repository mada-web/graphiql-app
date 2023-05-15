import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import useAppContext from '../../hooks/useAppContext';
import ShowSchema from '../ApiPokemon/ShowSchema';

const SchemaBlock = () => {
  const { setIsShowSchema, isShowSchema, schemaData } = useAppContext();
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
        ref={schemaRef}
        className="schema-block scrollbar absolute top-[77px] z-10 h-[90vh] w-full justify-self-end bg-query sm:right-0 sm:top-0 sm:h-screen sm:w-[calc(50vw)] sm:pt-[84px] lg:static lg:w-1/2"
      >
        <h1 className="py-2 text-center">
          schema
          <span className="absolute right-3 cursor-pointer px-2 font-sans" onClick={closeSchema}>
            x
          </span>
        </h1>
        <div className="mx-5 h-[calc(100%-64px)]">
          <ShowSchema />
          {/* <pre className="h-full overflow-scroll">{schemaData}</pre> */}
        </div>
      </section>
    </CSSTransition>
  );
};

export default SchemaBlock;
