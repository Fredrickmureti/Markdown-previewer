import { marked } from "marked";
import React from "react";
import './styles/Preview.css';
import './styles/Editor.css';

// Configure marked for GitHub-Flavored Markdown and enable tables
marked.setOptions({
  gfm: true,
  breaks: true,
  tables: true,
  headerIds: false,
});

const Previewer = ({ markdown, isFullScreen, toggleFullScreen }) => {
  return (
    <div className="previewWrap">
      <div className="toolbar">
        <span>Previewer</span>
        <div className="toggler" onClick={toggleFullScreen}>
          {isFullScreen ? (
            <i className="fa fa-compress"></i>
          ) : (
            <i className="fa fa-arrows-alt"></i>
          )}
        </div>
      </div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      ></div>
    </div>
  );
};

export default Previewer;
