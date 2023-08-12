import React,{ useState } from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {

    const handleUpClick=(event)=> {
        let newText =  text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase! ","Success : ");
        event.preventDefault();
    }

    const handlelowClick=(event)=> {
        let newText =  text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase! ","Success : ");
        event.preventDefault();
    }
   
    const handledeleteClick=(event)=> {
        let newText =  text.slice(0,-1);
        setText(newText);
        event.preventDefault();
    }
    const handleonCopy=(event)=>{
        let copied = document.getElementById('exampleFormControlTextarea1').value;
        // alert("Text copied");
        props.showAlert("Text Copied ","Success : ");
        event.preventDefault();
    } 
    const boldtext=(event)=>{
        let ntext = document.getElementById('exampleFormControlTextarea1');
        ntext.style.fontWeight='bold';
        props.showAlert("Bold Style applied!","Success : ");
        event.preventDefault();
    }
    const extraspace=(event)=>{
        let newText =text.replace(" ","");
        setText(newText);
        event.preventDefault();
        
       
    }
   
   

    const handleOnChange=(event)=>{
        setText(event.target.value);
        event.preventDefault();
    }

    
    const [text, setText] = useState('');

    return (
        <>
        <div>
            <form>
                <h1 className={`container text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
                <div className="form-group ">
                    <textarea className="form-control " id="exampleFormControlTextarea1" onChange={handleOnChange}  style={{backgroundColor:props.mode === 'dark'?'#333333':'light',color:props.mode ==='dark'?'white':'light'}}value={text} rows="8"></textarea>
                    <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={handlelowClick}>Convert to Lowercase</button>
                    <button className='btn btn-primary my-3 mx-1' onClick={handledeleteClick}>Delete</button>
                    <button className='btn btn-primary my-3 mx-1'id="copytext" onClick={handleonCopy}>Copy Text</button>
                    <button className='btn btn-primary my-3 mx-1' onClick={extraspace}>Remove Space</button>
                    <button className='btn btn-primary my-3 mx-1'id="bold-text" onClick={boldtext}>Bold</button>




                </div>
            </form>
        </div>

        <div className={`container my-2 text-${props.mode=='dark'?'light':'dark'}`}>
           <h2>Your Text Summary</h2>
           <p>{text.split(" ").length}words and {text.length} characters ! </p>
           <p>{0.008 * text.split(" ").length} Minutes isRequired! </p>
           <h2>Preview</h2>
           <p>{text.length>0?text:'Enter Your Text above to see preview...'}</p>
        </div>
        </>
    )
}
