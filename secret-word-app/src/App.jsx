// CSS
import './App.css';

// REACT
import { useState, useEffect, useCallback } from 'react';

// DATA
import { wordsList } from './data/word'

// COMPONENTS
import { StartScreen, Game, GameOver } from './components'

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  console.log(words);

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen />}
      {gameStage === 'game' && <Game />}
      {gameStage === 'end' && <GameOver />}
    </div>
  )
}

export default App
