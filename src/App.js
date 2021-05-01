import './style/App.css';
import React from 'react';
import { Editor } from './components/Previewer';
import { Preview } from './components/Previewer';

function App() {
  return (
    <div className="App">
      <Editor />
      <Preview />
    </div>
  );
}

export default App;