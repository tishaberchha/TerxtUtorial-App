
import React, { useState } from 'react'
import './TextForm.css';
export default function TextForm(props) {


    let vowel = document.querySelector(".vowel");
    let cons = document.querySelector('.cons');
    const handleUpClick = () => {
        console.log("Uppercase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
        vowel.classList.remove("act");
        cons.classList.remove("act");

    }
    const handleLowClick = () => {
        console.log("Uppercase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
        vowel.classList.remove("act");
        cons.classList.remove("act");
    }
    const handleClear = () => {
        console.log("clear");
        let newText = " "
        setText(newText);
        props.showAlert("Clear the text", "success");
        vowel.classList.remove("act");
        cons.classList.remove("act");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        vowel.classList.remove("act");
        cons.classList.remove("act");
    }

    const Copy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied!", "success");
        vowel.classList.remove("act");
        cons.classList.remove("act");
        document.getSelection().removeAllRanges();
    }
    //Global declaration:
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    let countChar = 0,
        countCons = 0;

    // Function to count Vowels:

    const handleVoClick = () => {
        for (count = 0; count <= text.length; count++) {
            if (text.charAt(count).match(/[aeiouAEIOU]/)) {
                countChar++;
            }
            setCount(countChar);
        }
        cons.classList.remove("act");
        vowel.classList.add("act");
    };

    // Function to count Consonants:
    const handleCoClick = () => {
        for (count1 = 0; count1 <= text.length; count1++) {
            if (
                text
                    .charAt(count1)
                    .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
            ) {
                countCons++;
            }
            setCount1(countCons);
        }
        cons.classList.add("act");
        vowel.classList.remove("act");
    }



    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);

    }
    const [text, setText] = useState('');
    // text="new text" wrong way to change the state
    //setText("new Text");//right way
    return (
        <>
            <div>
                <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h1 className='mb-4'>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#3d628f', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                    <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handleUpClick}>Uppercase</button>

                    <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Lowercase</button>
                    <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClear}>Clear</button>
                    <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={speak}>Speak</button>
                    <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={Copy}>Copy</button>

                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleVoClick}>
                        Count no. of Vowels
                    </button>

                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCoClick}>
                        Count no. of Consonants
                    </button>

                </div>
            </div>

            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p className='para'>{text.split(" ").filter((element) => {
                    return element.length !== 0
                }).length} words and {text.length} charcters</p>
                <p>{0.008 * text.split(" ").length}  Minutes read</p>  
                <h2 className='container'>Preview</h2>
                <p>{text}</p>
                <h3>You have entered:</h3>
                <p className='vowel'>{count} : No. of Vowels</p>
                <p className='cons'>{count1} No. of Consonants</p>
            </div>
        </>
    )
}
