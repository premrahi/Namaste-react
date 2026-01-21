//attributes
const heading = React.createElement(
  "h1",
  { id: "main" },
  "hey there from react",
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// nested element in html
/* 
<div>
    <div>
        <h1></h1>
    </div>
</div>

*/

//nested element in react

const secHeading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "this is a nested element!" ),
    ,React.createElement("h2", {}, "this is 2nd nested element!" ) ]
  ), // IF WE WANT TO PASS SIBLINGS TO THE CREATE ELEM. WE NEED TO PASSIT AS array ,
);

const secRoot = ReactDOM.createRoot(document.getElementById("secRoot")) ;

secRoot.render(secHeading) ;
