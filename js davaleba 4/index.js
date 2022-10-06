//Task 1

function palidrom(txt) {
    let rev = "";
    for (let i =text.length -1; i>=0; i-- ) {
        rev += txt[i];
    }
    return txt === rev ? true : false;
}

console.log(palidrom(diagi));




//Task 2

function firstNotDup (txt) {
    for (let i = 0; i<txt.length; i++) {
        if(txt.indexOf(txt[i]) === txt.lastIndexOf(txt[i]))
        return txt[i];
    };
    return "all symbols are dups";
};

console.log(firstNotDup("worsdorw"));


// Task 3  

function firstToUpper (text) {
    return text.charAt(0).toUpperCAse() + text.substring(1);
}

function camelize(text) {
    let splitted = text.split(" ");
    return splitted.reduce((acc, cur,index) => {
        if(index === 0) {
            acc = acc + cur;
        } else acc = acc + firstToUpper(cur)
        return acc;
    }, "")
}

console.log(camelize("sad midis Matarebeli"));


// Task 4:     
function normilize(n) {
    let x = n % 10;
    if (x === 1) {
    return n + "st";
    }
    if (x === 2) {
    return n + "nd";
    }
    if (x === 3) {
    return n + "rd";
    }
    return n + "th";
};

console.log(normilize(124));


//Task 5

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function seq (arr) {
    return seq.reduce((acc, cur) => {
        if (acc[cur]) {
            acc[cur] ++; 
        } else acc[cur] = 1;
        return acc
    }, {})
}

console.log(seq(arr1));


// Task 6 

let array1 = [1, 2, 3];
let array2 = [2, 30, 1];
let concated = array1.concat(array2);
let set = new Set(concated)
console.log(set)

// Task 7 : 

function readyToPutInTheDOM(arr) {
  return arr.map((el) => {
    return `<h1>${el.name}</h1><h2>${el.age}</h2>`;
  });
}
console.log(
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);


//  Task 8 

function  sumOfDifferences(arr) {
    let sorted = arr.sort((a,b) => b-a);
    let sum = 0; 
    for (let i = 0; i<arr.length - 1; i++) {
        sum += sorted[i] - sorted[i + 1];
    }
    return sum;
};

