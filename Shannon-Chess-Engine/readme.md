# Shannon Chess Engine

A classical chess engine implementation based on Claude Shannon's groundbreaking 1950 paper "Programming a Computer for Playing Chess". This project recreates the fundamental algorithms and evaluation methods that laid the foundation for modern chess engines.

## Overview

This chess engine implements Shannon's Type A strategy, combining material evaluation with positional analysis using the minimax algorithm with alpha-beta pruning. It provides an interactive web-based interface where you can play against the AI and observe the evaluation process in real-time.

## Features

### Core Algorithm
- **Shannon's Position Evaluation**: Classic material values (P=1, N/B=3, R=5, Q=9) with positional bonuses
- **Minimax with Alpha-Beta Pruning**: Efficient tree search algorithm for move selection
- **Configurable Search Depth**: Adjustable from 2-4 ply for performance tuning
- **Real-time Position Analysis**: Live evaluation scoring displayed during gameplay

### Game Features
- **Full Chess Rules**: Complete move validation for all pieces
- **Interactive Interface**: Click-to-move with highlighted legal moves
- **Move History**: Complete game notation with capture detection
- **Visual Board**: Unicode chess pieces on a traditional board layout
- **AI Opponent**: Computer plays as Black with configurable difficulty

### Technical Implementation
- **Pure JavaScript**: No external dependencies, runs entirely in the browser
- **Responsive Design**: Clean, modern interface that works on desktop and mobile
- **Educational Value**: Clear code structure demonstrating classical AI techniques

## How to Play

1. **Open the HTML file** in any modern web browser
2. **Make your move** by clicking a white piece, then clicking the destination square
3. **AI responds** automatically with black pieces
4. **View evaluation** in real-time to understand position assessment
5. **Adjust difficulty** using the depth toggle (higher = stronger but slower)

## Algorithm Details

### Position Evaluation Function

The engine evaluates positions using Shannon's original criteria:

```
Score = Material Balance + Positional Factors + Center Control
```

- **Material Count**: Sum of piece values on the board
- **Positional Tables**: Piece-square tables for optimal positioning
- **Center Bonus**: Rewards pieces controlling central squares
- **Development**: Encourages piece activity and mobility

### Search Algorithm

Uses the classic minimax algorithm with alpha-beta pruning:

1. **Generate all legal moves** for the current position
2. **Recursively evaluate** each move to the specified depth
3. **Apply minimax principle**: Maximize for white, minimize for black
4. **Prune branches** using alpha-beta cutoffs for efficiency
5. **Return best move** with highest/lowest evaluation

## Technical Specifications

- **Search Depth**: 2-4 ply (configurable)
- **Evaluation Speed**: ~1000-10000 positions/second (depending on depth)
- **Memory Usage**: Minimal - uses only current position state
- **Browser Compatibility**: Works in all modern browsers (Chrome, Firefox, Safari, Edge)

## Configuration Options

- **Search Depth**: Toggle between 2, 3, and 4 ply search
- **Evaluation Display**: Real-time position scoring
- **Move Highlighting**: Visual feedback for legal moves
- **Game Reset**: Start new games at any time

## Educational Value

This implementation is perfect for:

- **Computer Science Students**: Understanding classic AI algorithms
- **Chess Enthusiasts**: Learning position evaluation principles
- **Algorithm Study**: Seeing minimax and alpha-beta pruning in action
- **Historical Interest**: Experiencing the origins of computer chess

## Shannon's Original Principles

The engine faithfully implements Shannon's 1950 concepts:

1. **Type A Strategy**: Examine all moves to a fixed depth
2. **Static Evaluation**: Position scoring without further search
3. **Minimax Principle**: Assume optimal play from both sides
4. **Pruning Techniques**: Eliminate inferior branches early

## Future Enhancements

Potential improvements that maintain Shannon's classical approach:

- **Opening Book**: Pre-computed opening moves
- **Endgame Tables**: Perfect play in simple endings
- **Mobility Evaluation**: Count of legal moves available
- **Pawn Structure**: Advanced pawn formation analysis
- **King Safety**: Evaluation of king exposure and castling

## Performance

The engine provides a challenging opponent at higher depths while maintaining Shannon's elegant simplicity. It's designed more for educational value and historical accuracy than maximum playing strength.

## Historical Context

Claude Shannon's 1950 paper was revolutionary, introducing concepts that remain fundamental to chess engines today:

- First formal description of computer chess algorithms
- Introduction of the minimax principle to game theory
- Distinction between Type A (brute force) and Type B (selective) strategies
- Mathematical framework for position evaluation

## Usage

Simply open the HTML file in a web browser - no installation required!

```bash
# Clone the repository
git clone https://github.com/yourusername/shannon-chess-engine.git

# Open in browser
open shannon-chess-engine.html
```

## License

This project is open source and available under the MIT License.

## Acknowledgments

- **Claude Shannon** - For the foundational algorithms and concepts
- **Chess Programming Community** - For preservation of classical techniques
- **Open Source Contributors** - For making educational resources freely available

---

*Experience the birth of computer chess with Shannon's original algorithms!*
4. **Pruning Techniques**: Eliminate inferior branches early

##  Future Enhancements

Potential improvements that maintain Shannon's classical approach:

- **Opening Book**: Pre-computed opening moves
- **Endgame Tables**: Perfect play in simple endings
- **Mobility Evaluation**: Count of legal moves available
- **Pawn Structure**: Advanced pawn formation analysis
- **King Safety**: Evaluation of king exposure and castling

##  Performance

The engine provides a challenging opponent at higher depths while maintaining Shannon's elegant simplicity. It's designed more for educational value and historical accuracy than maximum playing strength.

##  Historical Context

Claude Shannon's 1950 paper was revolutionary, introducing concepts that remain fundamental to chess engines today:

- First formal description of computer chess algorithms
- Introduction of the minimax principle to game theory
- Distinction between Type A (brute force) and Type B (selective) strategies
- Mathematical framework for position evaluation

## Usage

Simply open the HTML file in a web browser - no installation required!

```bash
# Clone the repository
git clone https://github.com/yourusername/shannon-chess-engine.git

# Open in browser
open shannon-chess-engine.html
```

##  License

This project is open source and available under the MIT License.

##  Acknowledgments

- **Claude Shannon** - For the foundational algorithms and concepts
- **Chess Programming Community** - For preservation of classical techniques
- **Open Source Contributors** - For making educational resources freely available

---

*Experience the birth of computer chess with Shannon's original algorithms!* ♟️