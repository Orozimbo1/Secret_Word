import './Game.css'

const Game = ({ verifyLetter, pickedCategory }) => {
  return (
    <div className="game">
      <p className="point">
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className='tip'>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra:</p>
        <form>
          <input type="text" name='letter' maxLength='1' required />
          <button>Enviar</button>
        </form>
      </div>
      <div className="wrongLettersContainers">
        <p>Letras já utilizadas:</p>
        <span>a,</span>
        <span>b,</span>
      </div>
    </div>
  )
}

export default Game