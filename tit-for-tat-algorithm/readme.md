# Tit-for-Tat Game Theory System 🎮

A comprehensive interactive system for studying game theory strategies, featuring the famous Tit-for-Tat algorithm and other classic strategies in the Prisoner's Dilemma.

##  Overview

This project implements a visual and interactive simulation of various game theory strategies, with a focus on the Tit-for-Tat algorithm that won Robert Axelrod's tournaments in the 1980s. The system allows users to play against AI strategies or run automated simulations between different algorithms.



## Main Image
<img src="/tit-for-tat-algorithm/1.jpeg" alt="Real Simulation" width="500">

## Features

### Game Modes
- **Human vs Tit-for-Tat**: Interactive gameplay against the TFT algorithm
- **AI vs AI Simulation**: Automated tournaments between different strategies
- **Real-time scoring** and detailed game history
- **Visual payoff matrix** for educational purposes

### Implemented Strategies
- **Tit-for-Tat (TFT)**: Cooperates first, then mimics opponent's last move
- **Always Cooperate**: Unconditionally cooperative strategy
- **Always Defect**: Unconditionally defective strategy
- **Random**: 50/50 probability for each action
- **Grudger**: Cooperates until first defection, then always defects
- **Generous Tit-for-Tat**: TFT with 10% forgiveness probability

##  Game Theory Background

### The Prisoner's Dilemma
The Prisoner's Dilemma is a fundamental game in game theory that demonstrates why rational individuals might not cooperate, even when it would be in their mutual interest to do so.

**Payoff Matrix:**
```
                Opponent
                C    D
Player    C   3,3  0,5
          D   5,0  1,1
```
Where:
- C = Cooperate, D = Defect
- Format: (Player points, Opponent points)

### Other Notable Game Theory Algorithms

#### 1. **Nash Equilibrium Strategies**
- **Mixed Strategy Nash**: Randomized strategies that make opponents indifferent
- **Pure Strategy Nash**: Deterministic best responses

#### 2. **Evolutionary Strategies**
- **Hawk-Dove**: Aggressive vs peaceful strategies in resource competition
- **Bourgeois**: Respects property/territory ownership
- **Assessor**: Evaluates opponent strength before deciding

#### 3. **Cooperative Strategies**
- **Pavlov (Win-Stay, Lose-Shift)**: Repeats successful moves, changes after poor outcomes
- **Generous Tit-for-Tat**: Forgives defection with some probability
- **Tit-for-Two-Tats**: Only retaliates after two consecutive defections

#### 4. **Punishing Strategies**
- **Grim Trigger**: Cooperates until first defection, then permanent retaliation
- **Suspicious Tit-for-Tat**: Starts with defection, then mimics
- **Two Tits for Tat**: Defects twice for each opponent defection

#### 5. **Reputation-Based Strategies**
- **Image Scoring**: Maintains reputation scores for all players
- **Stern Judging**: Punishes those who defect against cooperators
- **Standing**: Forgives defection against defectors

#### 6. **Learning Algorithms**
- **Q-Learning**: Reinforcement learning approach to strategy evolution
- **Genetic Algorithms**: Evolutionary computation for strategy optimization
- **Neural Networks**: Deep learning approaches to game strategy

#### 7. **Zero-Sum Game Algorithms**
- **Minimax**: Minimizes maximum possible loss
- **Alpha-Beta Pruning**: Optimized minimax for game trees
- **Monte Carlo Tree Search**: Probabilistic search algorithm

#### 8. **Auction Theory Algorithms**
- **Vickrey Auction**: Second-price sealed-bid auction
- **English Auction**: Open ascending-bid auction
- **Dutch Auction**: Open descending-bid auction

#### 9. **Mechanism Design**
- **Groves Mechanisms**: Truth-telling incentive mechanisms
- **VCG (Vickrey-Clarke-Groves)**: Generalized auction mechanism
- **Myerson Auction**: Revenue-optimal auction design

## Technical Implementation

### Technologies Used
- **React**: User interface framework
- **Tailwind CSS**: Styling and responsive design
- **Lucide React**: Icon library
- **JavaScript**: Core logic and algorithms

### Key Components
- **Strategy Engine**: Implements all game theory algorithms
- **Game State Manager**: Handles rounds, scoring, and history
- **Simulation Runner**: Automated tournament system
- **Interactive UI**: Real-time gameplay interface

## Algorithm Analysis

### Tit-for-Tat Properties
- **Nice**: Never defects first
- **Retaliatory**: Punishes defection immediately
- **Forgiving**: Returns to cooperation when opponent does
- **Clear**: Easy to understand strategy

### Performance Metrics
The system tracks various metrics for strategy evaluation:
- Total score accumulation
- Cooperation rate
- Retaliation effectiveness
- Forgiveness frequency

## Educational Applications

### Course Integration
Perfect for:
- **Game Theory courses**: Interactive strategy demonstration
- **Computer Science**: Algorithm implementation and analysis
- **Economics**: Market behavior and cooperation models
- **Psychology**: Social behavior and decision-making studies

### Learning Objectives
- Understand Nash equilibrium concepts
- Analyze strategy stability and evolution
- Explore cooperation vs competition dynamics
- Study iterated game scenarios

##  Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Basic understanding of game theory concepts

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tit-for-tat-system.git
   ```

2. Open the HTML file in your browser or integrate the React component into your application

### Usage
1. **Select Game Mode**: Choose between human vs AI or simulation mode
2. **Pick Strategies**: Select algorithms for comparison (simulation mode)
3. **Play/Run**: Execute games and analyze results
4. **Review History**: Study gameplay patterns and outcomes

## Future Enhancements

### Planned Features
- [ ] Tournament brackets with multiple strategies
- [ ] Custom strategy builder interface
- [ ] Statistical analysis tools
- [ ] Export results to CSV
- [ ] Multiplayer network support
- [ ] Machine learning strategy evolution

### Advanced Algorithms to Implement
- [ ] Contrite Tit-for-Tat
- [ ] Adaptive strategies with memory
- [ ] Coalition formation algorithms
- [ ] Mechanism design implementations
- [ ] Behavioral game theory models

##  Contributing

Contributions are welcome! Areas for improvement:
- Additional game theory strategies
- Performance optimizations
- UI/UX enhancements
- Educational content expansion
- Testing and documentation

### How to Contribute
1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Add tests and documentation
5. Submit a pull request

## References

### Academic Sources
- Axelrod, R. (1984). "The Evolution of Cooperation"
- Nash, J. (1950). "Equilibrium Points in N-Person Games"
- Maynard Smith, J. (1982). "Evolution and the Theory of Games"
- Fudenberg, D. & Tirole, J. (1991). "Game Theory"

### Online Resources
- [Stanford Game Theory Course](https://web.stanford.edu/~jacksonm/mechthry.pdf)
- [MIT OpenCourseWare - Game Theory](https://ocw.mit.edu/courses/economics/)
- [Game Theory Society](https://www.gametheorysociety.org/)

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Acknowledgments

- Robert Axelrod for pioneering Tit-for-Tat research
- John Nash for fundamental game theory contributions
- The game theory academic community
- Open-source contributors and educators

##  Contact

For questions, suggestions, or collaboration:
- **GitHub Issues**: Use the repository issue tracker
- **Educational Use**: Feel free to adapt for classroom settings
- **Research Collaboration**: Open to academic partnerships

---

*Built for educational purposes and game theory research. Happy strategizing! *


## Other Images
<img src="/tit-for-tat-algorithm/3.jpeg" alt="Human vs Tit-for-tat" width="500">



<img src="/tit-for-tat-algorithm/2.jpeg" alt="AI vs AI" width="500">
