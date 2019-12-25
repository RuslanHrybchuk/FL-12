let check = confirm('Do you want to play a game?');

if (check === false){
    alert('You did not become a billionaire, but can.');
} else if (check === true){

let two = 2;
let three = 3;
let four = 4;
let eight = 8;
let nine = 9;
let twentyFive = 25;
let fifty = 50;
let hundred = 100;



while (check){

    let prize = 0;
    let winStreak = 0;
    let winStreakCoef = 1;
    let fail = false;
    

    while (fail === false) {

        let attempt = 0;

        let num = Math.floor(Math.random() * (nine + winStreak * four) + 0);

        let guess;

        for( ; attempt < three; attempt++){

            let prizeX;

            switch(attempt){
                case 0: prizeX = hundred * winStreakCoef; break;

                case 1:
                    prizeX = fifty * winStreakCoef; break;
                case two: 
                    prizeX = twentyFive * winStreakCoef; break; 

                default:
                    prizeX = fifty * winStreakCoef; break; 
            }

            guess = prompt('Pick a number from 0 to ' + (eight + winStreak * four) + '\n' + 'Attempts left : ' + 
            (three-attempt) + '\n' + 'Total prize = ' + prize + '$' + '\n' + 'Possible prize on current attempt: ' + 
            prizeX + '$');

            guess = parseInt(guess);

            if (num === guess){

                winStreak++;

                prize += prizeX;

                alert('Congratulation, you won!   Your prize is: ' + prize + ' $');

                let again = confirm('Do you want to continue?');

                while (again === false){
                    alert('Thank you for your participation. Your prize is:  ' + prize + ' $');
                    again = confirm('Do you want to continue?');
                } 
                break;
            } 
        }

        if (num !== guess && attempt >= two){
            fail = true;
        } else {
        winStreakCoef *= two;
        }
    } 

    alert('Thank you for your participation. Your prize is: ' + prize + ' $');

    let again = confirm('Do you want to try again?');

    while (again === false){
        alert('Thank you for your participation. Your prize is:  ' + prize + ' $');
        again = confirm('Do you want to try again?');
    } 
}

} else {
    alert('Unknown error');
}