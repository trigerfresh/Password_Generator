import { useState, useRef } from "react";

const PassGenerator = () => {
  const rLength = useRef();
  const [length, setLength] = useState('');
  const [uc, setUc] = useState(false);
  const [di, setDi] = useState(false);
  const [sp, setSp] = useState(false);
  const [msg, setMsg] = useState('');

  const hLength = (event) => { setLength(event.target.value) }
  const hUc = (event) => { setUc(event.target.checked) }
  const hDi = (event) => { setDi(event.target.checked) }
  const hSp = (event) => { setSp(event.target.checked) }

  const gp = (event) => {
    event.preventDefault();

    if (length === "") {
      alert("Enter length");
      setMsg("");
      rLength.current.focus();
      return;
    }

    let len = parseInt(length);
    if (len < 6 || len > 12) {
      alert("Length must be between 6 and 12");
      return;
    }

    let text = "abcdefghijklmnopqrstuvwxyz";
    if (uc) text += text.toUpperCase();
    if (di) text += "0123456789";
    if (sp) text += "!@#$%^&*()<>?.";
    
    let pw = "";
    for (let i = 0; i < len; i++) {
      let r = Math.floor(Math.random() * text.length);
      pw += text[r];
    }
    setMsg(pw);
    console.log(pw);
  }

  return (
    <>
      <center>
        <h1>Password Generator</h1>
        <form onSubmit={gp}>
          <input type="number" ref={rLength} onChange={hLength} placeholder="Enter password length" min={6} max={12} value={length}
          /><br/><br/>
          <input type="checkbox" onChange={hUc} />Uppercase
          <input type="checkbox" onChange={hDi} />Digit
          <input type="checkbox" onChange={hSp} />Special Characters<br/><br/>

          <button type="submit" class="button-13" role="button">Submit</button>
        </form>
        <h2>{msg}</h2>
      </center>
    </>
  );
}

export default PassGenerator;
