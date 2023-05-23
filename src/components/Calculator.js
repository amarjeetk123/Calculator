import React, { useState } from 'react'
import "../App.css"

const Calculator = () => {
    const [number, setNumber] = useState("");
    const handleClick = (e) => {
        console.log(e.target.value)
        setNumber(number.concat(e.target.value))
    }
    const clear = () => {
        setNumber("")
    }
    const backSpace = () => {
        setNumber(number.slice(0, number.length - 1))
    }
    const result = () => {
        setNumber(eval(number).toString());
    }
    return (
        <div className='main'>
            <div className='box'>
                <form action="get">
                    <input type="text" readOnly value={number} name="display" id="display" placeholder="0" />
                    <div className="buttons">
                        <div className="row1">
                            <input type="button" className="highlight clear" value="Clear" onClick={clear} />
                            <input type="button" className="other highlight" value="C" onClick={backSpace} />
                            <input type="button" className="highlight" value="X" onClick={backSpace} />

                        </div>
                        <div className="row1">
                            <input type="button" className="btn" value="1" onClick={handleClick} />
                            <input type="button" className="btn" value="2" onClick={handleClick} />
                            <input type="button" className="btn" value="3" onClick={handleClick} />
                            <input type="button" className="highlight" value="+" onClick={handleClick} />
                        </div>
                        <div className="row2">
                            <input type="button" className="btn" value="4" onClick={handleClick} />
                            <input type="button" className="btn" value="5" onClick={handleClick} />
                            <input type="button" className="btn" value="6" onClick={handleClick} />
                            <input type="button" className="highlight" value="-" onCanPlay={handleClick} />
                        </div>
                        <div className="row3">
                            <input type="button" className="btn" value="7" onClick={handleClick} />
                            <input type="button" className="btn" value="8" onClick={handleClick} />
                            <input type="button" className="btn" value="9" onClick={handleClick} />
                            <input type="button" className="highlight" value="/" onClick={handleClick} />
                        </div>
                        <div className="row4">
                            <input type="button" className="btn" value="." />
                            <input type="button" className="btn" value="0" onClick={handleClick} />
                            <input type="button" value="=" className="equal btn tran" onClick={result} />
                        </div>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default Calculator;