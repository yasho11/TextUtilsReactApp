import React from 'react';

export default function About(props) {
  const darkModeStyles = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#212529' : 'white'
  };

  return (
    <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1 className="my-2">About TextUtils</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={darkModeStyles} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Features
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>TextUtils Features:</strong> 
              <ul>
                <li>Text manipulation tools like uppercase, lowercase, and text reversal.</li>
                <li>Word and character count.</li>
                <li>Text formatting options.</li>
                <li>Real-time text preview.</li>
              </ul>
              These features help you efficiently manage and transform your text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={darkModeStyles} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Benefits
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Benefits of Using TextUtils:</strong>
              <ul>
                <li>Enhanced productivity through quick text transformations.</li>
                <li>Improved text readability and consistency.</li>
                <li>Easy-to-use interface for seamless text editing.</li>
                <li>Accessible on various devices for on-the-go use.</li>
              </ul>
              TextUtils aims to simplify your text editing tasks, making it more efficient and enjoyable.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={darkModeStyles} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Get Started
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>How to Get Started with TextUtils:</strong>
              <ul>
                <li>Visit our website and navigate to the TextUtils tool.</li>
                <li>Enter your text in the provided text area.</li>
                <li>Select the desired text manipulation options from the menu.</li>
                <li>View the real-time results and make further adjustments as needed.</li>
              </ul>
              TextUtils is designed to be user-friendly, helping you achieve your text editing goals quickly and effectively.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
