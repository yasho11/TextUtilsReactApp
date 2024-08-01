import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = () =>
    {
        console.log("Convert to uppercase pressed");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => 
    {
        console.log("On change");
        setText(event.target.value); 
    }
    const handleLowClick = () =>
        {
            console.log("Convert to uppercase pressed");
            let newText = text.toLowerCase();
            setText(newText);
        }
    const [text , setText] = useState('Enter text here');
    return (
    <div>
        <div className="container">
        <h1>{props.heading}</h1>
            <div className="mb-3">
             <textarea className="form-control" onChange = {handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>Reading time: {0.008 * text.split(" ").length}  Minutes </p>
        </div>
        <div className="container my-3">
            <h1>Preview</h1>
            <p>{text}</p>
        </div>

    </div>
  )
}
