import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <App />
     
   </React.StrictMode>
 );
reportWebVitals();

// function Hello(props)
// {
 
//   return( 
//     <div>
//   <h3>ID: {props.ID}</h3>
//   <h3>Name: {props.name}</h3>
//   </div>
//   );
// }


// ReactDOM.render
// (
// <Hello 
// name="dhara" 
// ID={7}
// ></Hello>

// ,
// document.getElementById("root")
// );