import React, { useState } from "react";

function App() {

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

export default App;