import React, { useState } from 'react';
import './Calculator.scss';

function Calculator() {
  // Состояние для хранения введенного примера и результата
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');

  // Обработчик клика по кнопке "С"
  const handleClearClick = () => {
    setInputValue('');
    setResultValue('');
  };

  // Обработчик клика по кнопке "="
  const handleEqualClick = () => {
    try {
      const result = eval(inputValue);
      setResultValue(result.toString());
    } catch (e) {
      setResultValue('Error');
    }
  };

  // Обработчик клика по кнопке "√"
  const handleSqrtClick = () => {
    try {
      const result = Math.sqrt(parseFloat(inputValue));
      setResultValue(result.toString());
    } catch (e) {
      setResultValue('Error');
    }
  };

  // Обработчик клика по кнопке "%"
  const handlePercentClick = () => {
    try {
      const result = eval(inputValue + '/100');
      setResultValue(result.toString());
    } catch (e) {
      setResultValue('Error');
    }
  };

  // Обработчик клика по кнопке с цифрой или операцией
  const handleButtonClick = (e) => {
    const value = e.target.value;
    setInputValue(inputValue + value);
  };

  return (
    <div className="background">
      <div className="calculator">
        <input className="sample" type="text" value={inputValue} readOnly />
        <input className="result" type="text" value={resultValue} readOnly />
        <br />
        <div className="buttons">
          <button onClick={handleClearClick}>C</button>
          <button onClick={handleSqrtClick}>√</button>
          <button onClick={handlePercentClick}>%</button>
          <button onClick={handleButtonClick} value="/">
            /
          </button>
          <button onClick={handleButtonClick} value="7">
            7
          </button>
          <button onClick={handleButtonClick} value="8">
            8
          </button>
          <button onClick={handleButtonClick} value="9">
            9
          </button>

          <button onClick={handleButtonClick} value="*">
            x
          </button>

          <br />
          <button onClick={handleButtonClick} value="4">
            4
          </button>
          <button onClick={handleButtonClick} value="5">
            5
          </button>
          <button onClick={handleButtonClick} value="6">
            6
          </button>

          <button onClick={handleButtonClick} value="-">
            -
          </button>

          <br />
          <button onClick={handleButtonClick} value="1">
            1
          </button>
          <button onClick={handleButtonClick} value="2">
            2
          </button>
          <button onClick={handleButtonClick} value="3">
            3
          </button>

          <button onClick={handleButtonClick} value="+">
            +
          </button>

          <br />

          <button onClick={handleButtonClick} value="00">
            00
          </button>
          <button onClick={handleButtonClick} value="0">
            0
          </button>

          <button onClick={handleButtonClick} value=".">
            ,
          </button>
          <button className="resultBtn" onClick={handleEqualClick}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
