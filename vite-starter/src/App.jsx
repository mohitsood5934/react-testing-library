import { useState } from "react";
import "./App.css";

function App() {
  const [buttonObj, setButtonObj] = useState({
    btnText: "Blue",
    className: "red",
    btnDisabled: false,
  });

  const { className = "", btnText = "", btnDisabled = false } = buttonObj;

  const onBtnClickHandler = () => {
    setButtonObj({
      btnText: "Red",
      className: "blue",
    });
  };

  const onCheckBoxClickHandler = (e) => {
    setButtonObj({
      ...buttonObj,
      btnDisabled: !btnDisabled,
      className: btnDisabled ? (btnText === 'Blue' ? 'red' : 'blue') : 'gray'
    });
  };

  return (
    <div>
      <h1>I'm gonna learn React Testing Library</h1>
      <button className={className} onClick={onBtnClickHandler} disabled={btnDisabled}>
        {btnText}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onClick={(e) => {
          e.stopPropagation();
          onCheckBoxClickHandler();
        }}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
