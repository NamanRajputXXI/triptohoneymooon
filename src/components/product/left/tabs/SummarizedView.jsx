import React from "react";

const SummarizedView = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Trip Summary</h2>
      <div className="flex items-center mb-4 space-x-4 text-sm text-gray-600">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
          4 Activities
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zm11 3a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
          </svg>
          8 Transfers
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-8a1 1 0 01-1-1V4zm3 1v2h2V5H7zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
              clipRule="evenodd"
            />
          </svg>
          1 Hotel
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <span>Day 1 - Zurich</span>
            <span className="ml-auto flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
              <span>1</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-8a1 1 0 01-1-1V4zm3 1v2h2V5H7zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clipRule="evenodd"
                />
              </svg>
              <span>1</span>
            </span>
          </h3>
          <div className="ml-6">
            <p className="text-sm mb-2">
              <span className="font-semibold">Activity:</span> Swiss Continuous
              Pass - 6 Days Pass
            </p>
            <p className="text-sm">
              <span className="font-semibold">Hotel:</span> Check-in at Deluxe
              Hotel in Zurich
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <span>Day 2 - Zurich</span>
            <span className="ml-auto flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
              <span>2</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zm11 3a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
              <span>6</span>
            </span>
          </h3>
          <div className="ml-6">
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">6 Transfers:</h4>
              <ul className="list-disc list-inside text-sm">
                <li>Transfer from Zurich Enge to Luzern</li>
                <li>Transfer from Luzern to Engelberg station</li>
                <li>Transfer from Engelberg station to Engelberg Titlisbahn</li>
                <li>Transfer from Engelberg Titlisbahn to Engelberg station</li>
                <li>Transfer from Engelberg station to Lucerne Station</li>
                <li>Transfer from Lucerne Station to Zurich Station</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">2 Activities:</h4>
              <ul className="list-disc list-inside text-sm">
                <li>
                  Mount Titlis Tour, Switzerland - With Swiss Pass with Ice
                  flyer
                </li>
                <li>Lucerne Walking Tour with Lake Lucerne Cruise</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <span>Day 3 - Zurich</span>
            <span className="ml-auto flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
              <span>2</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zm11 3a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
              <span>6</span>
            </span>
          </h3>
          <div className="ml-6">
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">6 Transfers:</h4>
              <ul className="list-disc list-inside text-sm">
                <li>Transfer from Zurich Enge to Luzern</li>
                <li>Transfer from Luzern to Engelberg station</li>
                <li>Transfer from Engelberg station to Engelberg Titlisbahn</li>
                <li>Transfer from Engelberg Titlisbahn to Engelberg station</li>
                <li>Transfer from Engelberg station to Lucerne Station</li>
                <li>Transfer from Lucerne Station to Zurich Station</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">2 Activities:</h4>
              <ul className="list-disc list-inside text-sm">
                <li>
                  Mount Titlis Tour, Switzerland - With Swiss Pass with Ice
                  flyer
                </li>
                <li>Lucerne Walking Tour with Lake Lucerne Cruise</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarizedView;
