// import type monaco from 'monaco-editor';
// import Editor, { Monaco } from '@monaco-editor/react';

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
//const code = `some query`;
const QueryBlock = () => {
  // const options: monaco.editor.IStandaloneEditorConstructionOptions = {
  //   readOnly: false,
  //   minimap: { enabled: false },
  //   bracketPairColorization: { enabled: true },
  //   autoDetectHighContrast: false,
  //   roundedSelection: false,
  //   scrollBeyondLastLine: false,
  //   scrollbar: {
  //     vertical: 'hidden',
  //     verticalHasArrows: true,
  //     arrowSize: 1000,
  //   },
  // };
  // const handleEditorValidation = (markers: monaco.editor.IMarker[]) => {
  //   // model markers
  //   markers.forEach((marker) => console.log('onValidate:', marker.message));
  // };

  // const handleEditorWillMount = (monaco: Monaco) => {
  //   monaco.editor.defineTheme('grey-theme', {
  //     base: 'vs',
  //     inherit: false,
  //     rules: [
  //       { token: '', foreground: '000000', background: 'fffffe' },
  //       { token: 'invalid', foreground: 'cd3131' },
  //       { token: 'emphasis', fontStyle: 'italic' },
  //       { token: 'strong', fontStyle: 'bold' },

  //       { token: 'variable', foreground: '001188' },
  //       { token: 'variable.predefined', foreground: '4864AA' },
  //       { token: 'constant', foreground: 'dd0000' },
  //       { token: 'comment', foreground: '008000' },
  //       { token: 'number', foreground: '098658' },
  //       { token: 'number.hex', foreground: '3030c0' },
  //       { token: 'regexp', foreground: '800000' },
  //       { token: 'annotation', foreground: '808080' },
  //       { token: 'type', foreground: '008080' },

  //       // { token: 'delimiter', foreground: '000000' },
  //       // { token: 'delimiter.html', foreground: '383838' },
  //       // { token: 'delimiter.xml', foreground: '0000FF' },

  //       // { token: 'tag', foreground: '800000' },
  //       // { token: 'tag.id.pug', foreground: '4F76AC' },
  //       // { token: 'tag.class.pug', foreground: '4F76AC' },
  //       // { token: 'meta.scss', foreground: '800000' },
  //       // { token: 'metatag', foreground: 'e00000' },
  //       // { token: 'metatag.content.html', foreground: 'FF0000' },
  //       // { token: 'metatag.html', foreground: '808080' },
  //       // { token: 'metatag.xml', foreground: '808080' },
  //       // { token: 'metatag.php', fontStyle: 'bold' },

  //       // { token: 'key', foreground: '863B00' },
  //       // { token: 'string.key.json', foreground: 'A31515' },
  //       // { token: 'string.value.json', foreground: '0451A5' },

  //       // { token: 'attribute.name', foreground: 'FF0000' },
  //       // { token: 'attribute.value', foreground: '0451A5' },
  //       // { token: 'attribute.value.number', foreground: '098658' },
  //       // { token: 'attribute.value.unit', foreground: '098658' },
  //       // { token: 'attribute.value.html', foreground: '0000FF' },
  //       // { token: 'attribute.value.xml', foreground: '0000FF' },

  //       // { token: 'string', foreground: 'A31515' },
  //       // { token: 'string.html', foreground: '0000FF' },
  //       // { token: 'string.sql', foreground: 'FF0000' },
  //       // { token: 'string.yaml', foreground: '0451A5' },

  //       // { token: 'keyword', foreground: '0000FF' },
  //       // { token: 'keyword.json', foreground: '0451A5' },
  //       // { token: 'keyword.flow', foreground: 'AF00DB' },
  //       // { token: 'keyword.flow.scss', foreground: '0000FF' },

  //       // { token: 'operator.scss', foreground: '666666' },
  //       // { token: 'operator.sql', foreground: '778899' },
  //       // { token: 'operator.swift', foreground: '666666' },
  //       // { token: 'predefined.sql', foreground: 'C700C7' },
  //     ],
  //     colors: {
  //       'editor.background': '#FFFFFE',
  //       'editor.foreground': '#000000',
  //       'editor.inactiveSelection': '#E5EBF1',
  //       'editor.indentGuides': '#D3D3D3',
  //       'editor.lineHighlightBackground': '#00000012',
  //       'editor.activeIndentGuides': '#939393',
  //       'editor.selectionHighlight': '#ADD6FF4D',
  //       'editor.selectionBackground': '#BAD6FD',
  //       'editorCursor.foreground': '#D4D4D4',
  //       'editorWhitespace.foreground': '#26265f',
  //     },
  //   });
  // };

  return (
    <div className="h-[200px] w-full border-b-2 border-dark-blue bg-gray pl-7 pt-5 transition-all">
      some query
      {/* <Editor
        theme="grey-theme"
        beforeMount={handleEditorWillMount}
        defaultLanguage="qraphql"
        onValidate={handleEditorValidation}
        defaultValue={code}
        options={options}
        // renderIndentGuides="false"
        // defaultValue="query {}"
        // onMount={handleEditorDidMount}
      /> */}
    </div>
  );
};

export default QueryBlock;
