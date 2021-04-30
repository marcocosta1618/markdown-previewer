import './style/App.css';
import React from 'react';
import { TextInput } from './components/Previewer';
import { Preview } from './components/Previewer';

function App() {
  return (
    <div className="App">
      <TextInput />
      <Preview />
    </div>
  );
}

export default App;