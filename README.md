# MindFlip - Classic Game Web Application

A classic memory card game featuring country flags from around the world. Test your memory by matching pairs of flags in this engaging and educational game!

## Features

- **12 Flag Pairs** - Discover and match flags from different countries.
- **Interactive Gameplay** - Click to flip cards and find matching pairs.
- **Flag API Integration** - Real country flags from [FlagsAPI](https://flagsapi.com).
- **Responsive Design** - Clean and intuitive user interface.
- **MVC Architecture** - Well-organized code structure with separation of concerns.
- **Configurable Difficulty** - JSON-based configuration for different pair counts.

## Demo

🔗 [Live Demo on Netlify](https://mindflip.netlify.app)

## Tech Stack

- **HTML5** - Structure & Content
- **CSS3** - Styling & Layout
- **JavaScript** - Game Logic & Interactivity
- **jQuery** - DOM Manipulation & Event Handling
- **FlagsAPI** - Country Flag Images (https://flagsapi.com)
- **Netlify** - Hosting & Deployment

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/Balsha98/Repository-MindFlip.git
```

Navigate to the project directory:

```bash
cd Repository-MindFlip/mind-flip
```

Open the project in your browser:

```bash
# Simply open index.html in your preferred browser
# Or use a local server like Live Server in VS Code
```

## Usage

1. **Start the Game**: Open the application in your browser.
2. **Flip Cards**: Click on any card to reveal the flag.
3. **Find Matches**: Click another card to find its matching pair.
4. **Complete the Board**: Match all 12 pairs to win the game.
5. **Play Again**: Reset the game to shuffle and play again.

## Project Structure

```
MemoryGame/
│
├── memory-game/        # Main application directory.
│   │
│   ├── assets/         # Assets directory.
│   │   │
│   │   ├── css/
│   │   │   └── style.css       # Styling.
│   │   │
│   │   ├── js/
│   │   │   │
│   │   │   ├── helpers/        # Data management helper classes.
│   │   │   │
│   │   │   ├── libraries/      # Third-party libraries (jQuery).
│   │   │   │
│   │   │   ├── views/          # UI component JS modules.
│   │   │   │
│   │   │   ├── controller.js   # Main game controller (connects model and view).
│   │   │   └── model.js        # Game model (game data management).
│   │   │
│   │   ├── json/               # Configuration for card pair counts.
│   │   │
│   │   └── media/              # Site visuals.
│   │
│   └── index.html      # Main game page.
│
└── README.md           # Project documentation.
```

## How It Works

The game follows an MVC (Model-View-Controller) architecture:
- **Model**: Manages game state and data.
- **View**: Handles UI rendering and updates.
- **Controller**: Coordinates between model and view.
- **FlagsAPI**: Provides real country flag images dynamically.
- **JSON Configuration**: Defines the number of pairs for different difficulty levels.

## Future Features

This project has exciting plans for expansion:

### Multiplayer Mode
- **Real-Time Gameplay**: Two players can connect and compete against each other.
- **Node.js Backend**: Server-side logic for managing game sessions.
- **Socket.IO Integration**: Real-time communication between players.
- **Turn-Based System**: Players take turns flipping cards.

### In-Game Chat
- **Live Messaging**: Communicate with your opponent during gameplay.
- **Socket.IO Chat**: Real-time chat functionality.
- **Chat History**: View message history during the game session.

### Game History & Statistics
- **Player Profiles**: Track individual player performance.
- **Match History**: View results of all games played.
- **Win/Loss Records**: Comprehensive statistics tracking.
- **Leaderboards**: Compare your performance with other players.

### Additional Enhancements
- **Difficulty Levels**: Multiple board sizes and pair counts.
- **Timer Mode**: Challenge mode with time limits.
- **Sound Effects**: Audio feedback for matches and wins
- **Animations**: Smooth card flip and match animations

## Roadmap

- [x] Single-Player Memory Game
- [x] Flag API Integration
- [x] MVC Architecture Implementation
- [ ] Multiplayer Functionality (Node.js + Socket.IO)
- [ ] In-Game Chat System
- [ ] Game History & Statistics
- [ ] User Authentication
- [ ] Leaderboard System
- [ ] Multiple Difficulty Levels
- [ ] Sound Effects & Animations

## Let's Connect

If you enjoyed this project or have any questions, feel free to reach out!

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:balsa.bazovic@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/balsha-bazovich)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Balsha98)

⭐ If you found this project helpful, please consider giving it a star!

---

Made with HTML5, CSS3, JavaScript (jQuery), & ❤️!
