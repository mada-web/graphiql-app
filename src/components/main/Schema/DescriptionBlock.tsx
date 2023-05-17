import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import useAppContext from '../../../hooks/useAppContext';

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
      <div
        ref={descriptionRef}
        className="query-block absolute bottom-0 left-0 h-auto w-[calc(100%-1.25rem)] rounded-t-lg bg-gray pb-2"
      >
        <h3 className="mb-4 rounded-t-lg bg-green p-2 px-4">{schemaParams.name}</h3>
        <span onClick={handleClick} className="absolute right-0 top-0 cursor-pointer p-2">
          x
        </span>
        <div className="mb-2 px-4">
          {schemaParams.fields &&
            schemaParams.fields.map((field) => (
              <p key={field.name} className="mb-4">
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
              </p>
            ))}
          {schemaParams.description && <p>{schemaParams.description}</p>}
        </div>
      </div>
    </CSSTransition>
  );
};

export default DescriptionBlock;
