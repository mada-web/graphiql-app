import Editor, { Monaco } from '@monaco-editor/react';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import useAppContext from '../../hooks/useAppContext';

import Close from '../../assets/svg/close.svg';

import type monaco from 'monaco-editor';
export const defaultParams = '';

const QueryBlock = () => {
  const { setQueryParams, isQueryParams, setIsQueryParams } = useAppContext();
  const queryParamRef = useRef(null);

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
    setQueryParams(value);
  };

  const handleEditorValidation = (markers: monaco.editor.IMarker[]) => {
    // model markers
    markers.forEach((marker) => console.log('onValidate:', marker.message));
  };

  const closeQueryParams = () => {
    setIsQueryParams(false);
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
      <div
        ref={queryParamRef}
        className="query-block mr-2 h-[200px] w-[calc(100%-1rem)] rounded-t-lg bg-query transition-all sm:w-full"
      >
        <h3 className="rounded-t-lg bg-green py-2 text-center text-black">query params</h3>
        <span
          className="absolute right-5 top-4 cursor-pointer px-2 font-sans sm:right-3"
          onClick={closeQueryParams}
        >
          <Close />
        </span>

        <Editor
          className="h-[80%] scroll-smooth pt-8 -hue-rotate-180 invert "
          theme="grey-theme"
          beforeMount={handleEditorWillMount}
          defaultLanguage="qraphql"
          onValidate={handleEditorValidation}
          onChange={handleEditorChange}
          defaultValue={defaultParams}
          options={options}
        />
      </div>
    </CSSTransition>
  );
};

export default QueryBlock;
