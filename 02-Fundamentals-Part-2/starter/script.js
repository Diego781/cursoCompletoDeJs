/* 'use strict';

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true
if (hasDriversLicence) console.log('I can drive :D')

const interface = 'Audio';
const private = 534;


const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

const friends = ['Michael ', 'Steven', 'Peter'];
console.log(friends)

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0])
console.log(friends[2])
console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends)

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]
console.log(jonas)
console.log(jonas.length)

const calcAge = function (birthYear) {
    return 2037 - birthYear
}
const years = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3)
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages)


const friends = ['Michael', 'Steven', 'Peter']

// add elements
const newLength = friends.push('Jay')
console.log(friends)
console.log(newLength)

friends.unshift('John')
console.log(friends)

//remove elements
friends.pop()
const popped = friends.pop()
console.log(popped)
console.log(friends)


friends.shift()
console.log(friends)

console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob'))

friends.push(Number(23))
console.log(friends.includes('Steven'))
console.log(friends.includes(23))

if(friends.includes('Peter')){
    console.log('You have a friend called Peter')
}




function calcTip(bill) {
    if (bill > 50 && bill <= 300) {
        return bill / 100 * 15
    } else {
        return bill / 100 * 20
    }
}
const bill = (calcTip(100))
console.log(bill)

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)

const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])]
console.log(total)



const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

const calcTip = bill => bill => 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

const bil = [125, 555, 44]
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]


/*



const value = console.log(calcTip(100))


const jonas = {
    firstName: 'Diego',
    lastName: 'Lima',
    age: 2037 - 2002,
    job: 'developer',
    friends: ['Michael', 'Peter', 'Steven']

}
console.log(jonas)

console.log(jonas.lastName)
console.log(jonas['lastName'])

const nameKey = 'Name';
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])



const interestedIn = prompt('What do you want to know about jonas? Choose between firstName,lastName,age,job and friends')

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
} else {
    console.log('Wrong request! What do you want to know about jonas? Choose between firstName,lastName,age,job and friends')
}


jonas.location = 'Portugal'
jonas['twitter'] = '@jonasschmedtamn'
console.log(jonas)

console.log(`${jonas.firstName} has ${jonas.friends.length} friends,and his best friend is called ${jonas.friends[0]}`)
//console.log(jonas. 'last' + nameKey)



const jonas = {
    firstName: 'Diego',
    lastName: 'Lima',
    birthYear: 1991,
    job: 'developer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // calcAge: function (birthYear) {
    // console.log(this)
    //   return 2037 - this.birthYear
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job},and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license. `
    }
}
console.log(jonas.calcAge())

console.log(jonas.age)
console.log(jonas.age)
console.log(jonas.age)
console.log(jonas.age)
// console.log(jonas['calcAge'](1991))

console.log(jonas.getSummary())



const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }

}

const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }


}
John.calcBMI()
Mark.calcBMI()
console.log(Mark.bmi, John.bmi)

if (John.bmi > Mark.bmi) {
    console.log(`${John.fullName}'s BMI (${John.bmi} is higher than ${Mark.fullName}'s BMI (${Mark.bmi}) )`)
} else {
    console.log(`${Mark.fullName}'s BMI (${Mark.bmi}) is higher than ${John.fullName}'s BMI (${John.bmi}) `)
}


const jonas = [
    'Diego',
    'Lima',
    2037 - 2002,
    'developer',
    ['Michael', 'Peter', 'Steven'],
    true,
    false,
    'worker',
]

const types = []


for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i])

    // types[i] = typeof jonas[i]
    types.push(typeof jonas[i])
}

console.log(types)

const years = [1991, 2007, 1969, 2020]
const ages = []

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])
}
console.log(ages)

// continuous and break
console.log('-----ONLY STRINGS-----')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue
    console.log(jonas[i], typeof jonas[i]);
}
console.log('-----BREAK WITH NUMBER-----')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break
    console.log(jonas[i], typeof jonas[i])
}


const jonas = [
    'Diego',
    'Lima',
    2037 - 2002,
    'developer',
    ['Michael', 'Peter', 'Steven']

];

// 0,1....4
// 4,3....0
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i])
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-----------Starting Exercise ${exercise}`)


    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} Lifting weights repetition ${rep}`)
    }
}


let rep = 1
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`)
    rep++
}
let dice = Math.trunc(Math.random() * 6) + 1


while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice == 6) console.log(`Loop is about to end...`)
}

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tip = [];
const totals = [];
for (let c = 0; c < bills.length; c++) {
  const tips = calcTip(bills[c]);
  tip.push(tips);
  totals.push(bills[c] + tips);
}
console.log(bills, tip, totals);
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tip));

//  file
*/
const Mark = {
  mass: 85,
  height: 1.98,
  BMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const John = {
  mass: 60,
  height: 1.75,
  BMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
John.BMI();
Mark.BMI();
console.log(John.bmi, Mark.bmi);
if (John.bmi > Mark.bmi) {
  console.log(`John's BMI ${John.bmi} is higher than Mark's ${Mark.bmi}`);
} else {
  console.log(`Mark's BMI ${Mark.bmi} is higher than John's ${John.bmi}`);
}
