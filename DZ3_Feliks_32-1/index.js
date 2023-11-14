const cardNumbers = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"];

let visaCount = 0;

for (let i = 0; i < cardNumbers.length; i++) {
    if (cardNumbers[i].charAt(0) === '4') {
        visaCount++;
    }
}

console.log(`Карт VISA ${visaCount} из ${cardNumbers.length}.`);

const innNumbers = ["20101199012345", "10505200500023", "20404199425147", "10202200212345", "21512199300080"];

let maleCount = 0;
let femaleCount = 0;

for (let i = 0; i < innNumbers.length; i++) {
    if (innNumbers[i].charAt(0) === '2') {
        maleCount++;
    } else if (innNumbers[i].charAt(0) === '1') {
        femaleCount++;
    }
}

const total = innNumbers.length;
const malePercentage = (maleCount / total) * 100;
const femalePercentage = (femaleCount / total) * 100;

console.log(`Мужчин ${malePercentage}%, Женщин ${femalePercentage}%.`);

function getShortName(lastName, firstName, middleName) {
    const shortFirstName = firstName.charAt(0);
    const shortMiddleName = middleName.charAt(0);

    return `${lastName} ${shortFirstName}.${shortMiddleName}.`;
}

console.log(getShortName("Киселев", "Евгений", "Дмитриевич"));

function getCardType(cardNumber) {
    if (cardNumber.charAt(0) === '4') {
        return 'VISA';
    } else if (cardNumber.charAt(0) === '5') {
        return 'MAESTRO';
    } else if (cardNumber.charAt(0) === '9') {
        return 'ELCARD';
    } else {
        return 'ERROR';
    }
}

console.log(getCardType("4125 1251 4127 1251")); // VISA
console.log(getCardType("5125 1251 4127 1251")); // MAESTRO
console.log(getCardType("9125 1251 4127 1251")); // ELCARD
console.log(getCardType("8125 1251 4127 1251")); // ERROR
