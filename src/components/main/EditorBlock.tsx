// import { Editor, monaco } from '@monaco-editor/react';
// import * as monacoEditor from 'monaco-editor';
import type monaco from 'monaco-editor';
import Editor, { Monaco } from '@monaco-editor/react';

// loader.config({
//   paths: {
//     vs: '...',
//   },
//   'vs/nls': {
//     availableLanguages: {
//       '*': 'en',
//     },
//   },
// });
const code = `query {
    eggGroups{
      count,
      results {
        name
      }
    }
  }
`;
const EditorBlock = () => {
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
    },
  };
  const handleEditorValidation = (markers: monaco.editor.IMarker[]) => {
    // model markers
    markers.forEach((marker) => console.log('onValidate:', marker.message));
  };

  const handleEditorWillMount = (monaco: Monaco) => {
    monaco.editor.defineTheme('dark-theme', {
      base: 'vs-dark',
      inherit: false,
      rules: [
        { token: '', foreground: 'D4D4D4', background: '0e0e27' },
        { token: 'invalid', foreground: 'f44747' },
        { token: 'emphasis', fontStyle: 'italic' },
        { token: 'strong', fontStyle: 'bold' },

        { token: 'variable', foreground: '74B0DF' },
        { token: 'variable.predefined', foreground: '4864AA' },
        { token: 'variable.parameter', foreground: '9CDCFE' },
        { token: 'constant', foreground: '569CD6' },
        { token: 'comment', foreground: '608B4E' },
        { token: 'number', foreground: 'B5CEA8' },
        // { token: 'number.hex', foreground: '5BB498' },
        // { token: 'regexp', foreground: 'B46695' },
        { token: 'annotation', foreground: 'cc6666' },
        { token: 'type', foreground: '3DC9B0' },
        { token: 'semanticHighlighting', foreground: 'ff00ff' },

        // { token: 'delimiter', foreground: 'DCDCDC' },
        // { token: 'delimiter.html', foreground: '808080' },
        // { token: 'delimiter.xml', foreground: '808080' },

        // { token: 'tag', foreground: '569CD6' },
        // { token: 'tag.id.pug', foreground: '4F76AC' },
        // { token: 'tag.class.pug', foreground: '4F76AC' },
        // { token: 'meta.scss', foreground: 'A79873' },
        // { token: 'meta.tag', foreground: 'CE9178' },
        // { token: 'metatag', foreground: 'DD6A6F' },
        // { token: 'metatag.content.html', foreground: '9CDCFE' },
        // { token: 'metatag.html', foreground: '569CD6' },
        // { token: 'metatag.xml', foreground: '569CD6' },
        // { token: 'metatag.php', fontStyle: 'bold' },

        // { token: 'key', foreground: '9CDCFE' },
        // { token: 'string.key.json', foreground: '9CDCFE' },
        // { token: 'string.value.json', foreground: 'CE9178' },

        // { token: 'attribute.name', foreground: '9CDCFE' },
        // { token: 'attribute.value', foreground: 'CE9178' },
        // { token: 'attribute.value.number.css', foreground: 'B5CEA8' },
        // { token: 'attribute.value.unit.css', foreground: 'B5CEA8' },
        // { token: 'attribute.value.hex.css', foreground: 'D4D4D4' },

        { token: 'string', foreground: 'CE9178' },
      ],
      colors: {
        'editor.background': '#0e0e27',
        'editor.foreground': '#D4D4D4',
        'editor.indentGuides': '#0e0e27',
        'editor.activeIndentGuides': '#0e0e27',
        'editor.lineHighlightBackground': '#00000012',
        'editor.inactiveSelection': '#E5EBF1',
        'editor.selectionHighlight': '#ADD6FF4D',
        'editor.selectionBackground': '#BAD6FD',
        'editorCursor.foreground': '#D4D4D4',
        'editorWhitespace.foreground': '#26265f',
      },
    });
  };
  return (
    <div className="relative z-0 col-start-1 row-start-1 max-h-max min-h-[60%] pl-10">
      <Editor
        theme="dark-theme"
        beforeMount={handleEditorWillMount}
        defaultLanguage="qraphql"
        onValidate={handleEditorValidation}
        defaultValue={code}
        options={options}
        // renderIndentGuides="false"
        // defaultValue="query {}"
        // onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default EditorBlock;
