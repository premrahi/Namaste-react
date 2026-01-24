import React from "react";
import ReactDOM from "react-dom/client";

// react element  ==> Object ==> HTMLElement(render)
// const heading = React.createElement("h1" , {id : "heading"} , "this is heading")
// console.log(heading)

//JSX -> it is not html in js , it is html like syntax or XML like.
// const jsxHeading = <h1 id="heading">this is a jsx heading</h1>
// console.log(jsxHeading)

//react element
const heading = (
  <h1 id="heading" tabIndex={2}>
    this is a jsx heading
  </h1>
);
console.log(heading);


//react component
//class based component - OLD
//functional component - NEW - just a js component


//react functional component


const Title = ()=>{
    return (<h1 className="aalu" tabIndex="4">
        this is pirated namaste react
    </h1>) ; 
}

const HeadingComponent = ()=> (
    <div id="container">
        <Title/>
        <h3>Namaste react h3</h3>
    </div>
) // a js function that return a react element or JSX code








const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // way to render react element

root.render(<HeadingComponent />) ; //way to render a component
