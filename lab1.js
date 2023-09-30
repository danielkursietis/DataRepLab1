// 2 a), b) arrow function to return a variable
const part1 = (string)=>{
    console.log(string);
};

part1("Data Representation & Querying");

// 2 c) arrow function to add 2 numbers
const addition = (num1, num2)=>{
    console.log(num1 + num2);
};

addition(2, 6);

// 2 d) multiply numbers from an array function and use .maps
const ages = [25, 31, 42, 77];

const age = (num)=>{
    if (num < 70){
        return num * 2;
    }
    else{
        return num;
    }
};

console.log(ages.map(age));

// 3 a) create string array
const strings = [];

// 3 b) addTask function to add elements to array
const addTask = (task)=>{
    strings.push(task);
    console.log("added " + task + " to array");
    return console.log(strings.length);
};

addTask("cheese");
addTask("yellow");
addTask("11");

// 3 c) list tasks through a loop
const listAllTasks = ()=>{
    for (var i = 0; i < strings.length; i++)
    {
        console.log(strings[i]);
    }
};

listAllTasks();

//3 d) deleteTask function 
const deleteTask = (task)=>{
    var index = strings.indexOf(task);
    if (index !== -1) {
        strings.splice(index, 1);
    }
    console.log("Deleted " + task + " from array");
    return console.log(strings.length);
};

deleteTask("cheese");