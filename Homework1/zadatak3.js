
function isPangram(sentence, alphabet) {
const arrayOfIncludingCharacter = [];
const arrayOfNotIncludingCharacter = [];
const numberOfRepeat = [];

var arrayOfAlphabet = alphabet.split('');


        arrayOfAlphabet.forEach(function (value) {

            if(sentence.includes(value)){

                arrayOfIncludingCharacter.push(value);

                if(sentence.split(value).length - 1 > 1){
                    numberOfRepeat.push(sentence.split(value).length-1);
                }

            }else{
                arrayOfNotIncludingCharacter.push(value);
            }

        });

    if(arrayOfAlphabet.length === arrayOfIncludingCharacter.length){
        var isPerfectPangram = numberOfRepeat.length === 0 ? "Jeste" : "Nije";
        var message = "Jeste pangram" + ", " + isPerfectPangram + " " + "savršeni";
        console.log(message);
    }else{
        var message = "Nije pangram, ne sadrži " +  arrayOfNotIncludingCharacter;
        console.log(message);
    }
}

isPangram("Hello", "Helo");