import { useState, useRef } from 'react';
import './App.css'; // Optional: You can remove this if unused

function App() {
  const [count, setCount] = useState(0);

  const incrementBtnRef = useRef();
  const decrementBtnRef = useRef();
  const resetBtnRef = useRef();
  const val = useRef(0);

  const handleIncrement = () => {
    val.current += 1;
    console.log("Ref value:", val.current);
    setCount(count + 1);
  };

  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeIncrementColor = () => {
    incrementBtnRef.current.style.backgroundColor = getRandomColor();
  };

  const changeDecrementColor = () => {
    decrementBtnRef.current.style.backgroundColor = getRandomColor();
  };

  const changeResetColor = () => {
    resetBtnRef.current.style.backgroundColor = getRandomColor();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-blue-200 p-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">React useRef Color Control</h1>

      <div className="flex space-x-4 mb-6">
        <button
          ref={incrementBtnRef}
          onClick={handleIncrement}
          className="px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-md transition-all duration-300"
        >
          Increment
        </button>
        <button
          ref={decrementBtnRef}
          onClick={handleDecrement}
          className="px-6 py-3 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-semibold shadow-md transition-all duration-300"
        >
          Decrement
        </button>
        <button
          ref={resetBtnRef}
          onClick={handleReset}
          className="px-6 py-3 rounded-2xl bg-yellow-500 hover:bg-yellow-600 text-white font-semibold shadow-md transition-all duration-300"
        >
          Reset
        </button>
      </div>

      <p className="text-2xl font-medium text-gray-800 mb-6">Count: {count}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button
          onClick={changeIncrementColor}
          className="px-5 py-3 rounded-xl bg-indigo-400 hover:bg-indigo-500 text-white font-medium shadow transition duration-300"
        >
          Change Increment Button Color
        </button>
        <button
          onClick={changeDecrementColor}
          className="px-5 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-medium shadow transition duration-300"
        >
          Change Decrement Button Color
        </button>
        <button
          onClick={changeResetColor}
          className="px-5 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium shadow transition duration-300"
        >
          Change Reset Button Color
        </button>
      </div>
    </div>
  );
}

export default App;
