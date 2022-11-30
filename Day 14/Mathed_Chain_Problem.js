
/*Video Link:- https://drive.google.com/file/d/1WW_jWmavkV3YXavXpLOJ_pGZKPffY9sE/view?usp=sharing  */



const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        location: "rampur",
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        location: "gurgaon",
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        location: "gurgaon",
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        location: "alwar",
    },
    {
        firstName: "Jay",
        location: "gurgaon",
    },
];

// return the full names of the facebook users who belong to guragon
// HINT: use higher order functions and chain them
function filterNonGuragonPeople(person) {
    if (person.location === "gurgaon") {
        return true;
    } else {
        return false;
    }
}

const gurgaonPeople = facebookProfiles.filter(filterNonGuragonPeople);

function getFirstName(person) {
    return person.firstName;
}

const gurgaonPeopleName = gurgaonPeople.map(getFirstName);
console.log(gurgaonPeopleName);

// ======================================================================== //

function filterOddNumbers(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const evenNumbers = [1, 2, 3, 4, 5];
evenNumbers.push(6);
console.log(evenNumbers.filter(filterOddNumbers));



/**
 * Q1. without actually running this code, you need to answer whether this code will run or not along with the reason
 
Q2. now run the above code and see the result/error. 
Analyze the difference bw your answer before and after running the code 

Q2. correct the code so that method chain starts working
 * 
 */

const gurgaonPeopleNameAfterChain = facebookProfiles
    .filter(filterNonGuragonPeople)
    .map(getFirstName);
console.log(gurgaonPeopleNameAfterChain);