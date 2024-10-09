import React, {useState} from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Preview";
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState("# Hello world");
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