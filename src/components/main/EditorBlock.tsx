import Editor, { Monaco } from '@monaco-editor/react';
import monaco from 'monaco-editor';

import useAppContext from '../../hooks/useAppContext';

export const defaultCode = `query {
    eggGroups{
      count,
      results {
        name
      }
    }
  }
`;

const EditorBlock = () => {
  const { setQueryBody } = useAppContext();

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    readOnly: false,
    minimap: { enabled: false },
    bracketPairColorization: { enabled: true },
    autoDetectHighContrast: false,
    roundedSelection: false,
    scrollBeyondLastLine: false,
    automaticLayout: true,
    scrollbar: {
      vertical: 'auto',
      verticalHasArrows: true,
      horizontalHasArrows: false,
      arrowSize: 1000,
      alwaysConsumeMouseWheel: false,
      scrollByPage: true,
    },
  };

  const handleEditorChange = (value = '') => {
    setQueryBody(value);
  };

  const handleEditorValidation = (markers: monaco.editor.IMarker[]) => {
    markers.forEach((marker) => console.log('onValidate:', marker.message));
  };

  const handleEditorWillMount = (monaco: Monaco) => {
    monaco.editor.defineTheme('dark-theme', {
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
        { token: 'key', foreground: '9CDCFE' },
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
        'editorLineNumber.foreground': '#00ff00',
        'editorLineNumber.activeForeground': '#7ebc59',
      },
    });
  };
  return (
    <section className="editor relative z-0 col-start-1 row-start-1 max-h-max min-h-[60%] pb-2 pl-1 sm:mr-2 sm:h-[calc(100%-1rem)] sm:pl-10">
      <Editor
        theme="dark-theme"
        beforeMount={handleEditorWillMount}
        defaultLanguage="qraphql"
        onValidate={handleEditorValidation}
        defaultValue={defaultCode}
        options={options}
        onChange={handleEditorChange}
        loading="Wait a second..."
      />
    </section>
  );
};

export default EditorBlock;
