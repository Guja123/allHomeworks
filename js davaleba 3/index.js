
// task1
//1,1
function sumOfDigits(n) {
    if(n < 10) {
        return n;
    }
    return n % 10 +sumOfDigits(Math.floor(n/10));
};

console.log(sumOfDigits(1312));

//1,2
function sumOfDigits(n) {
    n = n + "";
    for(let i = 0; i<n.length; i++) {
        result +=  +n[i];
    }
    return result;
};
console.log(sumOfDigits(1312));


//Task 2

let factory = {
    facName: "Volkswagen Wolfsburg Plant",
    calculateWorkload: function () {
        let arr =this.employeeWeeklyWorkload;
        let result = [];
        for(let i = 0; i < arr.length; i++) {
           result.push(arr[i].timeSpent); 
        }
    },
    formatArray: function (name) {},
  };
  
  let checkData = factory.calculateWorkload.bind(workloadData)();
  console.log(checkData);
  let factoryEmployees = {
    employees: [
      { name: "John", timeSpent: 1 },
      { name: "Sam", timeSpent: 3 },
      { name: "Maria", timeSpent: 2 },
      { name: "Dan", timeSpent: 4 },
      { name: "Lorelai", timeSpent: 5 },
    ],
    employeeNum: this.employees.length,
  };
  
  let workloadData = {
    employeeWeeklyWorkload: [
      { name: "John", workload: 40 },
      { name: "Sam", timeSpent: 25 },
      { name: "Maria", timeSpent: 28 },
      { name: "Dan", timeSpent: 30 },
      { name: "Lorelai", timeSpent: 31 },
    ],
  };
  

  //Task 3

function sumOfNumbers (a, b) {
    return a+b;
};

let sumDigit = sumOfNumbers.apply(null, [4, 5]);
console.log(sumDigit);


//Task 4

function checkIfEven (n) {
    if (n % 2 == 0) 
    return "ლუწია";
    else return "არ არი ლუწი";
};

console.log(checkIfEven(4));