import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const element=React.createElement("h1",null,"Welcome to React Programming World....");
// ReactDOM.render(element,document.getElementById("root"));

const element=React.createElement("div",{className:"testclass"},

React.createElement("h1",null,'Welcome to React Programming World'),

React.createElement('h2',null,'Understanding the creation of React Element'));
ReactDOM.render(element,document.getElementById("root"));

// const element =<h1 className="testclass">Welcome to React programming...</h1>;
// ReactDOM.render(element,document.getElementById("root"));
// const newelement =<h1 className="testclass">Understanding the creation of Element in React..</h1>;
// ReactDOM.render(newelement,document.getElementById("App"));

// const element=(
//   <div className="testclass">
//     <h1>Welcome to the React Programming...</h1>
//     <h1>Understanding the creation of React Element...</h1>
//   </div>
// );
// ReactDOM.render(element,document.getElementById("root"));