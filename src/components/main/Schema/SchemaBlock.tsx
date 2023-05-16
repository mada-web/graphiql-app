import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import useAppContext from '../../../hooks/useAppContext';

import ShowSchema from './ShowSchema';

const SchemaBlock = () => {
  const { setIsShowSchema, isShowSchema, schemaData, setSchemaParams, setIsShowDescription } =
    useAppContext();
  const schemaRef = useRef(null);

  const listenSchema = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log('e.target', e);
    console.log('schemaData', schemaData);
    const paramTag = e.target as HTMLAnchorElement;
    const nameParam = paramTag.textContent;
    const descParam = schemaData.types.find((type) => nameParam === type.name);
    if (descParam) {
      setSchemaParams(descParam);
      setIsShowDescription(true);
    }
    console.log('nameParam', nameParam);
    console.log('descParam', descParam);
  };

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
        <div className="flex justify-center py-2">
          <h1 className="text-center font-bold">Documentation</h1>
          <span className="absolute right-3 cursor-pointer px-2 font-sans" onClick={closeSchema}>
            x
          </span>
        </div>
        <div className="relative mx-5 h-[calc(100%-64px)]" onClick={listenSchema}>
          <ShowSchema />
        </div>
      </section>
    </CSSTransition>
  );
};

export default SchemaBlock;
