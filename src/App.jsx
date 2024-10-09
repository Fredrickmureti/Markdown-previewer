import React, {useState} from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Preview";
import './App.css';
import initialMarkdown from "./markdownContent";

const App = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown);
  const [isEditorFullScreen, setIsEditorFullScreen] = useState(false);
  const [isPreviewFullScreen, setIsPreviewFullScreen] = useState(false);


  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  }

  const toggleEditorFullScreen = () => {
    setIsEditorFullScreen(!isEditorFullScreen);
  }

  const togglePreviewFullScreen = () => {
    setIsPreviewFullScreen(!isPreviewFullScreen);
  }

  return (
    <div className="app">
      <Editor markdown={markdown} handleInputChange={handleInputChange} toggleFullScreen={toggleEditorFullScreen} isFullScreen={isEditorFullScreen}/>
      <div className="converter"></div>
      <Previewer markdown={markdown} toggleFullScreen={togglePreviewFullScreen} isFullScreen={isPreviewFullScreen}/>
    </div>
  );
};

export default App;