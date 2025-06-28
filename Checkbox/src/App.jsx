import React, { useState } from "react";

 export function App() {

    const[checked, setChecked] = useState({
        html:false,
        css:false,
        js:false
    })

    const htmlChecked = (e) => {
        setChecked({
            ...checked, html: e.target.checked, 
        })

        console.log("HTML Checked:", e.target.checked);
    }
    const cssChecked = (e) => {
        setChecked({
            ...checked, css: e.target.checked, 
        })
        console.log("CSS Checked:", e.target.checked);
        
    }
    const jsChecked = (e) => {
        setChecked({
            ...checked, js: e.target.checked,
        })
        console.log("JS Checked:", e.target.checked);
        
    }

    return (

        <div>
            <h1>Checkbox Example</h1>
            <label>
                <input type="checkbox" onChange={htmlChecked} />
                Html
            </label>
            <br />
            <label>
                <input type="checkbox" onChange={cssChecked} />
                CSS
            </label>
            <br />
            <label>
                <input type="checkbox" onChange={jsChecked} />
                js
            </label>
            <h2>Display data check</h2>
            <div>
                {checked.html && <p>HTML is checked</p>}
                {checked.css && <p>CSS is checked</p>}
                {checked.js && <p>JS is checked</p>}
                    
            </div>
        </div>
    );
}



 export function App2() {
  const [checked, setChecked] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setChecked([...checked, value]);
    } else {
      setChecked(checked.filter((item) => item !== value));
    }

    console.log("Checked List:", checked);
  };

  return (
    <div>
      <h1>Checkbox Example</h1>

      <label>
        <input
          type="checkbox"
          value="html"
          checked={checked.includes("html")}
          onChange={handleCheckboxChange}
        />
        HTML
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="css"
          checked={checked.includes("css")}
          onChange={handleCheckboxChange}
        />
        CSS
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="js"
          checked={checked.includes("js")}
          onChange={handleCheckboxChange}
        />
        JS
      </label>

      <h2>Display checked values:</h2>
      <ul>
        {checked.map((item) => (
          <li key={item}>{item.toUpperCase()} is checked</li>
        ))}
      </ul>
    </div>
  );
}
