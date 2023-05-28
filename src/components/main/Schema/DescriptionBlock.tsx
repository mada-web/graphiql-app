import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import useAppContext from '../../../hooks/useAppContext';
import Close from '../../../assets/svg/close.svg';

const DescriptionBlock = () => {
  const { schemaParams, setIsShowDescription, isShowDescription } = useAppContext();
  const descriptionRef = useRef(null);

  const handleClick = () => {
    setIsShowDescription(false);
  };

  return (
    <CSSTransition
      nodeRef={descriptionRef}
      in={isShowDescription}
      timeout={500}
      classNames="query-block"
      mountOnEnter
      unmountOnExit
    >
      <section
        ref={descriptionRef}
        className="query-block absolute bottom-0 left-0 h-[200px] w-full rounded-t-lg bg-[#c6c6c6] shadow-[0_-20px_0_0_rgba(237,237,255,1)] transition-[height]"
      >
        <h3 className="rounded-t-lg bg-green p-2 px-4">{schemaParams.name}</h3>
        <span onClick={handleClick} className="absolute right-2 top-2 cursor-pointer p-2">
          <Close />
        </span>
        <ul className="desc scrollbar mb-2 mr-2 mt-2 h-[calc(100%-3.5rem)] overflow-scroll px-4 text-sm">
          {schemaParams.fields &&
            schemaParams.fields.map((field) => (
              <li key={field.name} className="mb-2">
                <span>{field.name}: </span>
                <a href="#" className="text-amber-500">
                  {field.type?.name}
                </a>
                {field.type?.kind === 'LIST' && (
                  <>
                    <span>[</span>
                    <a href="#" className="text-amber-500">
                      {field.type?.ofType?.name}
                    </a>
                    <span>]</span>
                  </>
                )}
              </li>
            ))}
          {schemaParams.description && <p>{schemaParams.description}</p>}
        </ul>
      </section>
    </CSSTransition>
  );
};

export default DescriptionBlock;
