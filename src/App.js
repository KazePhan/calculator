import './style.css';
function App() {
  return (
    <div className="cal-grid">
      <div className="output">
        <div className="previous-result"></div>
        <div className="current-result"></div>
      </div>
      <button className="span-tow">AC</button>
      <button>DEL</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-tow">=</button>
    </div>
  );
}

export default App;
