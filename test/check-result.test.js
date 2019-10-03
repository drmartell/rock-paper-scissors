import checkResult from '../utils.js';

const test = QUnit.test;

// Equal Results
test(`checkResult should return draw when both draw rock`, function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerResult = 'rock';
    const computerResult = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerResult, computerResult);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});

test(`checkResult should return draw when both draw paper`, function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerResult = 'paper';
    const computerResult = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerResult, computerResult);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});

test(`checkResult should return draw when both draw scissors`, function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerResult = 'scissors';
    const computerResult = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerResult, computerResult);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});

// Player wins
test(`checkResult should return win when player is rock and computer is scissors`, function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerResult = 'rock';
    const computerResult = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerResult, computerResult);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test(`checkResult should return win when player is paper and computer is rock`, function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerResult = 'paper';
    const computerResult = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerResult, computerResult);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test(`checkResult should return win when player is scissors and computer is paper`, function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerResult = 'scissors';
    const computerResult = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerResult, computerResult);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

// Computer wins
test(`checkResult should return lose when computer is rock and player is scissors`, function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerResult = 'scissors';
    const computerResult = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerResult, computerResult);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});

test(`checkResult should return lose when computer is paper and player is rock`, function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerResult = 'rock';
    const computerResult = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerResult, computerResult);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});

test(`checkResult should return lose when computer is scissors and player is paper`, function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerResult = 'paper';
    const computerResult = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playerResult, computerResult);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});