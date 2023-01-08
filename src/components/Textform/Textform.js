import React, { useState } from 'react'
import Textfrom from './Textform.css'

export default function Textform() {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleDownClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleClrTxt=()=>{
    let newText="";
    setText(newText)
  }
  const handleCpyTxt=()=>{
   var text=document.getElementById("txtarea");
   text.select();
   navigator.clipboard.writeText(text.value);
  }
  const [text, setText]=useState('');
  return (
    <div>
      <div className="textform">
        <label htmlFor="txtarea"><h3>Enter text here:</h3></label>
        <br />
        <textarea rows="20" cols="100" id="txtarea" value={text}  onChange={handleOnChange}></textarea>
        <br />
        <button type="btn" id="convtouppr" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button type="btn" id="convtolower" onClick={handleDownClick}>Convert to lowercase</button>
        <button type="btn" id="clrtxt" onClick={handleClrTxt}>Clear Text</button>
        <button type="btn" id="cpytxt" onClick={handleCpyTxt}>Copy to Clipboard</button>
      </div>
      <div className="txtdsc">
        <h3>Destriction of Text</h3>
        <p>The text have 
          {" "+text.split(/\s+/).filter((element)=>{return element.length!==0}).length+" "}
          words and {text.length} characters</p>
        <p>No. of sentences are {text.split(".").filter((element)=> element.length!==0).length}</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text: 'Enter some text to preview'}</p>
      </div>
    </div>
  )
}
