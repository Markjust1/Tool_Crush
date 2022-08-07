import { useEffect, useState } from "react";

const width = 8;
const toolColors = ["blue", "green", "orange", "purple", "red", "yellow"];

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const checkForColumnOfThree = () => {
    for (let i = 0; i <= 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      const decidedColor = currentColorArrangement[i];
      if ( columnOfThree.every(square => currentColorArrangement[square] === decidedColor
        )
      ) {
        columnOfThree.forEach(
          (square) => currentColorArrangement[square] === ''
        );
      }
    }
  };

  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomNumberFrom0To5 = Math.floor(
        Math.random() * toolColors.length
      );
      const randomColor = toolColors[randomNumberFrom0To5];
      randomColorArrangement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangement);
  };

  useEffect(() => {
    createBoard();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfThree();
      setCurrentColorArrangement([...currentColorArrangement]);
    }, 100);
    return () => clearInterval(timer);
  }, [ checkForColumnOfThree ]);

  // console.log(currentColorArrangement);

  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((toolColor, index) => (
          <img
            key={index}
            style={{ backgroundColor: toolColor }}
            alt={toolColor}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
