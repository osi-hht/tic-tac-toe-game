let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function startGame() {
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("game-container").style.display = "block";
}

function makeMove(index) {
    if (!gameActive || gameBoard[index] !== '') return;
    
    gameBoard[index] = currentPlayer;
    const cell = document.querySelectorAll(".cell")[index];
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);
    
    if (checkWin()) {
        document.getElementById("status").textContent = `Player ${currentPlayer} Wins! 🎉`;
        gameActive = false;
        return;
    }

    if (!gameBoard.includes('')) {
        document.getElementById("status").textContent = "It's a Draw!";
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById("status").textContent = `Player ${currentPlayer}'s Turn`;
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
    });
}

function restartGame() {
    gameBoard.fill('');
    gameActive = true;
    document.querySelectorAll(".cell").forEach(cell => { 
        cell.textContent = ""; 
        cell.classList.remove("X", "O"); 
    });
    currentPlayer = 'X';
    document.getElementById("status").textContent = `Player ${currentPlayer}'s Turn`;
}

function exitGame() {
    document.getElementById("game-container").style.display = "none";
    document.getElementById("main-menu").style.display = "flex";
}
