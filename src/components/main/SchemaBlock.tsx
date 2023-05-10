import { CSSTransition } from 'react-transition-group';

import { useRef } from 'react';

import useAppContext from '../../hooks/useAppContext';

const SchemaBlock = () => {
  const { setIsShowSchema, isShowSchema } = useAppContext();
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
      onEntered={() => {
        console.log('onEntered');
      }}
      onExited={() => {
        console.log('onExited');
      }}
    >
      <section
        ref={schemaRef}
        className="schema-block absolute top-[77px] h-screen w-full min-w-fit justify-self-end bg-query sm:right-0 sm:top-0 sm:mt-[84px] sm:w-1/2 md:static md:top-0"
      >
        <h1 className="py-2 text-center">
          schema
          <span className="absolute right-3 cursor-pointer px-2 font-sans" onClick={closeSchema}>
            x
          </span>
        </h1>
        <div className="px-5"></div>
      </section>
    </CSSTransition>
  );
};

export default SchemaBlock;
