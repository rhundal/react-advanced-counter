import { useState, useEffect } from "react";
export default function AdvancedCounter() {
  const [currentCount, setCurrentCount] = useState<number>(0);

  const [history, setHistory] = useState<number[]>([]);

  //Use useEffect for side effects like auto-saving and adding/removing keyboard event listeners.
  //Ensure all useEffect hooks that set up subscriptions or event listeners have proper cleanup functions.

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
            <button>Decrement</button>
          </div>
          <div className="w-25 flex-none">
            <button> Increment</button>
          </div>
          <div className="w-25">
            <button className="bg-red-500 py-2 px-5 text-white text-lg">
              {" "}
              Reset
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-center mb-5">
          <div className="flex flex-row gap-4">
            Step Value:{" "}
            <input
              type="number"
              id="quantity"
              name="quantity"
              step={1}
              min={1}
              max={1200}
              value={1}
            />
          </div>
        </div>
        <div className="flex justify-center mb-5">Changes Saved</div>
        <div className="flex justify-start mb-10">Count History:</div>
        <div className="mb-5">{history}</div>
        <div className="text-center">
          User ArrowUp to increment and ArrowDown to decrement.
        </div>
      </div>
    </div>
  );
}
