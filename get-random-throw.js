const getRandomThrow = () => {
    const myRandom = Math.floor((Math.random() * 3 + 1));
    if (myRandom === 1)
        return 'rock';
    if (myRandom === 2)
        return 'paper';
    if (myRandom === 3)
        return 'scissors';
};

export default getRandomThrow;