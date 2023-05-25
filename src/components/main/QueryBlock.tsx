import React from 'react';

import Editor, { Monaco } from '@monaco-editor/react';
import { CSSTransition } from 'react-transition-group';

import useAppContext from '../../hooks/useAppContext';

import Close from '../../assets/svg/close.svg';
import Save from '../../assets/svg/btn_save.svg';
import Clear from '../../assets/svg/btn_clear.svg';

import type monaco from 'monaco-editor';

export const defaultParams = '';

const QueryBlock = () => {
  const {
    setQueryParams,
    isQueryParams,
    setIsQueryParams,
    params,
    setParams,
    setHeadersParams,
    queryParams,
    headersParams,
    setIsSaveHeadersParams,
    setIsSaveQueryParams,
  } = useAppContext();
  const queryParamRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  const paramsData = params === 'query params' ? queryParams : headersParams;

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    readOnly: false,
    minimap: { enabled: false },
    bracketPairColorization: { enabled: true },
    autoDetectHighContrast: false,
    roundedSelection: false,
    scrollBeyondLastLine: false,
    scrollbar: {
      vertical: 'hidden',
      verticalHasArrows: true,
      arrowSize: 1000,
      alwaysConsumeMouseWheel: false,
    },
  };

  const handleEditorChange = (value = '') => {
    params === 'query params'
      ? setQueryParams(value.replace(/\s+/g, '').trim())
      : setHeadersParams(value.replace(/\s+/g, '').trim());
  };

  const closeQueryParams = () => {
    setIsQueryParams(false);
  };

  const chooseParams = (e: React.MouseEvent<HTMLElement>) => {
    const paramTag = e.target as HTMLSpanElement;
    const nameParam = paramTag.textContent as string;
    setParams(nameParam);
  };

  const saveData = () => {
    params === 'query params' ? setIsSaveQueryParams(true) : setIsSaveHeadersParams(true);
  };
  const clearData = () => {
    params === 'query params' ? setQueryParams('') : setHeadersParams('');
  };

  const handleEditorWillMount = (monaco: Monaco) => {
    monaco.editor.defineTheme('grey-theme', {
      base: 'vs-dark',
      inherit: false,
      rules: [
        { token: '', foreground: '7ebc59', background: '0e0e27' },
        { token: 'invalid', foreground: 'f44747' },
        { token: 'emphasis', fontStyle: 'italic' },
        { token: 'strong', fontStyle: 'bold' },

        { token: 'variable', foreground: '74B0DF' },
        { token: 'variable.predefined', foreground: '4864AA' },
        { token: 'variable.parameter', foreground: '9CDCFE' },
        { token: 'constant', foreground: '569CD6' },
        { token: 'comment', foreground: '608B4E' },
        { token: 'number', foreground: '7ebc59' },

        { token: 'annotation', foreground: 'cc6666' },
        { token: 'type', foreground: '3DC9B0' },
        { token: 'semanticHighlighting', foreground: 'ff00ff' },

        { token: 'string', foreground: 'CE9178' },
      ],
      colors: {
        'editor.background': '#0e0e27',
        'editor.foreground': '#7ebc59',
        'editor.indentGuides': '#0e0e27',
        'editor.activeIndentGuides': '#0e0e27',
        'editor.lineHighlightBackground': '#00000012',
        'editor.inactiveSelection': '#E5EBF1',
        'editor.selectionHighlight': '#ADD6FF4D',
        'editor.selectionBackground': '#BAD6FD40',
        'editorCursor.foreground': '#7ebc59',
        'editorWhitespace.foreground': '#26265f',
        'editorLineNumber.foreground': '#486f31',
        'editorLineNumber.activeForeground': '#7ebc59',
      },
    });
  };

  return (
    <CSSTransition
      nodeRef={queryParamRef}
      in={isQueryParams}
      timeout={500}
      classNames="query-block"
      mountOnEnter
      unmountOnExit
    >
      <section
        ref={queryParamRef}
        className="query-block relative h-[200px] w-[calc(100%-1rem)] rounded-t-lg bg-query transition-all sm:mr-0 sm:w-auto"
      >
        <div className="relative rounded-t-lg bg-green">
          <h3 className="flex cursor-pointer flex-wrap px-3 py-2 pr-[130px] text-left text-black">
            <span
              onClick={chooseParams}
              className={params === 'query params' ? 'text-black' : 'text-[#a9f779]'}
            >
              query params
            </span>
            <span className="text-[#a9f779]">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span
              onClick={chooseParams}
              className={params === 'headers' ? 'text-black' : 'text-[#a9f779]'}
            >
              headers
            </span>
          </h3>
          <button
            title={`Save ${params} after execute query`}
            className="absolute bottom-0 right-20 top-0 m-auto cursor-pointer px-2"
            onClick={saveData}
          >
            <Save />
          </button>
          <button
            title={`Clear ${params}`}
            className="absolute bottom-0 right-10 top-0 m-auto cursor-pointer px-2"
            onClick={clearData}
          >
            <Clear />
          </button>
          <button
            className="absolute bottom-0 right-2 top-0 m-auto cursor-pointer px-2"
            onClick={closeQueryParams}
          >
            <Close />
          </button>
        </div>
        <Editor
          className="h-[70%] w-auto scroll-smooth pt-8 -hue-rotate-180 invert "
          theme="grey-theme"
          beforeMount={handleEditorWillMount}
          defaultLanguage="qraphql"
          onChange={handleEditorChange}
          defaultValue=""
          value={paramsData}
          loading=""
          options={options}
        />
      </section>
    </CSSTransition>
  );
};

export default QueryBlock;
