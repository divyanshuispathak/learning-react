import React from "react";
import ReactDOM from "react-dom/client";

// (JSX transpiled to an React.createElement(object) and then it is rendered as an HTMLElement)
// Parcel gives responsibility to babel to transpile the JSX code.

// React Element
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>

// React functional Component

const MyCourses = () => 
    (
        <div>
            <h1>System Design</h1>
            <h1>Data Structures & Algorithm</h1>
        </div>
    )


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyCourses/>);