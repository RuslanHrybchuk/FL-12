let email = prompt('Введіть e-mail');
let noMagicNumbersRuleIsTotalBullshit = 5;
let alsoMyCodeLooksLikeCrapNowThanksToThisAwesomeBraceStyle = 6;

if (email === null){ 
    alert('Canceled');
} else if (email.length < noMagicNumbersRuleIsTotalBullshit){
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email === 'user@gmail.com') {

    let pass = prompt('Введіть пароль');

    if (pass === null){
        alert('Canceled');
    } else if(pass === 'UserPass'){
        let answer = confirm('Do you want to change your password?');

        if (answer === false){
            alert('You have failed the change.'); 
        } else if (answer === true){

            let pass = prompt('Введіть старий пароль');

            if (pass === null){
                alert('Canceled');
            } else if(pass === 'UserPass'){

                let newPass = prompt('Введіть новий пароль');

                if (newPass === null){
                    alert('Canceled');
                } else if (newPass.length < alsoMyCodeLooksLikeCrapNowThanksToThisAwesomeBraceStyle){
                    alert('It’s too short password. Sorry.');
                } else {
                    let newerPass = prompt('Введіть новий пароль ще раз');

                    if (newerPass !== newPass){
                        alert('You wrote the wrong password.');
                    } else if (newerPass === newPass){
                        alert('You have successfully changed your password.');
                    } else { 
                        alert('unknown error');
                    }
                }
            } else {
                alert('Wrong password');
            }
        }
    } else {
        alert('Wrong password');
    }
} else if (email === 'admin@gmail.com') {

    let pass = prompt('Введіть пароль');

    if (pass === null){
        alert('Canceled');
    } else if(pass === 'AdminPass'){

        let answer = confirm('Do you want to change your password?');

        if (answer === false){
            alert('You have failed the change.'); 
        } else if (answer === true){

            let pass = prompt('Введіть старий пароль');

            if (pass === null){
                alert('Canceled');
            } else if(pass === 'AdminPass'){

                let newPass = prompt('Введіть новий пароль');

                if (newPass === null){
                    alert('Canceled');
                } else if (newPass.length < alsoMyCodeLooksLikeCrapNowThanksToThisAwesomeBraceStyle){
                    alert('It’s too short password. Sorry.');
                } else {
                    let newerPass = prompt('Введіть новий пароль ще раз');

                    if (newerPass !== newPass){
                        alert('You wrote the wrong password.');
                    } else if (newerPass === newPass){
                        alert('You have successfully changed your password.');
                    } else {
                        alert('unknown error');
                    }
                }
            } else {
                alert('Wrong password');
            }
        }

        
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}