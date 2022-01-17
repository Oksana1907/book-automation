document.getElementById('bet-form').style.display = 'block';
document.getElementById('bet-point').style.display = 'none';
document.getElementById('bet-result').style.display = 'none';

let betValue = document.getElementById('bet');

let valueWin = [7,11];

let dice1result;
let dice2result;
let sumDice1And2;
let initialBalance = +document.getElementById('initial_balance').textContent;

function rollTheDiceHandler () {
    dice1result = random(1, 7);
    dice2result = random(1, 7);
    sumDice1And2 = dice1result + dice2result;

    // let valueLoss = [2,8,12];
    
    document.getElementById('dice1result').innerHTML = dice1result;
    document.getElementById('dice2result').innerHTML = dice2result;

    document.getElementById('bet-result').style.display = 'block';
    document.getElementById('bet-form').style.display = 'none';

    let updateBalance = +document.getElementById('update_balance').textContent;
    updateBalance = initialBalance;

    if (sumDice1And2 == valueWin[0] || sumDice1And2 == valueWin[1]) {
        document.getElementById('resultText').innerHTML = (`Ваш выиграш составил: ${betValue.value} $`);
    } else {
        document.getElementById('resultText').innerHTML = ( `Ваша ставка в ${betValue.value}$ не сыграла`);
    };
    document.getElementById('update_balance').innerHTML = updateBalance;

};

function random (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
};

function goBackHandler() {
    document.getElementById('bet-result').style.display = 'none';
    document.getElementById('bet-form').style.display = 'block';

    if (sumDice1And2 == valueWin[0] || sumDice1And2 == valueWin[1]) {
        initialBalance = initialBalance + parseInt(betValue.value);
    } else {
        initialBalance = initialBalance - parseInt(betValue.value);
    };
    
    betValue.value = '';
    document.getElementById('initial_balance').innerHTML = initialBalance;
};
