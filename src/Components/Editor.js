import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';

function Editor({ language, displayName, value, onChange }) {
  const handleChange = (value) => {
    onChange(value);
  };

  const getLanguageExtension = (lang) => {
    switch (lang) {
      case 'javascript':
        return javascript();
      case 'css':
        return css();
      case 'html':
        return html();
      default:
        return javascript();
    }
  };

  return (
    <div className="editor-container">
      <div className="editor-title">{displayName}</div>
      <CodeMirror
        value={value}
        onChange={handleChange}
        theme="dark"
        extensions={[getLanguageExtension(language)]}
      />
    </div>
  );
}

export default Editor;

