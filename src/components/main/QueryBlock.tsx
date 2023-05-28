import React from 'react';

import Editor, { Monaco } from '@monaco-editor/react';
import { CSSTransition } from 'react-transition-group';

import useAppContext from '../../hooks/useAppContext';

import Close from '../../assets/svg/close.svg';

import type monaco from 'monaco-editor';

export const defaultParams = '';

const QueryBlock = () => {
  const {
    setQueryParams,
    isOpenQueryParams,
    setIsOpenQueryParams,
    params,
    setParams,
    setHeadersParams,
    queryParams,
    headersParams,
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
    setIsOpenQueryParams(false);
  };

  const chooseParams = (e: React.MouseEvent<HTMLElement>) => {
    const paramTag = e.target as HTMLSpanElement;
    const nameParam = paramTag.textContent as string;
    setParams(nameParam);
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
      in={isOpenQueryParams}
      timeout={500}
      classNames="query-block"
      mountOnEnter
      unmountOnExit
    >
      <section
        ref={queryParamRef}
        className="query-block relative h-[200px] w-full rounded-t-lg bg-query transition-all sm:mr-0 sm:w-auto"
      >
        <div className="relative rounded-t-lg bg-green">
          <h3 className="flex cursor-pointer flex-wrap px-3 py-2 pr-[20px] text-left text-black">
            <span
              onClick={chooseParams}
              className={
                params === 'query params' ? 'rounded bg-gray p-1 text-black' : 'p-1 text-black'
              }
            >
              query params
            </span>
            <span className="text-[#a9f779]">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span
              onClick={chooseParams}
              className={
                params === 'http headers' ? 'rounded bg-gray p-1 text-black' : 'p-1 text-black'
              }
            >
              http headers
            </span>
          </h3>
          <button
            className="absolute bottom-0 right-5 top-0 m-auto cursor-pointer px-2 sm:right-3"
            onClick={closeQueryParams}
          >
            <Close />
          </button>
        </div>
        <Editor
          className="h-[70%] w-auto scroll-smooth pt-8 -hue-rotate-180 invert "
          theme="grey-theme"
          beforeMount={handleEditorWillMount}
          language="json"
          onChange={handleEditorChange}
          value={paramsData}
          options={options}
        />
      </section>
    </CSSTransition>
  );
};

export default QueryBlock;
