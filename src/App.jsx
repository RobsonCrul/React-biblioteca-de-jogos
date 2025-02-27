import gameList from './hooks/gameList.js'

export default function App(){
  const games = gameList()

  return (
    <div className='app'>
      <h1 className='title'>Biblioteca de Jogos</h1>
      <div className='games-container'>
        {games.map((game) => (
          <div key={game.id} className='game-card'>
            <h2>{game.name} ({game.launchYear})</h2>
            <img
            src={game.linkCover}
            alt={`Capa do Jogo ${game.name}`}
            />
            <h3>{game.description}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}