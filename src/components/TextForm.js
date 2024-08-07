import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpClick = () => {
        console.log("Convert to uppercase pressed");
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Converted to Uppercase!!","success");
    }

    const handleLowClick = () => {
        console.log("Convert to lowercase pressed");
        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert("Converted to Lowercase!!","success");
    }

    const reverseString = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.ShowAlert("Text has been reversed","success");
    }

    const removeExtraSpaces = () => {
        let newText = text.trim().replace(/\s+/g, ' ');
        setText(newText);
        props.ShowAlert("Extra spaces Removed!","success");
    }

    const extractEmail = () => {
        const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        let newText = text.match(emailPattern) || [];
        setText(newText.join(', '));
        props.ShowAlert("Email Extarcted","success");
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text).then(() => {
            props.ShowAlert("Text copied to clipboard","success");
        }).catch((err) => {
            console.error("Failed to copy text: ", err);
            props.ShowAlert("Failed to copy text","danger");
        });
    }

    const handleClearClick = () => {
        console.log("Clear text pressed");
        let newText = "";
        setText(newText);
        props.ShowAlert("Text cleared","danger");
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    return (
        <div>
            <div className="container"  style={{color:props.mode==='dark'?'White':'Black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        onChange={handleOnChange}
                        value={text}
                        id="myBox"
                        rows="8"
                        style={{backgroundColor:props.mode==='dark'?'#212529':'White' , color: props.mode === 'dark'?'white':'black'}}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={reverseString}>Reverse Text</button>
                <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={extractEmail}>Extract Email</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3 " style={{color:props.mode==='dark'?'White':'Black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
                <p>Reading time: {0.008 * text.split(" ").length} Minutes</p>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>Preview</h1>
                <p>{text.length>0?text:"Enter Something to preview here"}</p>
            </div>
        </div>
    );
}
