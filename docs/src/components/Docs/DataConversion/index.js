/* @flow */

import React from 'react';
import Codemirror from 'react-codemirror';
import { RawEditorStateLink } from '../Props/EditorStateProp';

export default () => (
  <div className="docs-section">
    <h2>Data Conversion</h2>
    <h3>JSON</h3>
    <div className="docs-desc top-margined">
      <RawEditorStateLink /> format is very well suited to save data in DB. This JSON can be easily converted back to Editor state of even HTML or Markdown.
    </div>
    <Codemirror
      value={
        'import React, { Component } from \'react\';\n' +
        'import { convertFromRaw } from \'draft-js\';\n' +
        'import { Editor } from \'react-wysiwyg-draft\';\n' +
        '\n\n' +
        'const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};\n' +
        '\n' +
        'class EditorConvertToJSON extends Component {\n' +
        '  constructor(props) {\n' +
        '    super(props);\n' +
        '    const contentState = convertFromRaw(content);\n' +
        '    this.state = {\n' +
        '      contentState,\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  onContentStateChange: Function = (contentState) => {\n' +
        '    this.setState({\n' +
        '      contentState,\n' +
        '    });\n' +
        '  };\n' +
        '\n' +
        '  render() {\n' +
        '    const { contentState } = this.state;\n' +
        '    return (\n' +
        '      <Editor\n' +
        '        wrapperClassName="demo-wrapper"\n' +
        '        editorClassName="demo-editor"\n' +
        '        onContentStateChange={this.onContentStateChange}\n' +
        '      />\n' +
        '    );\n' +
        '  }\n' +
        '}'
      }
      options={{
        lineNumbers: true,
        mode: 'jsx',
        readOnly: true,
      }}
    />
    <h3>HTML</h3>
    <div className="docs-desc top-margined">
      Libraries
      <a href="https://github.com/vdtsol/draftjs-to-html">draftjs-to-html</a> can be used to convert <RawEditorStateLink /> to html. <br /> 
      <a href="https://github.com/vdtsol/html-to-draftjs">html-to-draftjs</a> provides the option to convert 
      HTML generated by react-wysiwyg-draft back to draftJS ContentState which can be used to initialize the Editor.
    </div>
    <Codemirror
      value={
        'import React, { Component } from \'react\';\n' +
        'import { EditorState, convertToRaw, ContentState } from \'draft-js\';\n' +
        'import { Editor } from \'react-wysiwyg-draft\';\n' +
        'import draftToHtml from \'draftjs-to-html\';\n' +
        'import htmlToDraft from \'html-to-draftjs\';\n' +
        '\n\n' +
        'class EditorConvertToHTML extends Component {\n' +
        '  constructor(props) {\n' +
        '    super(props);\n' +
        '    const html = \'<p>Hey this <strong>editor</strong> rocks 😀</p>\';\n' +
        '    const contentBlock = htmlToDraft(html);\n' +
        '    if (contentBlock) {\n' +
        '      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);\n' +
        '      const editorState = EditorState.createWithContent(contentState);\n' +
        '      this.state = {\n' +
        '        editorState,\n' +
        '      };\n' +
        '    }\n' +
        '  }\n' +
        '\n' +
        '  onEditorStateChange: Function = (editorState) => {\n' +
        '    this.setState({\n' +
        '      editorState,\n' +
        '    });\n' +
        '  };\n' +
        '\n' +
        '  render() {\n' +
        '    const { editorState } = this.state;\n' +
        '    return (\n' +
        '      <div>\n' +
        '        <Editor\n' +
        '          editorState={editorState}\n' +
        '          wrapperClassName="demo-wrapper"\n' +
        '          editorClassName="demo-editor"\n' +
        '          onEditorStateChange={this.onEditorStateChange}\n' +
        '        />\n' +
        '        <textarea\n' +
        '          disabled\n' +
        '          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}\n' +
        '        />\n' +
        '      </div>\n' +
        '    );\n' +
        '  }\n' +
        '}'
      }
      options={{
        lineNumbers: true,
        mode: 'jsx',
        readOnly: true,
      }}
    />
    <h3>Markdown</h3>
    <div className="docs-desc top-margined">
      Library <a href="https://github.com/vdtsol/draftjs-to-markdown">draftjs-to-markdown</a> can be used to convert <RawEditorStateLink /> to markdown format.
    </div>
  </div>
);
