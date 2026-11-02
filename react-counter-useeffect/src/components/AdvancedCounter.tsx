import { useState, useEffect } from "react";
export default function AdvancedCounter() {
  const [currentCount, setCurrentCount] = useState<number>(0);

  const [history, setHistory] = useState<number[]>([currentCount]);
  const [upArrowPressed, setUpArrowPressed] = useState<boolean>(false);
  const [downArrowPressed, setDownArrowPressed] = useState<boolean>(false);
  const [stepValue, setStepValue] = useState<number>(1);
  //Use useEffect for side effects like auto-saving and adding/removing keyboard event listeners.
  //Ensure all useEffect hooks that set up subscriptions or event listeners have proper cleanup functions.

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowUp") {
      setUpArrowPressed(true);
    } else if (e.key === "ArrowDown") {
      setDownArrowPressed(true);
    }
  }

  function handleKeyUp(e: KeyboardEvent) {
    if (e.key === "ArrowUp") {
      setUpArrowPressed(false);
    } else if (e.key === "ArrowDown") {
      setDownArrowPressed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    if (upArrowPressed) {
      incCurrentCount();
    } else if (downArrowPressed) {
      decCurrentCount();
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [upArrowPressed, downArrowPressed]);

  function incCurrentCount() {
    let newCount = currentCount + stepValue;
    setCurrentCount(newCount);
    setHistory((prevHistory) => [...prevHistory, newCount]);
  }
  function decCurrentCount() {
    let newCount = currentCount - stepValue;
    setCurrentCount(newCount);
    setHistory((prevHistory) => [...prevHistory, newCount]);
  }

  function resetCurrentCount() {
    setCurrentCount(0);
    setHistory([]);
  }

  const getHeightClass = (currentCount: number) => {
    if (currentCount === 0) return "h-15";
    if (currentCount === 1 || currentCount === -1) return "h-20";
    if (currentCount === 2 || currentCount === -2) return "h-25";
    if (currentCount === 3 || currentCount === -3) return "h-30";
    return "h-35";
  };
  return (
    <div className="flex justify-center mt-10">
      <div className="border-2 border-gray-200 rounded-xl p-10">
        <div className="text-center mb-5">
          {" "}
          <h1> Counter </h1>
        </div>

        <div className="mb-10 text-center text-3xl font-semibold">
          Current Count: {currentCount}
        </div>
        <div className="flex flex-row justify-center items-center mb-10">
          <div className="w-25 flex-none">
            <button onClick={decCurrentCount}>Decrement</button>
          </div>
          <div className="w-25 flex-none">
            <button onClick={incCurrentCount}> Increment</button>
          </div>
          <div className="w-25">
            <button
              onClick={resetCurrentCount}
              className="bg-red-500 py-2 px-5 text-white text-lg"
            >
              {" "}
              Reset
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-center mb-5">
          <div className="flex flex-row gap-4">
            Step Value:{" "}
            <input
              onChange={(e) => setStepValue(Number(e.target.value))}
              type="number"
              id="quantity"
              name="quantity"
              step={1}
              min={1}
              max={1200}
              value={stepValue}
            />
          </div>
        </div>
        <div className="flex justify-center mb-5">Changes Saved</div>
        <div className="flex justify-start mb-2">Count History:</div>
        <hr className="h-px bg-gray-300 border-0 mb-5" />

        <div
          className={`flex flex-col overflow-y-auto ${getHeightClass(history.length)}`}
        >
          {history.map((record, index) => (
            <div className="block mb-3" key={index}>
              {" "}
              {record}{" "}
            </div>
          ))}
        </div>
        <div className="text-center">
          User ArrowUp to increment and ArrowDown to decrement.
        </div>
      </div>
    </div>
  );
}
