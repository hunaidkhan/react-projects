import React from 'react'
// import 'codemirror/lib/codemirror.css' 
// import 'codemirror/theme/material.css'
// import 'codemirror/mode/xml/xml' 
// import 'codemirror/mode/javascript/javascript' 
// import 'codemirror/mode/css/css' 
import 'codemirror'
import {Controlled as ControlledEditor} from 'react-codemirror2'

export default function Editor({language, displayName, value, handleChange}) {
  return (
    <div className='editor-container'>
        <div className='editor-title'>
            {displayName}
            <button className='resize-button'>O/C</button>
        </div>
        <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true
        }} />
    </div>
  )
}
