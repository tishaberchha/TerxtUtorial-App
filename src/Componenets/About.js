import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     // border:'1px solid black'
    // })
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#7c9ac5' : 'white',
    }
    // const [BtnText, setBtnText] = useState('Enable Light Mode');

    // const ChangeBc=()=>{
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
   
    // }
   
  return (
      <div>
          <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#7c9ac5' }}>
          <h2 className='my-3'>About Us</h2>
              <div className="accordion" style={myStyle} id="accordionExample">
                  <div className="accordion-item" style={myStyle}>
                      <h2 className="accordion-header">
                          <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Analyze your text
                      </button>
                  </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                          <div className="accordion-body" style={myStyle}>
                              The text is presented in the form of a request or directive, which implies that the reader should perform the analysis.The text contains an instruction or command to analyze something. In this case, it's asking for an analysis of a text paragraph.
                      </div>
                  </div>
              </div>
              <div className="accordion-item">
                      <h2 className="accordion-header">
                          <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Easy to use
                      </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                              It implies that the text is not subject to copyright protection or any usage restrictions, allowing others to use it as they see fit. However, it's essential to clarify that the extent of this freedom may vary depending on the context and any additional terms or conditions that may apply.
                      </div>
                  </div>
              </div>
              <div className="accordion-item">
                  <h2 className="accordion-header">
                          <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                         Browser Compatible
                      </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                              Text content, such as articles, blog posts, or plain text, is usually universally compatible with web browsers, as it doesn't contain the complex code or design elements that can lead to browser compatibility problems.
                      </div>
                  </div>
              </div>
              </div>
                {/* <div className='container my-3'>
                    <button onClick={ChangeBc} type="button" className="btn btn-primary">{BtnText}</button>
                </div> */}
          </div>
          </div>
      
  )
}
