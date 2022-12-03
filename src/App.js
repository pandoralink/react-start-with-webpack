import { useState, createElement } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(++count);
  };

  return createElement("div", {
    children: [
      "count:" + count,
      createElement(
        "button",
        {
          key: "uniqueId",
          onClick: handleClick,
        },
        "click + 1"
      ),
    ],
  });
}

export default App;
