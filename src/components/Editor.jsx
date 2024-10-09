import React from "react";
import './styles/Editor.css';
import './styles/Preview.css'

const Editor = ({markdown, isFullScreen, handleInputChange, toggleFullScreen}) => {
  return (
    <div className={`editorWrap ${isFullScreen ? "full-screen-editor": ""}`}>
      <div className="toolbar">
        <span>Editor</span>
        <div className="toggler" onClick={toggleFullScreen}>
          {isFullScreen? <i className="fa fa-arrows-alt"></i> : <i className="fa fa-compress"></i>}
        </div>
      </div>
      <textarea  id="editor" value={markdown} onChange={handleInputChange}></textarea>
    </div>
  );
};


export default Editor;

