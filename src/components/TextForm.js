import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        if (text.trim().length === 0) {
            props.ShowAlert("No text to convert!", "warning");
            return;
        }
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Converted to Uppercase!!", "success");
    }

    const handleLowClick = () => {
        if (text.trim().length === 0) {
            props.ShowAlert("No text to convert!", "warning");
            return;
        }
        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert("Converted to Lowercase!!", "success");
    }

    const reverseString = () => {
        if (text.trim().length === 0) {
            props.ShowAlert("No text to reverse!", "warning");
            return;
        }
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.ShowAlert("Text has been reversed", "success");
    }

    const removeExtraSpaces = () => {
        if (text.trim().length === 0) {
            props.ShowAlert("No text to process!", "warning");
            return;
        }
        let newText = text.trim().replace(/\s+/g, ' ');
        setText(newText);
        props.ShowAlert("Extra spaces Removed!", "success");
    }

    const extractEmail = () => {
        if (text.trim().length === 0) {
            props.ShowAlert("No text to extract from!", "warning");
            return;
        }
        const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        let newText = text.match(emailPattern) || [];
        setText(newText.join(', '));
        props.ShowAlert("Email Extracted", "success");
    }

    const handleCopyClick = () => {
        if (text.trim().length === 0) {
            props.ShowAlert("No text to copy!", "warning");
            return;
        }
        navigator.clipboard.writeText(text).then(() => {
            props.ShowAlert("Text copied to clipboard", "success");
        }).catch((err) => {
            console.error("Failed to copy text: ", err);
            props.ShowAlert("Failed to copy text", "danger");
        });
    }

    const handleClearClick = () => {
        if (text.trim().length === 0) {
            props.ShowAlert("No text to clear!", "warning");
            return;
        }
        setText("");
        props.ShowAlert("Text cleared", "danger");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const wordCount = text.split(/\s+/).filter((element) => element.length !== 0).length;
    const characterCount = text.replace(/\s/g, '').length;
    const wpm = 250
    const readingTime = (wordCount / wpm).toFixed(2);

    return (
        <div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'White' : 'Black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        onChange={handleOnChange}
                        value={text}
                        id="myBox"
                        rows="8"
                        style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'White', color: props.mode === 'dark' ? 'white' : 'black' }}
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
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'White' : 'Black' }}>
                <h1>Your text summary</h1>
                <p>{wordCount} words and {characterCount} characters (excluding spaces)</p>
                <p>Reading time: {readingTime} Minutes</p>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Preview</h1>
                <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
            </div>
        </div>
    );
}
