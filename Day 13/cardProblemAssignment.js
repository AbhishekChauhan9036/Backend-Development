const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

// =========================================== 1 ==================================================== //
/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
*/

function findCard(value, suit) {
    for (let index = 0; index < cardData.length; index++) {
    const card = cardData[index];
    if (card.suit === suit && card.value === value) {
    return true;
    }
    }
    return false;
}
    
console.log(findCard(10, "club"))



// =============================================== 2 ================================================ //
/**
    2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
*/
function getSuitsList() {
    const suitObject = {};
    for (let index = 0; index < cardData.length; index++) {
    const card = cardData[index];
    const {suit} = card;
    // this will make sure that duplicates are removed
    suitObject[suit] = 1;
    }
    return Object.keys(suitObject);
}

console.log(getSuitsList());



// ================================================ 3 =============================================== //

/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/
function getSuitsNumber() {
    const suitObject = {};
    for (let index = 0; index < cardData.length; index++) {
    const card = cardData[index];
    const {suit} = card;
    if (suitObject[suit]) {
    suitObject[suit] = suitObject[suit] + 1;
    } else {
    suitObject[suit] = 1;
    }
    }
    return suitObject;
}

console.log(getSuitsNumber());

// ================================================= 4 ============================================== //


/** 
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 
 *   
*/
function getSuits() {
    const suitObject = {};
    for (let index = 0; index < cardData.length; index++) {
    const card = cardData[index];
    const {suit, value} = card;
    if (suitObject[suit]) {
        const valueList = suitObject[suit];
        suitObject[suit] = [...valueList, value];
        } else {
        suitObject[suit] = [value];
        }
        }
        return suitObject;
}
console.log(getSuits());
