import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import { FormattedMessage } from 'react-intl';

import useAppContext from '../../../hooks/useAppContext';

import Close from '../../../assets/svg/close.svg';

import ShowSchema from './ShowSchema';

const SchemaBlock = () => {
  const { setIsShowSchema, isShowSchema, schemaData, setSchemaParams, setIsShowDescription } =
    useAppContext();
  const schemaRef = useRef(null);

  const listenSchema = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const paramTag = e.target as HTMLAnchorElement;
    const nameParam = paramTag.textContent;
    const descParam = schemaData.types.find((type) => nameParam === type.name);
    if (descParam) {
      setSchemaParams(descParam);
      setIsShowDescription(true);
    }
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
        className="schema-block absolute top-0 z-10 h-[calc(100vh-100px)] w-full justify-self-end bg-query sm:right-0 sm:top-0 sm:h-[calc(100vh-100px)] sm:w-[calc(50vw)] sm:pt-[25px] lg:static lg:h-[calc(100vh-100px)] lg:w-1/2 lg:grow"
      >
        <div className="flex justify-center py-2">
          <h1 className="text-center font-bold">
            <FormattedMessage id="DOC" />
          </h1>
          <span
            className="absolute right-3 top-3 cursor-pointer px-4 font-sans sm:top-8"
            onClick={closeSchema}
          >
            <Close />
          </span>
        </div>
        <div
          className="relative mr-4 h-[calc(100%-40px)] sm:h-[calc(100%-40px)]"
          onClick={listenSchema}
        >
          <ShowSchema />
        </div>
      </section>
    </CSSTransition>
  );
};

export default SchemaBlock;
