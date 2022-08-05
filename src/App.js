import { useState } from 'react';

const width = 8;
const toolColors = ["blue", "green", "orange", "purple", "red", "yellow"];

const App = () => {
const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomNumberFrom0To5 = Math.floor(Math.random() * toolColors.length);
      const randomColor = toolColors[randomNumberFrom0To5];
      randomColorArrangement.push(randomColor);
    }
  };

  createBoard();

  return (
    <div></div>
  );
};


export default App;
