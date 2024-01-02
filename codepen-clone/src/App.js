import React from 'react'
import './App.css';
import Editor from './Editor';

function App() {
  return (
    <>
    <div className='pane top-pane'>
      <Editor />
      <Editor />
      <Editor />
    </div>
    <div className='pane'>
      <iframe
      title='output'
      sandbox='allow-scripts'
      frameBorder='0'
      width='100%'
      height='100%'
      ></iframe>
    </div>
    <div>Hello</div>
    </>
  );
}

export default App;
