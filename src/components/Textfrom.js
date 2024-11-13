import React ,{useState} from 'react';

export default function Textfrom(props) {
    const handleonchange=(event)=>{
        console.log("handle changed");
        setText(event.target.value);
    }
    const changeUppercase=()=>{
        var newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been changed in UPPERCASE","success");
    }
    const changeLowercase=()=>{
        var newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been changed in lowercase","success");
    }
    const changeclear=()=>{
        var newText="";
        setText(newText);
        props.showAlert("Text has been changed in cleared","success");
    }
    const Capitalizedcase=()=>{
        var newText=text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
        setText(newText);
        props.showAlert("Text has been changed in Capitalized","success");
    }
    const SentenceCase=()=>{
        var newText=text.toLowerCase().charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Text has been changed in Sentence Case","success");
    }
    const copyText=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");
    }
    const extraSpaces=()=>{
        var newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("ExtraSpace has been Removed from Text","success");
    }
    const [text, setText] = useState("");
    return (
    <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='dark'?'white':'#042743',color:props.mode==='dark'?'#042743':'white'}} rows="8" value={text} onChange={handleonchange}></textarea>
                <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={changeUppercase} >UPPERCASE</button>
                <button disabled={text.length===0} className="btn btn-danger my-3 mx-2"  onClick={changeLowercase} >lowercase</button>
                <button disabled={text.length===0} className="btn btn-warning my-3 mx-2" onClick={changeclear} >Clear Text</button>
                <button disabled={text.length===0} className="btn btn-success my-3 mx-2" onClick={Capitalizedcase} >Capitalized Case</button>
                <button disabled={text.length===0} className="btn btn-danger my-3 mx-2" onClick={SentenceCase} >Sentence Case</button>
                <button disabled={text.length===0} className="btn btn-warning my-3 mx-2" onClick={copyText} >copy Text</button>
                <button disabled={text.length===0} className="btn btn-success my-3 mx-2" onClick={extraSpaces} >remove Extraspaces</button>

            </div>
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>your text summary</h1>
            <p>Character count: {text.length} | Word count: {text.split(" ").filter((element)=>{return element.length !== 0 }).length} | Line Count: {text.split(/\n/).length}</p>
            <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length * 0.008} Minutes read</p>
            <h2>text preview</h2>
            <p>{text.length>0?text:'Enter something in text box for preview.'}</p>
        </div>
    </>
  )
}
