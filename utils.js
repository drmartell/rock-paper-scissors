// TDD a checkResult function that:
// Has two parameters: player and computer
// Returns one of the following values:
// draw - the throws are identical
// win - the player's throw beats the computer throw
// lose - the computer's throw beats the player's throw
const checkResult = (player, computer) => {
    if (player === computer) 
        return 'draw';

    else if ((player === 'rock' && computer === 'scissors') || 
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper'))
        return 'win';

    else
        return 'lose';
};

export default checkResult;