import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import useAppContext from '../../hooks/useAppContext';

import Close from '../../assets/svg/close.svg';

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
    >
      <section
        ref={schemaRef}
        className="schema-block absolute top-[0px] z-10 h-[calc(100vh-120px)] w-full min-w-fit justify-self-end bg-query sm:right-0 sm:top-0 sm:h-[100vh-20px] sm:w-[calc(50vw)] sm:pt-[20px] lg:static lg:w-1/2"
      >
        <h1 className="py-2 text-center">
          schema
          <span className="absolute right-3 cursor-pointer px-2 items-center" onClick={closeSchema}>
            <Close />
          </span>
        </h1>
        <div className="px-5"></div>
      </section>
    </CSSTransition>
  );
};

export default SchemaBlock;
