// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// import Welcome from "./welcome";
// import Dashboard from "./dashboard";

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />

// //     {/* <BrowserRouter>
// //    <Switch>
// //     <Route exact path="/" component={Page1} />
// //     <Route path="/page2" component={Page2} />
// //   </Switch>
// //   </BrowserRouter> */}


// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// import * as serviceWorker from "./serviceWorker";


// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <BrowserRouter>
//    <Switch>
//     {/* <Route exact path="/" component={Welcome} /> */}
//     <Route path="/dashboard" component={Dashboard} />
//   </Switch>
//   </BrowserRouter>,
//   rootElement
// );

// serviceWorker.unregister();

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();


