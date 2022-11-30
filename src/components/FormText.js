
import React ,{useState} from 'react'
export default function FormText(props) {
  const [text, setText]= useState("");
  
  const handleUp = () => {
    let newValue = text.toUpperCase()
    setText(newValue)
    props.showAlert("Convert to UpperCase","success")
  }

  
  const handleLo = () => {
    let newValue = text.toLowerCase()
    setText(newValue)
    props.showAlert("Convert to LowerCase","success")
  }
  
  const handleSpace = () => {
    let newValue = text.split(/[ ]+/);
    setText(newValue.join(" "))
    props.showAlert("Extra Space Handle SuccessFully","success")
  }

  const handleCopy = () => {
    var text = document.getElementById("textInput");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success")
  }

  const handleClear = () => {
    let newValue = "";
    setText(newValue);
    props.showAlert("TextBox is now Clear","success")
  }
  
  const handleOn = (event) => {
    setText(event.target.value);
  }
  
 
  // let divStyle={
  //   color: `${props.mode==='dark'?'white':'black'}`
  // }

  return (
    <>
    <div className='container my-2' style={{ color:`${props.mode==='dark'?'white':'black'}`}} >
      <h2>{props.heading}</h2>
      
      <textarea type="text" className="form-control " rows='7' style={{brder:`1 px solid ${props.mode==='dark'?'white':'black'}` ,
      background: `${props.mode==='dark'?'#a6a6a6':'white'}` }} onChange={handleOn} id="textInput" value={text} placeholder="Enter yout Text here"/>
      
    
      
    <button onClick={handleUp} className="btn btn-primary my-2">Convert to UpperCase</button>
    <button onClick={handleLo} className="btn btn-primary my-2 mx-1">Convert to LowerCase</button>
    <button onClick={handleSpace} className="btn btn-primary my-2 mx-1">Remove Space</button>
    <button onClick={handleClear} className="btn btn-primary my-2 mx-1">Clear</button>
    <button onClick={handleCopy} className="btn btn-primary my-2 mx-1">Copy Text</button>
    </div>
    
    <div className={`container`} style={{ color:`${props.mode==='dark'?'white':'black'}`}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words, {text.length} Alphabets</p>
    </div>

    <div className="container" style={{ color:`${props.mode==='dark'?'white':'black'}`}}>
      <h2>Your Text</h2>
      <p>{text.length>0?text:"Enter Some Text in TextBox to Preview Something"}</p>
    </div>
    </>
  )
}
