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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// import React, { useState } from 'react'
// import "../App.css"

// const Calculator = () => {
//     const[number, setNumber] = useState("");
//     const handleClick = (e) => {
//         console.log(e.target.value)
//         setNumber(number.concat(e.target.name).toString())
//     }
//     const clear = () => {
//         setNumber("")
//     }
//     const backSpace = () => {
//         setNumber(number.slice(0,number.length-1))
//     }
//      return (
//         <div className='main'>
//             <div className='box'>
//                 <form action="get">
//                     <input type="number" readOnly value={number} name="display" id="display" placeholder="0" />
//                     <div className="buttons">
//                     <div className="row1">
//                     <input type="button" className="highlight clear"  value="Clear" onClick={clear} />
//                     <input type="button" className="other highlight"  value="C" onClick={backSpace} />
                     
//                     <input type="button" className="highlight" value="X" />
                          
//                         </div>
//                         <div className="row1">
//                             <input type="button" className="btn" value="1" onClick={handleClick} />
//                             <input type="button" className="btn" value="2" onClick={handleClick} />
//                             <input type="button" className="btn" value="3" onClick={handleClick} />
//                             <button className="highlight" onClick={handleClick} value={"/"} > &divide;  </button>
//                         </div>
//                         <div className="row2">
//                             <input type="button" className="btn" value="4" onClick={handleClick} />
//                             <input type="button" className="btn" value="5" onClick={handleClick} />
//                             <input type="button" className="btn" value="6" name='6' onClick={handleClick} />
//                             <button className="highlight" onClick={handleClick} value='-' name='-' > &ndash;  </button>
//                         </div>
//                         <div className="row3">
//                             <input type="button" className="btn" value="7" onClick={handleClick} />
//                             <input type="button" className="btn" value="8" onClick={handleClick} />
//                             <input type="button" className="btn" value="9" onClick={handleClick} />
//                             <input type="button" className="highlight" value="+" onClick={handleClick} />
//                         </div>
//                         <div className="row4">
//                             <input type="button" className="btn" value="." />
//                             <input type="button" className="btn" value="0" onClick={handleClick} />
//                             <input type="button" value="=" className="equal btn tran" />
//                         </div>
                       
//                     </div>
//                 </form>

//             </div>
//         </div>
//     )
// }

// export default Calculator;
