import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Users, Trophy, Brain } from 'lucide-react';

const TitForTatSystem = () => {
  const [gameHistory, setGameHistory] = useState([]);
  const [currentRound, setCurrentRound] = useState(1);
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [gameMode, setGameMode] = useState('human-vs-tft'); // 'human-vs-tft' or 'simulation'
  const [playerChoice, setPlayerChoice] = useState(null);
  const [roundResult, setRoundResult] = useState(null);
  const [isGameActive, setIsGameActive] = useState(false);
  const [simulationSpeed, setSimulationSpeed] = useState(1000);
  
  // Available strategies for simulation
  const strategies = {
    'tit-for-tat': 'Tit-for-Tat (Cooperate first, then imitate)',
    'always-cooperate': 'Always Cooperate',
    'always-defect': 'Always Defect',
    'random': 'Random (50/50)',
    'grudger': 'Grudger (Cooperate until first betrayal)',
    'generous-tft': 'Generous Tit-for-Tat (10% forgiveness)'
  };

  const [strategy1, setStrategy1] = useState('tit-for-tat');
  const [strategy2, setStrategy2] = useState('always-defect');

  // Prisoner's Dilemma payoff matrix
  const payoffMatrix = {
    'C-C': [3, 3], // Both cooperate
    'C-D': [0, 5], // Player 1 cooperates, Player 2 defects
    'D-C': [5, 0], // Player 1 defects, Player 2 cooperates
    'D-D': [1, 1]  // Both defect
  };

  // Strategy implementations
  const getStrategyMove = (strategy, history, playerIndex) => {
    const opponentMoves = history.map(round => 
      playerIndex === 0 ? round.player2 : round.player1
    );

    switch (strategy) {
      case 'tit-for-tat':
        if (opponentMoves.length === 0) return 'C'; // Cooperate on first round
        return opponentMoves[opponentMoves.length - 1]; // Imitate last opponent move
      
      case 'always-cooperate':
        return 'C';
      
      case 'always-defect':
        return 'D';
      
      case 'random':
        return Math.random() < 0.5 ? 'C' : 'D';
      
      case 'grudger':
        if (opponentMoves.includes('D')) return 'D'; // If opponent defected before, always defect
        return 'C';
      
      case 'generous-tft':
        if (opponentMoves.length === 0) return 'C';
        const lastMove = opponentMoves[opponentMoves.length - 1];
        if (lastMove === 'D' && Math.random() < 0.1) return 'C'; // 10% chance to forgive
        return lastMove;
      
      default:
        return 'C';
    }
  };

  // Play a round against Tit-for-Tat
  const playRound = (choice) => {
    if (!isGameActive) return;

    const aiMove = getStrategyMove('tit-for-tat', gameHistory, 1);
    const key = `${choice}-${aiMove}`;
    const [playerPoints, aiPoints] = payoffMatrix[key];

    const newRound = {
      round: currentRound,
      player1: choice,
      player2: aiMove,
      player1Score: playerPoints,
      player2Score: aiPoints
    };

    setGameHistory(prev => [...prev, newRound]);
    setPlayerScore(prev => prev + playerPoints);
    setAiScore(prev => prev + aiPoints);
    setCurrentRound(prev => prev + 1);
    setRoundResult(newRound);
    setPlayerChoice(choice);
  };

  // Simulation between two strategies
  const runSimulation = () => {
    const rounds = 50;
    const history = [];
    let score1 = 0, score2 = 0;

    for (let i = 0; i < rounds; i++) {
      const move1 = getStrategyMove(strategy1, history, 0);
      const move2 = getStrategyMove(strategy2, history, 1);
      
      const key = `${move1}-${move2}`;
      const [points1, points2] = payoffMatrix[key];
      
      const round = {
        round: i + 1,
        player1: move1,
        player2: move2,
        player1Score: points1,
        player2Score: points2
      };
      
      history.push(round);
      score1 += points1;
      score2 += points2;
    }

    setGameHistory(history);
    setPlayerScore(score1);
    setAiScore(score2);
    setCurrentRound(rounds + 1);
  };

  // Reset game
  const resetGame = () => {
    setGameHistory([]);
    setCurrentRound(1);
    setPlayerScore(0);
    setAiScore(0);
    setPlayerChoice(null);
    setRoundResult(null);
    setIsGameActive(false);
  };

  const getMoveColor = (move) => move === 'C' ? 'text-blue-600' : 'text-red-600';
  const getMoveText = (move) => move === 'C' ? 'Cooperate' : 'Defect';

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Tit-for-Tat System
          </h1>
          <p className="text-gray-600">Game Theory Simulator - Prisoner's Dilemma</p>
        </div>

        {/* Mode selector */}
        <div className="mb-8">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => {
                setGameMode('human-vs-tft');
                resetGame();
              }}
              className={`px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 ${
                gameMode === 'human-vs-tft' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Human vs Tit-for-Tat</span>
            </button>
            <button
              onClick={() => {
                setGameMode('simulation');
                resetGame();
              }}
              className={`px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 ${
                gameMode === 'simulation' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Brain className="w-5 h-5" />
              <span>AI vs AI Simulation</span>
            </button>
          </div>
        </div>

        {/* Human vs Tit-for-Tat mode */}
        {gameMode === 'human-vs-tft' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Game controls */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Controls
              </h3>
              
              <div className="space-y-4">
                <button
                  onClick={() => setIsGameActive(true)}
                  disabled={isGameActive}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold disabled:bg-gray-400 hover:bg-green-700"
                >
                  Start Game
                </button>

                {isGameActive && (
                  <div className="space-y-3">
                    <p className="text-center font-semibold">Round {currentRound}</p>
                    <p className="text-center text-sm text-gray-600">Choose your action:</p>
                    
                    <div className="space-y-2">
                      <button
                        onClick={() => playRound('C')}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                      >
                        Cooperate
                      </button>
                      <button
                        onClick={() => playRound('D')}
                        className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                      >
                        Defect
                      </button>
                    </div>
                  </div>
                )}

                <button
                  onClick={resetGame}
                  className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 flex items-center justify-center"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </button>
              </div>
            </div>

            {/* Score board */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2" />
                Score
              </h3>
              
              <div className="space-y-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">You</p>
                  <p className="text-2xl font-bold text-blue-600">{playerScore}</p>
                </div>
                
                <div className="bg-purple-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Tit-for-Tat</p>
                  <p className="text-2xl font-bold text-purple-600">{aiScore}</p>
                </div>

                {roundResult && (
                  <div className="bg-yellow-50 p-4 rounded-lg border">
                    <p className="text-sm font-semibold">Last Round:</p>
                    <p className="text-sm">
                      You: <span className={getMoveColor(playerChoice)}>{getMoveText(playerChoice)}</span>
                    </p>
                    <p className="text-sm">
                      AI: <span className={getMoveColor(roundResult.player2)}>{getMoveText(roundResult.player2)}</span>
                    </p>
                    <p className="text-sm">
                      Points: You +{roundResult.player1Score}, AI +{roundResult.player2Score}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Payoff matrix */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Payoff Matrix</h3>
              <div className="text-sm">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-2"></th>
                      <th className="border border-gray-300 p-2 text-blue-600">Cooperate</th>
                      <th className="border border-gray-300 p-2 text-red-600">Defect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="border border-gray-300 p-2 text-blue-600">Cooperate</th>
                      <td className="border border-gray-300 p-2 text-center">3, 3</td>
                      <td className="border border-gray-300 p-2 text-center">0, 5</td>
                    </tr>
                    <tr>
                      <th className="border border-gray-300 p-2 text-red-600">Defect</th>
                      <td className="border border-gray-300 p-2 text-center">5, 0</td>
                      <td className="border border-gray-300 p-2 text-center">1, 1</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 text-xs text-gray-500">
                  (Your points, AI points)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Simulation mode */}
        {gameMode === 'simulation' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Strategy 1</h3>
                <select
                  value={strategy1}
                  onChange={(e) => setStrategy1(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  {Object.entries(strategies).map(([key, name]) => (
                    <option key={key} value={key}>{name}</option>
                  ))}
                </select>
                <div className="mt-4 bg-blue-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Score</p>
                  <p className="text-2xl font-bold text-blue-600">{playerScore}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Strategy 2</h3>
                <select
                  value={strategy2}
                  onChange={(e) => setStrategy2(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  {Object.entries(strategies).map(([key, name]) => (
                    <option key={key} value={key}>{name}</option>
                  ))}
                </select>
                <div className="mt-4 bg-purple-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Score</p>
                  <p className="text-2xl font-bold text-purple-600">{aiScore}</p>
                </div>
              </div>
            </div>

            <div className="text-center space-x-4">
              <button
                onClick={runSimulation}
                className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700"
              >
                Run Simulation (50 rounds)
              </button>
              <button
                onClick={resetGame}
                className="bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700"
              >
                <RotateCcw className="w-4 h-4 mr-2 inline" />
                Reset
              </button>
            </div>
          </div>
        )}

        {/* Game history */}
        {gameHistory.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Game History</h3>
            <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-5 gap-4 text-sm font-semibold mb-2">
                <span>Round</span>
                <span>Player 1</span>
                <span>Player 2</span>
                <span>Points P1</span>
                <span>Points P2</span>
              </div>
              {gameHistory.slice(-20).map((round) => (
                <div key={round.round} className="grid grid-cols-5 gap-4 text-sm py-2 border-b border-gray-200">
                  <span>{round.round}</span>
                  <span className={getMoveColor(round.player1)}>
                    {getMoveText(round.player1)}
                  </span>
                  <span className={getMoveColor(round.player2)}>
                    {getMoveText(round.player2)}
                  </span>
                  <span className="font-semibold">{round.player1Score}</span>
                  <span className="font-semibold">{round.player2Score}</span>
                </div>
              ))}
              {gameHistory.length > 20 && (
                <p className="text-xs text-gray-500 mt-2">
                  Showing last 20 rounds of {gameHistory.length} total
                </p>
              )}
            </div>
          </div>
        )}

        {/* Information about Tit-for-Tat */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">About the Tit-for-Tat Algorithm</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              <strong>Tit-for-Tat</strong> is a simple but powerful strategy in the Prisoner's Dilemma:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>First round:</strong> Always cooperates</li>
              <li><strong>Following rounds:</strong> Exactly imitates what the opponent did in the previous round</li>
              <li><strong>Characteristics:</strong> Nice (cooperates first), retaliatory (punishes betrayal), forgiving (returns to cooperation if opponent cooperates)</li>
            </ul>
            <p>
              This strategy won Robert Axelrod's tournaments in the 1980s, demonstrating the effectiveness of reciprocity in cooperation.
            </p>
          </div>
        </div>

        {/* Strategy comparison */}
        <div className="mt-8 bg-green-50 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Strategy Performance Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Cooperative Strategies</h4>
              <ul className="space-y-1 text-gray-700">
                <li><strong>Tit-for-Tat:</strong> Balanced reciprocity</li>
                <li><strong>Always Cooperate:</strong> Exploitable but promotes cooperation</li>
                <li><strong>Generous TFT:</strong> Reduces noise effects</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Competitive Strategies</h4>
              <ul className="space-y-1 text-gray-700">
                <li><strong>Always Defect:</strong> Exploits cooperative strategies</li>
                <li><strong>Grudger:</strong> Permanent punishment</li>
                <li><strong>Random:</strong> Unpredictable baseline</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitForTatSystem;